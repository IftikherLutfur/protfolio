import Marquee from "react-fast-marquee";


const Left = () => {
    return (
        <div className="pl-10">
            
            <div className="my-5">
            <h1 className="text-4xl font-bold mb-5 uppercase">Skills</h1>
            <small>Based on my knowledge and experience, my skills include:</small>
            <p className="my-3">1.HTML: Creating and structuring web content.</p>
            <p className="my-3">2.CSS: Styling and designing web pages.</p>
            <p className="my-3">3.JavaScript: Adding interactivity and dynamic behavior to websites.</p>
            <p className="my-3">4.React JS: Building modern, efficient, and dynamic user interfaces.</p>
            <p className="my-3">5.MongoDB: Managing and querying NoSQL databases.</p>
            <p className="my-3">6.Firebase: Implementing backend services like authentication, database, and hosting.</p>
            </div>
            <hr />
            <div className="my-5">
            <h1 className="text-4xl font-bold mb-5 uppercase">Experience</h1>
          <p>I completed a Web Development course at Programming Hero. There, I learned to write and style HTML and CSS for websites, make them dynamic with JavaScript and React JS, manage data with MongoDB, and handle authentication using Firebase. I have been coding consistently for the past six months and am becoming more efficient day by day while exploring new technologies.</p>
            </div>
            <hr />
<div className="my-4">
    <h2 className="text-2xl font-bold mb-6">So far i explored:</h2>

            <Marquee>
 <div className="mx-2"><img className="w-20 h-16" src="https://upload.wikimedia.org/wikipedia/commons/d/de/HTML5_oval_logo.png" alt="" /></div>
 <div className="mx-2"><img className="w-20 h-16" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_640.png" alt="" /></div>
 <div className="mx-2"><img className="w-20 h-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s" alt="" /></div>
 <div className="mx-2"><img className="w-20 h-16" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="" /></div>
 <div className="mx-2"><img className="w-20 h-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbAmafdPNr9fd0KC0Z98WYEC7Wl1wYlPVf-A&s" alt="" /></div>
 <div className="mx-2"><img className="w-20 h-16" src="https://asset.brandfetch.io/ideyyfT0Lp/idhHZwYUWa.png" alt="" /></div>
 <div className="mx-2"><img className="w-20 h-16" src="https://ctatus-prod.s3.eu-west-2.amazonaws.com/d1x892rl7n8nv9ufz26zbz8rsucq" alt="" /></div>
</Marquee>
</div> 
        </div>
    );
};

export default Left;