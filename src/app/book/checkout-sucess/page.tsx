"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import {useSearchParams } from "next/navigation";

const PurchaseSuccess = () => {

  const serchparams = useSearchParams();
  const sessionID = serchparams.get("session_id"); 


  useEffect(() => {


    //use slientではasyncが使えないのでここで使う
    const fetchData = async ()=>{
    if(sessionID){

      if(sessionID) 
        {
          try{

            const res = await fetch(`${process.env.NEXT_PUBLIC_API}/checkout/success`,
              {method : "POST",
                headers: {"Content-Type" : "application/json"}, 
                 body: JSON.stringify({sessionID }),
              },
            );
      console.log(res.json());
            }catch(err){
              console.log(err);
            }
      }
    }


    };

    fetchData();
   
  });
  //successのroute.tsにコメントアウトしてある　URL
  //または、このページのブラウザURL

  return (
    <div className="flex items-center justify-center  mt-20">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          購入ありがとうございます！
        </h1>
        <p className="text-center text-gray-600">
          ご購入いただいた内容の詳細は、登録されたメールアドレスに送信されます。
        </p>
        <div className="mt-6 text-center">
          <Link
            href={`/`}
            className="text-indigo-600 hover:text-indigo-800 transition duration-300"
          >
            購入した記事を読む
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PurchaseSuccess;