import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full flex-col flex justify-center items-center">
      <h1 className="text-[120px]">Hi this is acomoehnsoipgn</h1>
      <Link href="/">
        <h1>back to home</h1>
      </Link>
    </div>
  );
}
