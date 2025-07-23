"use client";

import { SessionProvider } from "next-auth/react";
import { Children, FC, PropsWithChildren } from "react";

export const NextAuthProvider: FC<PropsWithChildren>= ({children}) =>{
    return <SessionProvider>{children}</SessionProvider>
};

//anyでエラーになるのはなぜ？？
//childrenを受け取るコンポネントだと、FC<PropsWithChildren>が
// NextAuthProviderに宣言する