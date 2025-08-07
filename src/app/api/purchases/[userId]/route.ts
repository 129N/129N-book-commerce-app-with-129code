import prisma from "@/app/lib/next-auth/prisma";
import { Console } from "console";
import { Params } from "next/dist/server/request/params";
import { NextResponse } from "next/server";



//購入検索API
export async function GET(request: Request, 
    // {params} : {params: {userId: string}}
)
//paramsの引数とは？？userIdを取り出すため

{
    // const userId = params.userId;
    const url = new URL(request.url);
    const userId = url.searchParams.get("userId");
    try{

        // const purcahses = await prisma.purchase_history.findMany({
        //     where:{userId : userId}
        // });


        // return NextResponse.json(purcahses);
        return NextResponse.json({userId});
    }catch(err){
        
        console.log(err);
        
    }
}