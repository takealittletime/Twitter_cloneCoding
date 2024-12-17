"use client"

import style from "./logoutButton.module.css";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

export default function LogoutButton() {
  const router = useRouter();
  const { data:me } = useSession();
  
  // const me = { // 임시로 내 정보 있는것처럼
  //   id: 'zerohch0',
  //   nickname: '제로초',
  //   image: '/5Udwvqim.jpg',
  // }

  const onLogout = () => {
    signOut({redirect: false})
      .then(()=>{
        router.replace('/');
      })
  };

  if (!me?.user){
    return null;
  }

  return (
    <button className={style.logOutButton} onClick={onLogout}>
      <div className={style.logOutUserImage}>
        <img src={me.user?.image as string} alt={me.user?.id}/>
      </div>
      <div className={style.logOutUserName}>
        <div>{me.user?.name}</div>
        <div>@{me.user?.id}</div>
      </div>
    </button>
  )
}