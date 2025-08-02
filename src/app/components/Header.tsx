// "use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import { nextAuthOptions } from "../lib/next-auth/options";
import { getServerSession } from "next-auth";
import { User } from "../types/Types";


//async を追加した
const Header = async() => {

  // const {data : session, status} = useSession();
  // const user = session?.user;
    //if (status === "loading") return null;

  //SSRでの取得 but onclick はできないくなる(Usesessionのみ)。
  const session = await getServerSession(nextAuthOptions)
      const user: User = session?.user as User;

   console.log(user);

const profileImage: string = user?.image && user.image.trim() !== "" 
  ? user.image 
  : "/default_icon.png";


  return (
    <header className="bg-slate-600 text-gray-100 shadow-lg">
      <nav className="flex items-center justify-between p-4">
        <Link href={"/"} className="text-xl font-bold">
          Book Commerce
        </Link>
        <div className="flex items-center gap-1">
          <Link
            href="/"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            ホーム
          </Link>
          <Link
            href={user ? "/profile" : "/login"}
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            {user ? "プロフィール" : "ログイン"}
          </Link>

          {user ? <button 
         // onClick={ () => signOut({callbackUrl: "/login"}) }
          className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >ログアウト</button> : ""}

          {/* <Link href={`/profile`}>
            <Image
              width={50}
              height={50}
              alt="profile_icon"
              src={profileImage}
    // src={ "/default_icon.png"}//public に存在
           
           />
          </Link> */}

           <Link href={`/profile`}>
            {user?.image && user.image.trim() !== "" ? (
              <Image
                width={50}
                height={50}
                alt="profile_icon"
                src={user.image}
              />
            ) : (
              <Image
                width={50}
                height={50}
                alt="default_profile_icon"
                src="/default_icon.png"
              />
            )}
          </Link>

          
        </div>
      </nav>
    </header>
  );
};

export default Header;