import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "./prisma";
import { Session } from "inspector/promises";

export const nextAuthOptions: NextAuthOptions= {
    //ログインをいろいろなプロバイダーでできる。
    debug: false,
    providers:[
        GithubProvider({
      clientId: process.env.GITHUB_ID!, //IDがundefinedの場合がある
      clientSecret: process.env.GITHUB_SECRET!, //上記同文
    }),

    ],

    adapter: PrismaAdapter(prisma), //instantiation in sheme.prisma and env file

// adapter: {
//   ...PrismaAdapter(prisma),
//   getUserByAccount: async ({ provider, providerAccountId }) => {
//     const account = await prisma.account.findUnique({
//       where: {
//         providerId_providerAccountId: {
//           providerId: provider,
//           providerAccountId: providerAccountId
//         }
//       },
//       select: {
//         user: true
//       }
//     });

//     if (!account?.user) return null;

//     const user = account.user;

//     return {
//       id: user.id,
//       name: user.name,
//       email: user.email ?? "", // ✅ nullなら空文字にする（NextAuth仕様）
//       emailVerified: user.emailVerified,
//       image: user.image,
//     };
//   }
// }





    callbacks: {

        //sign inからFEに値を渡す仕組み callback関数
        session: ({session, user})=> {
            return{
                ...session,
                user:{
                    ...session.user,
                    id: user.id,
                },
            };
        },
    },
};