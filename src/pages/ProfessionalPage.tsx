import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { professionalData } from '../data/blogdata'

export const ProfessionalPage = () => {
    const navigate = useNavigate()

    const returnToProfessionals = () => {

        navigate('/professionals')
    }

    const {slug} = useParams();
    const blogpost = professionalData.find((professional)=>{
        return professional.slug == slug
    })
  return (

    <React.Fragment>
        <h1>{blogpost?.name}</h1>
        <p>{blogpost?.description}</p>

        <button onClick={returnToProfessionals}>Volver</button>
    </React.Fragment>
  )
}
