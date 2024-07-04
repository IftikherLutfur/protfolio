import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "./Home";
import BlogDetails from "./Components/Blogs/BlogDetails";
import Projects from "./Components/Projects/Projects";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/> ,
    },
    {
      path:'/projects',
      element:<Projects/>
    },
    {
      path:"/more/:id",
      element:<BlogDetails/>,
      loader:()=>fetch("blogs.json/more")
    }
    
  ]);
  export default router;