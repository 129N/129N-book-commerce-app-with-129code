export type Book = {
  id: string;
  title: string;
  price: number;
thumbnail?: {
    url: string;
  };
    // thumbnail: string;　型の定義をしているので、anyよりも安全


  // 必要なら他のプロパティも追加
};
