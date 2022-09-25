import React from 'react'

import { Link, Outlet } from 'react-router-dom'
import { BlogData } from '../models/blogdata'
import { blogdata } from '../data/blogdata'
export const Blog = () => {
  return (
    <React.Fragment>
      <h1>Blog</h1>
      <Outlet/>

      <ul>
        {blogdata.map(post => <BlogLink key={post.title} post={post} />)}
      </ul>
    </React.Fragment>
  )
}


function BlogLink({post}:any) {


  return (
    <li>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  )
}


