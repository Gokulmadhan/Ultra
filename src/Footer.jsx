import React from 'react'
import logo from '../src/assets/ultraflysolutionslog.webp'
import face from '../src/assets/facebook.png'
import insta from '../src/assets/insta.webp'
import linkedin from '../src/assets/linkedin.jpg'
import x from '../src/assets/x.png'
import you from '../src/assets/you.png'
import medium from '../src/assets/medium.png'
import maps from '../src/assets/maps.jpg'
import { Link } from 'react-router'
import india from '../src/assets/india.webp'
import united from '../src/assets/united.webp'
import mail from '../src/assets/download (1).png'


const Footer = () => {
  return (
    <>

      
      <div>
        <div className='flex justify-center gap-16  '>

          <img src={logo} width={"130px"} />
          <div className='ml-48 mt-3'>
            <a href='https://www.facebook.com/ultraflysolutions'>
              <img src={face} width={"30px"} height={"5px"} /></a>
          </div>
          <div className='mt-3'>
            <a href='https://x.com/UltraflyS'>
              <img src={x} width={"30px"} height={"5px"} /></a>
          </div>
          <div className='mt-3'>
            <a href='https://www.linkedin.com/company/ultraflysolutions/posts/?feedView=all'>
              <img src={linkedin} width={"30px"} height={"5px"} /></a>
          </div>
          <div className='mt-3'>
            <a href='https://www.instagram.com/ultraflysolutions/'>
              <img src={insta} width={"30px"} height={"5px"} /></a>
          </div>
          <div className='mt-3'>
            < a href='https://www.google.com/maps/place/Nivedh+Vikas+Apartment/@11.0032981,76.9915114,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba859c5ee211c7b:0x9880ea6c81891b24!8m2!3d11.0032981!4d76.9940863!16s%2Fg%2F11b5vkl6c1?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D'>
              <img src={maps} width={"30px"} height={"5px"} /></a>
          </div>

          {/* <div className='mt-3'>
            < a href='https://www.youtube.com/channel/UC2mcL17ybjrgSQ6hJnboeTw'>
              <img src={you} width={"30px"} height={"5px"} /></a>
          </div> */}
          <div className='mt-3'>
            <a href='https://medium.com/@ultraflysolutions'>
              <img src={medium} width={"30px"} height={"5px"} /></a>
          </div>
        </div>
        <div className=" ml-10 mr-10">
          <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <br />
        </div>
      </div>
      <div className=' flex col-span-3 gap-36  text-justify-center ml-10 mr-10  rounded-sm text- bg-blue-50'>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.470291681104!2d76.9940863!3d11.003298100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859c5ee211c7b%3A0x9880ea6c81891b24!2sNivedh%20Vikas%20Apartment!5e0!3m2!1sen!2sin!4v1735208513753!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        Office Address: India
27/9, Nivedh Vikas, Pankaja Mills
Road, Puliakulam,
Coimbatore-641 045.
        </iframe> */}
       
      <div className='ml-8 '>
        <br/>
      <h1 className='text-xl font-bold'>Ultrafly Solutions</h1><br/>
        <a href='https://www.google.com/maps/place/Nivedh+Vikas+Apartment/@11.0032981,76.9915114,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba859c5ee211c7b:0x9880ea6c81891b24!8m2!3d11.0032981!4d76.9940863!16s%2Fg%2F11b5vkl6c1?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D'> 
        <p className=' hover:text-blue-900 text-justify '><strong>Office Address: India</strong><br/>
<p className='text-sm w-36'>27/9, Nivedh Vikas, Pankaja Mills
Road, Puliakulam,
Coimbatore-641 045.</p></p></a><br/>
<p className='w-48 hover:text-yellow-600'><strong>Office Address: USA</strong>
<p className='text-sm '>1101 Iroquois Ave, Naperville,
Illinois- 60563.</p></p>
</div>

      <div >
        <br/>
        <h1 className='text-xl font-bold'>Quick Links</h1><br/>
        <ul className='text-sm leading-8 font-medium'>
        <li className='hover:text-yellow-600 '><Link to='/' >Home</Link></li>
      <li className='hover:text-yellow-600'><Link to="/about">Services</Link></li>
      <li className='hover:text-yellow-600'><Link to='/'>Tech Stack</Link></li>
      <li className='hover:text-yellow-600'><Link to='/'>Success Stories</Link></li>
      <li className='hover:text-yellow-600'><Link to='/'>Carrier</Link></li>
      <li className='hover:text-yellow-600'><Link to='/'>Blog</Link></li>
      <li className='hover:text-yellow-600' ><Link to='/Contact'>Contact</Link></li>
        </ul>
      </div>


      <div >
      <br/>
        <h1 className='text-xl font-bold'>Our Features</h1><br/>
        <ul className='text-sm leading-8 font-medium'>
        <li className='hover:text-yellow-600 '><Link to='/' >Why Choose Us</Link></li>
      <li className='hover:text-yellow-600'><Link to="/about">Who We Work</Link></li>
      <li className='hover:text-yellow-600'><Link to='/'>What We do</Link></li>
      <li className='hover:text-yellow-600'><Link to='/'>Our Achievements</Link></li>
      <li className='hover:text-yellow-600'><Link to='/'>Terms Of Services</Link></li>
      <li className='hover:text-yellow-600'><Link to='/'>Privacy Policy</Link></li>
        </ul>
      </div>

      <div >
      <br/>
      <h1 className='text-xl font-bold'>Quick Links</h1><br/>
      <div className='text-sm leading-8 font-medium'>
      <a href="mailto:info@ultraflysolutions.com" className="flex items-center gap-3">
      <img src={mail} width="20" alt="Mail Icon" />
          <span>info@ultraflysolutions.com</span></a>
          <a href="tel:+919150001089" className="flex items-center gap-3">  <img src={india} width="20" alt="Mail Icon" />
     <span> +91 91500 01089</span>
    </a>
    <a href="tel:+91 91500 01090" className="flex items-center gap-3">
    <img src={india} width="20" alt="Mail Icon" />
     <span> +91 91500 01089</span>
    </a>
    <a href="tel:+1 562 521 9684" className="flex items-center gap-3">
    <img src={united} width="20" alt="Mail Icon" />
     <span> +1 562 521 9684</span>
    </a>
    </div>
      </div>

      </div>
    </>
  )
}

export default Footer