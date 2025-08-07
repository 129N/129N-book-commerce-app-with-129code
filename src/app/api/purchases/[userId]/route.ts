import prisma from "@/app/lib/next-auth/prisma";

import { NextRequest, NextResponse } from "next/server";



//購入検索API
export async function GET(
    request: NextRequest, 
    //  {params} : {params: {userId: string}},
     context: any,
)
//paramsの引数とは？？userIdを取り出すため

{
    // const userId = params.userId;
    //const url = new URL(request.url);
    // const userId = url.searchParams.get("userId");
    // const  userId  = params.userId;
     //const { userId } = await context.params;
     //const { userId } = params;
  const userId = context.params?.userId;

     if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

    try{
        const purcahses = await prisma.purchase_history.findMany({
            where:{ userId },
        });

        // return NextResponse.json(purcahses);
        return NextResponse.json(purcahses);
    }catch(err){
        
    console.error("Error fetching purchases:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
        
    }
}