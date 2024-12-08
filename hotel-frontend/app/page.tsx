"use client"; // Add this line to mark the file as a client component

import { useRouter } from "next/navigation"; // Use next/navigation for client-side routing
import { useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loginStatus = localStorage.getItem("isLogin") === null;
      setIsLogin(loginStatus);

      if (loginStatus) {
        localStorage.setItem("isLogin", "false");
      }
    }
  }, []);

  useEffect(() => {
    if (isLogin !== null) {
      router.push("/home"); 
    }
  }, [isLogin, router]);

  return null;
};

export default Page;