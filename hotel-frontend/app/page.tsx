import Image from "next/image";


export default function Home() {
  return (
    <div className="w-full h-full">
      <h1>Hotel</h1>
      <Image
        src="/hotel.jpg"
        alt="Picture of the hotel"
        width={500}
        height={500}
      />
    </div>
  );
}
