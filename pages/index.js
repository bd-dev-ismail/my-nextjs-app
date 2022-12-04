import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <h2>Hello NextJs</h2>
      <Link href="/blog">Go to blog</Link>

      <Image src="/../public/assets/img.webp" width={500} height={500}></Image>
    </div>
  );
}
