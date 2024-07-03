import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
    const data = useLoaderData();
    
    console.log(data);
     
    return (
        <div>
            
        </div>
    );
};

export default BlogDetails;