import { useRouter } from "next/router";

const postDetails = ({post}) => {
    const router = useRouter();
    const handleBack = ()=> {
        router.push('/posts')
    }
    return (
      <div className="card mx-auto container my-20 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">Titlte: {post?.title}</h2>
          <p>Body: {post?.body}</p>
          <div className="card-actions justify-end">
            <button className="btn">Buy Now</button>
            <button onClick={handleBack} className="btn btn-secondary">Back To Post</button>
          </div>
        </div>
      </div>
    );
};
export const getStaticProps = async (context) => {
    const {params} = context;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.postId}`);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      post: data,
    },
  };
};
export  const getStaticPaths = async()=> {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/posts?limit=10"
        );
        const posts = await res.json();
       const paths = posts?.map(post => {
        return {
            params: {
                postId: `${post.id}`
            }
        }
       });
       return {
        paths, 
        fallback: false,
       }
    }

export default postDetails;