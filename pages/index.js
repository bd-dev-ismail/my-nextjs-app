import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";


export default function Home({posts}) {
  return (
    <div className="container mx-auto">
      <Banner />
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post?.id} className="card w-96 mt-10 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{post.title}!</h2>
              <p>{post.body}</p>
            </div>
          </div>
        ))}
      </div>
      <Link href="/posts" className="text-center">
        <button className="btn btn-primary">All Post</button>
      </Link>
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?limit=3"
  );
  const data = await res.json();
  console.log(data);
  return {
    props: {
      posts: data,
    },
  };
};