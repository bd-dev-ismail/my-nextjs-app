import Head from "next/head";
import Link from "next/link";

const Blog = () => {
    return (
        <div>
            <Head>
                <title>Blog Page</title>
            </Head>
            <h1>This is Blog page</h1>
            <Link href="/blog/blog1">
            Go To Blog Page1
            </Link>
        </div>
    );
};

export default Blog;