"use client";

import { useRouter } from "next/router";
import { useEffect } from "react";
import Main from "@/app/(beforeLogin)/_component/Main";

export default function Login() {
  const router = useRouter();

  useEffect(()=>{
    router.replace('/i/flow/login');
  },[router]);
  
  return <Main/>;
}

//router.push
// localhost:3001/login -> localhost:3001/login -> localhost:3001/i/flow/login
// router.push를 했을 때 문제는 뒤로가기 했을 때 localhost:3001/login으로 돌아감 (i/flow/login으로 돌아오는 현상 반복)

// router