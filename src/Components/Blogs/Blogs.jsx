import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Blogs = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])

    return (
        <div>
            <hr />
            <section className="py-6 sm:py-12 dark:text-gray-800">
	<div className="container p-6 mx-auto space-y-8">

		<div className="space-y-2 text-center">
			<h2 className="text-3xl font-bold text-white">Blogs</h2>
			
		</div>

		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
			{
                blogs.map(blog=><article key={blog._id} className="flex flex-col dark:bg-gray-50">
                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={blog.image} />
                    </a>
                    <div className="flex flex-col flex-1 p-6">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                        
                        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{blog.title}</h3>
                        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                          <p>{blog.description}</p>
                        </div>
                    </div>
                </article>)
            }

		

		</div>
	</div>
</section>
        </div>
    );
};

export default Blogs;