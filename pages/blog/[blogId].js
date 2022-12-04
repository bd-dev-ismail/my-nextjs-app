import { useRouter } from "next/router";

const blogId = () => {
    const router = useRouter();
    const id = router.query.blogId
    return (
        <div>
            <h3>This is a dynamic page of {id}</h3>
        </div>
    );
};

export default blogId;