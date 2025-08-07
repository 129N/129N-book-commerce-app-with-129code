import Image from "next/image";
import React from "react";
import { getDetailBook } from "@/app/lib/microcms/client";
import Book from "@/app/components/Book";

type PageProps ={
  params: {
    id:string;
  };
};

const DetailBook = async ({params}: any) => {

  //  console.log(params.id);

  const book = await getDetailBook(params.id); //SSR
  // console.log(book);

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <Image
        src = {book.thumbnail.url}
        alt = "test"
          className="w-full h-80 object-cover object-center"
          width={700}
          height={700}
        />
        <div className="p-4">
          <h2 className="text-2xl font-bold">{book.title}</h2>
          <div
            className="text-gray-700 mt-2"
            dangerouslySetInnerHTML={{ __html: book.content}}
          />
          {/* html要素の表示 */}

          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-500">公開日:{new Date(book.createdAt).toDateString() }</span>
            <span className="text-sm text-gray-500">最終更新:{ new Date( book.publishedAt as any).toDateString() }</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBook;

// ✅ こうすると Next.js に認識されやすくなる
// export default async function DetailBook({ params }: { params: { id: string } }) {
//   console.log("📘 ID:", params.id);

//   const book = await getDetailBook(params.id);
//   console.log(book);

//   return (
//     <div>
//       <h1>{book.title}</h1>
//       {/* 他の情報 */}
//     </div>
//   );
// }