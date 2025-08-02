export type Types = {
  id: string;
  title: string;
  content: string;
  price: number;
  thumbnail: {  url: string;};
  createdAt: string;
  updatedAt: string;
  purchasedbookINFO : string | any ;
    // thumbnail: string;　型の定義をしているので、anyよりも安全


  // 必要なら他のプロパティも追加
};


export type User = {
  id : string,
   name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
}


export type Purchase = {
  id : string;
  userId: string;
  bookId: string;
  createdAt: string;
  user : User;
};