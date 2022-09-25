
import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import { Route } from '../models/route';
function Menu() {
  return (
    <nav>
      <ul>
        {/* <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/blog' >Blog</Link>
        </li>
        <li>
          <Link to='/profile'>Profile</Link>
        </li> */}

        {/* <li>
          <NavLink to='/' style={({isActive})=>({color: isActive ? 'blue' : 'black' })}>Home</NavLink>
        </li>
        <li>
          <NavLink to='/blog' style={({isActive})=>({color: isActive ? 'blue' : 'black' })}>Blog</NavLink>
        </li>
        <li>
          <NavLink to='/profile' style={({isActive})=>({color: isActive ? 'blue' : 'black' })}>Profile</NavLink>
        </li> */}

        {routes.map((route)=>{

          return (
            <li key={route.to}>
              <NavLink style={({isActive})=>({color: isActive ? 'blue' : 'black' })}  to={route.to} end >{route.text}</NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}


const routes: Route[] = [];

routes.push({
  to:'/',
  text:'Home'
})
routes.push({
  to:'/professionals',
  text:'Profesionales'
})
routes.push({
  to:'/profile',
  text:'Profile'
})
routes.push({
  to:'/workwithus',
  text:'Trabaja con nosotros'
})

export default Menu