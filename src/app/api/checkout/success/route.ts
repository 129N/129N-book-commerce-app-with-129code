import prisma from "@/app/lib/next-auth/prisma";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);


//購入履歴の保存
//購入履歴の重複を防止する機能を追加

export async function POST(request: Request, response:Response) {

    const {sessionid} = await request.json();
    //sessionidを取り出して、APIをたたく
    try{

        const session = await stripe.checkout.sessions.retrieve(sessionid);

        const existing_purchase = prisma.purchase_history.findFirst({
            where:{
                userId: session.client_reference_id!,
                bookId: session.metadata?.bookId!,
            },
        });

        //購入履歴があった場合は、elseをリターン

        if(!existing_purchase)
        {
            //http://localhost:3000/book/checkout-sucess?
            // session_id=cs_test_a1G5SwM1Egu1RfPC8QOXX3trqRfyQyZh9SZrspYOuRYDbMZTKsA0bVjyW2
            const purchase = await prisma.purchase_history.create({
                data:{
                    userId: session.client_reference_id!,
                    bookId: session.metadata?.bookId!,
                },
            });
            return NextResponse.json({purchase});
        }else{
            return NextResponse.json({message: "すでに購入済みです"});
        }

    }catch(err){

        return NextResponse.json(err);
    }
}