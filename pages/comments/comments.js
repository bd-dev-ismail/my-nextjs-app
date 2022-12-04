

const comments = ({comments}) => {
    console.log(comments);
    return (
        <div>
            {
                comments.map(cmnt => <h1 className="my-10 p-5 border-primary-focus text-2xl text-primary mx-10 border-4" key={cmnt?.id}>Comment Body: {cmnt?.body}</h1> )
            }
        </div>
    );
};

export default comments;

export const getServerSideProps = async()=> {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await res.json();
    return {
        props: {
            comments: data
        }
    }
}