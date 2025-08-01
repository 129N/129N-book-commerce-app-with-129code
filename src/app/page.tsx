// "use client";
import { getServerSession } from "next-auth";
import Book from "./components/Book";
import { getAllBooks } from "./lib/microcms/client";
import  {Types as BookType, User, Purchase} from '@/app/types/Types';
import { nextAuthOptions } from "./lib/next-auth/options";



export default async function Home() {

  const {contents} = await getAllBooks();

  const session = await getServerSession(nextAuthOptions);
  const user: User = session?.user as User;
  //as USer　存在するときだけ型をつける。

let purchaseBookIds : string[] ;


//SSR なので、use clienthが使えない
  if(user){

    //API たたき
  const purchase_Reponse = await fetch(`${process.env.NEXT_PUBLIC_API}/purchases/${user.id}`,

    {cache:"no-store"} //SSRで呼び出す必要性は？？
  );

  const purchasesData = await purchase_Reponse.json();
  //console.log(purchasesData);

   purchaseBookIds = purchasesData.map(
    (purchaseBook : Purchase) => purchaseBook.bookId
  );

  //console.log(purchaseBookIds);
  }
  

  return (
    <>
      <main className="flex flex-wrap justify-center items-center md:mt-32 mt-20">
        <h2 className="text-center w-full font-bold text-3xl mb-2">
          Book Commerce
        </h2>

        {/* Book.tsxで型を指定済み */}
        {contents.map((book: BookType) => (
          <Book key={book.id} book={book} ispurchased ={purchaseBookIds.includes(book.id)} />
        ))}
      </main>
    </>
  );
}