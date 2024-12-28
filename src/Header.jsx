import React from 'react'
import { Link } from 'react-router'
import logo from '../src/assets/ultraflysolutionslog.webp'
import mail from '../src/assets/download (1).png'


const Header = () => {
  return (
        <>
        <div className='bg-yellow-50 h-9 ' >
        <a href="mailto:info@ultraflySolution.com" className='flex justify-item-start'><img src={mail} width={'20px'} className='ml-5'/>info@ultraflySolution.com</a>
        </div>



    <div> <nav>

     
    <ul className='bg-blue-100'>
  <div className='flex justify-start text-xl shadow-md'>
    <img src={logo} width={"100px"} className='' />
    <div className='flex justify-item-end mt-3 gap-12 ml-52'>
      <li><Link to='/Home'>Home</Link></li>
      <li><Link to="/Services">Services</Link></li>
      <li><Link to='/TechStack'>Tech Stack</Link></li>
      <li className="relative group">
       <li> <Link>Who are we</Link></li>
        {/* Dropdown Menu */}
        <ul className="absolute left-0 mt- hidden bg-white text-black shadow-lg group-hover:block text-sm w-44 rounded-xl">
          <li className="px-4 py-2 hover:bg-gray-200"><Link to="/why-us">Why Choose us</Link></li>
          <li className="px-4 py-2 hover:bg-gray-200"><Link to="/who-we-work-with">Who We Work With</Link></li>
          <li className="px-4 py-2 hover:bg-gray-200"><Link to="/WhatWEDo">WhatWeDo</Link></li>
          <li className="px-4 py-2 hover:bg-gray-200"><Link to="/achievements">Our Achievements</Link></li>
        </ul>
      </li>
      <li><Link to='/Carrier'>Carrier</Link></li>
      <li><Link to='/Blog'>Blog</Link></li>
      <li><Link to='/Contact'>Contact</Link></li>
    </div>
  </div>  
</ul>

  </nav></div>
  </>

  )
}

export default Header