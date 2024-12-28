import React from 'react'
import mailcon from '../src/assets/mailcon.jpg'
import locationcon from '../src/assets/locationcon.png'
import callcon1 from '../src/assets/callcon2.png'
import Informationcon from './Informationcon'
import logo from '../src/assets/ultraflysolutionslog.webp'
import Footer from './Footer'
const Contact = () => {
  return (

    <>
  

    <div className='flex justify-center'>
      <div>
      <h1 className='text-5xl ml-16'>Contact Us</h1>
      <br/>
      <div>
      <p className='text-gray-400'>Let's discuss your case and how can we help you</p>
      </div>
    </div>
    </div>
    <div className="flex flex-row items-center justify-center mt-5 gap-6 border border-gray-300  p-10 rounded-full shadow-md w-[80%] ml-[10%] "
    // style={{ backgroundImage: `url(${logo})`, backgroundSize: '', backgroundPosition: 'center' ,width:""  }}

    >
  {/* Email Section */}
  <a href="mailto:info@ultraflysolutions.com" className="flex items-center gap-3">
    <img src={mailcon} width="30" alt="Mail Icon" />
    <span>info@ultraflysolutions.com</span>
  </a>

  {/* Vertical Divider */}
  <div className="border-l border-gray-300 h-24"></div>

  {/* Location Section */}
  <div className="flex items-center gap-3">
    <img src={locationcon} width="30" alt="Location Icon" />
    <p className="text-justify">
      
      27/9, Nivedh Vikas,<br/> Pankaja Mills Road, <br />
      Puliakulam,<br/> Coimbatore-641 045.
    </p>
  </div>

  {/* Vertical Divider */}
  <div className="border-l border-gray-300 h-24"></div>

  {/* Call Section */}
  <div className="flex items-center gap-3">
    <img src={callcon1} width="30" alt="Call Icon" />
    <a href="tel:+919150001089" className="">
      +91 91500 01089
    </a>
  </div>
</div>

<Informationcon/>
<Footer/>
    </>
  )
}

export default Contact