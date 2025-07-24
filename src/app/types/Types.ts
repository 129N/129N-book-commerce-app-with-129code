export type Types = {
  id: number;
  title: string;
  content: string;
  price: number;
thumbnail: {  url: string;};
      createdAt: string;
    updatedAt: string;
    // thumbnail: string;　型の定義をしているので、anyよりも安全


  // 必要なら他のプロパティも追加
};
