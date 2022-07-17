import React from "react";
import LatestBlog from "../pages/BlogPages/LatestBlog.jsx";
import LatestBlogSearch from "../pages/BlogPages/LatestBlogSearch.jsx";
// import BlogPost from "../pages/BlogPages/BlogPost.jsx";
import Product from "../components/Product.jsx";
import RecentArticles from "../components/RecentArticles.jsx";
import RecentArticleBlog from "../components/RecentArticleBlog.jsx";
import Button from "../components/Button.jsx";
import BlogAbout from "../components/BlogAbout.jsx";
import "../style.css";
import '../App.css'


function Blog() {
    const style ={
        marginLeft:"-1em"
    }
    return (

        <div>
            <LatestBlog />
            <LatestBlogSearch />
            <div className="wraper">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
            </div>
           
            <RecentArticles />
            <div className="wraper">
            <RecentArticleBlog/>
            <RecentArticleBlog/>
            <RecentArticleBlog/>
            </div>
            <Button/>

            <BlogAbout style={style} />
            
        </div>
        
       
    );
}

export default Blog;