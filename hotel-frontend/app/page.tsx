"use client"; // Add this line to mark the file as a client component

import { useRouter } from "next/navigation"; // Use next/navigation for client-side routing
import { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  const isLogin = localStorage.getItem("isLogin") === null;

  if (isLogin) {
    localStorage.setItem("isLogin", "false");
  }

  useEffect(() => {
    router.push("/home");
  }, [router]);

  return null;
};

export default Page;
