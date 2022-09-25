import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { blogdata } from '../data/blogdata'
export const BlogPost = () => {
    const navigate = useNavigate()

    const returnToBlog = () => {

        navigate('/blog')
    }

    const {slug} = useParams();
    const blogpost = blogdata.find((post)=>{
        return post.slug == slug
    })
  return (

    <React.Fragment>
        <h1>{blogpost?.title}</h1>
        <p>{blogpost?.author}</p>
        <p>{blogpost?.content}</p>

        <button onClick={returnToBlog}>Volver al blog</button>
    </React.Fragment>
  )
}
