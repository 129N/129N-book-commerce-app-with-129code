//C:\Users\itsuk\Desktop\codestudy\Udemy\book-commerce\src\app\api\auth\[...nextauth]\route.ts
import NextAuth from "next-auth";
import { nextAuthOptions } from "@/app/lib/next-auth/options";

//app\lib\next-auth\options.ts より
//GitHubのNextAuthOptionsをimport
const handler = NextAuth(nextAuthOptions);


export {handler as GET, handler as POST};
