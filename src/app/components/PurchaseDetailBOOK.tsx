import React from "react";
import Link from "next/link";
import Image from "next/image";
import  {Types as BookType} from '@/app/types/Types';

type  PurchaseProductProps = {
purchasedbookINFO : BookType
};


const purchaseDetailbook = ({purchasedbookINFO} : PurchaseProductProps) => {
  return (
    <Link
      href={`/book/${purchasedbookINFO.id}`}
      className="cursor-pointer shadow-2xl duration-300 hover:translate-y-1 hover:shadow-none"
    >
      <Image
        priority
        src={purchasedbookINFO.thumbnail.url}
        alt={purchasedbookINFO.title}
        width={450}
        height={350}
        className="rounded-t-md"
      />
      <div className="px-4 py-4 bg-slate-100 rounded-b-md">
        <h2 className="text-lg font-semibold"></h2>
        {/* <p className="mt-2 text-lg text-slate-600">この本は○○...</p> */}
        <p className="mt-2 text-md text-slate-700">値段：{purchasedbookINFO.price}円</p>
      </div>
    </Link>
  );
};

export default purchaseDetailbook;