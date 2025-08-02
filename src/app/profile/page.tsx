import { getServerSession } from "next-auth";
import Image from "next/image";
import { nextAuthOptions } from "../lib/next-auth/options";
import { Purchase, User } from "../types/Types";
import { getDetailBook } from "../lib/microcms/client";
import  {Types as BookType} from '@/app/types/Types';
import PurchaseDetailBOOK from "../components/PurchaseDetailBOOK";

export default async function ProfilePage() {

    const session = await getServerSession(nextAuthOptions)
    const user: User = session?.user as User;


    //配列を初期化
    let purchaseDetailbook : BookType[] = [];
    
    //SSR なので、use clienthが使えない
      if(user)
    {
    
        //API たたき
      const purchase_Reponse = await fetch(`${process.env.NEXT_PUBLIC_API}/purchases/${user.id}`,
    
        {cache:"no-store"} //SSRで呼び出す必要性は？？
      );
    
      const purchasesData = await purchase_Reponse.json();
    //  console.log(purchasesData);


     purchaseDetailbook = await Promise.all(
        purchasesData.map(async (purchase : Purchase) => {
        return await getDetailBook(purchase.bookId);
    })
);
    //purchaseを非同期で呼び出し、client.ts の　getDetailBook　
    // purchase.bookIdを呼び出し、map関数で表示する。
    //記事をすべて完了するまでfetchする。

      }



  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">プロフィール</h1>

      <div className="bg-white shadow-md rounded p-4">
        <div className="flex items-center">
          <Image
            priority
            src={user.image || "/default_icon.png"}
            alt="user profile_icon"
            width={60}
            height={60}
            className="rounded-t-md"
          />
          <h2 className="text-lg ml-4 font-semibold">お名前：{user.name}</h2>
        </div>
      </div>

      <span className="font-medium text-lg mb-4 mt-4 block">購入した記事</span>
      <div className="flex items-center gap-6">

    {purchaseDetailbook.map((purchasedbookINFO: BookType) => (
            <PurchaseDetailBOOK 
            key = {purchasedbookINFO.id}
            purchasedbookINFO = {purchasedbookINFO}
            />
        ))
    }

      </div>
    </div>
  );
}