import { createClient, MicroCMSListResponse } from 'microcms-js-sdk';

// import {Types as BookType} from '@/app/components/Book';
import  {Types as BookType} from '@/app/types/Types';


export const client = createClient({

    serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN!,
    apiKey: process.env.NEXT_PUBLIC_API_KEY!,

    //! のマークは　|| undefinedと同義語。
    //空でも大丈夫という宣言
    

    //この表記は危険なので、env fileで定義する
//   serviceDomain: 'bookcm', 
//   apiKey: 'api-key',
});

//期待される形を TypeScript的に指定できる。anyのエラーを防ぐ
//: Promise< MicroCMSListResponse <BookType> >
export const getAllBooks = async(): Promise< MicroCMSListResponse <BookType> > => {

    const allBooks = await client.getList<BookType>({
            endpoint: "ebook", // https://bookcm.microcms.io/apis/ebook/settingsのbasic information 
        });

        return allBooks;
};

export const getDetailBook = async(contentId: string) =>{

    const detailBook = await client.getListDetail<BookType>({
        endpoint: "ebook", 
        contentId,
    });

    return detailBook;
};