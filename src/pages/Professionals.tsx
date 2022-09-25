import React from 'react'

import { Link, Outlet } from 'react-router-dom'
import { Professional } from '../models/blogdata'
import { professionalData } from '../data/blogdata'
export const Professionals = () => {
  return (
    <React.Fragment>
      <h1>Profesionales</h1>
      <Outlet/>

      <ul>
        {professionalData.map(professional => <ProfessionalLink key={professional.name} post={professional} />)}
      </ul>
    </React.Fragment>
  )
}


function ProfessionalLink({post: professional}:any) {


  return (
    <li>
      <Link to={`/professionals/${professional.slug}`}>{professional.name}</Link>
    </li>
  )
}


