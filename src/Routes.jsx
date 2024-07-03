import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "./Home";
import BlogDetails from "./Components/Blogs/BlogDetails";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/> ,
    },
    {
      path:"/more/:id",
      element:<BlogDetails/>,
      loader:()=>fetch("blogs.json/more")
    }
    
  ]);
  export default router;