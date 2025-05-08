import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <>
   <h1>Hola a todos</h1>
   <Link href={"/login"}>Login</Link>
   </>
  );
}
