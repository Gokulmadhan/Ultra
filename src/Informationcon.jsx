import React from 'react'
import bgin from '../src/assets/bgin.jpg'

const Informationcon = () => {
  return (
    <>

    <form>
    <div className='flex flex-col items-center justify-center mt-5 gap-6 border border-gray-300  p-10 rounded-full shadow-md w-[80%] ml-[10%] ' 
    // style={{ backgroundImage: `url(${bgin})`, backgroundSize: 'cover', backgroundPosition: 'center', filter:'blur(px)',}}
    >
     
        <p className='text-4xl'>Get in Touch</p>
       
        <div className="flex col   items-center gap-3">
            <input 
            type='text'
            placeholder='Name*'
            size="50"
            required
            className="px-9 py-2 border border-gray-300  text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
 
            />
            </div>
            <div>
            <input 
            type='Email'
            placeholder='Email*'
            size="50"
            className="px-9 py-2 border border-gray-300  text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
            />

        </div>
        <div>
            <input 
            type='text'
            placeholder='Number*'
            size="50"
            className="px-9 py-2 border border-gray-300  text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
            />

        </div>
        <div  >
            <select  className=" px-9 py-2 border border-gray-300  text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500   " style={{width:"480px"}}   >
                 
                 <option value="Select Our Services" className='text-gray-700' >Select Our Services</option>
                <option value="Software Development">Software Development</option>
                <option value="Website Development">Website Development</option>
                <option value="Mobile Application Development">Mobile Application Development</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="IT Staffing">IT Staffing</option>
                <option value="UI & UX Design">UI & UX Design</option>
                <option value="Others">Others</option>
                
                </select>
            
        </div>
        <div >
            <textarea placeholder='Your Message' cols='34'     
             className="px-9 py-2 border border-gray-300  text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500  "
             style={{width:"480px"}}            >
                 </textarea>
        </div>

        <div>
            <button   className="px-4 py-2 border border-gray-300 bg-blue-600  text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 "
            >Send Message</button>
        </div>
        
    </div>
    </form>
    <div className='flex justify-center ' >
    <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.470291681104!2d76.9940863!3d11.003298100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859c5ee211c7b%3A0x9880ea6c81891b24!2sNivedh%20Vikas%20Apartment!5e0!3m2!1sen!2sin!4v1735190531581!5m2!1sen!2sin"
            
            style={{ borderRadius:20 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className='w-full h-96 mt-6 ' 
          ></iframe>
          </div>
    </>

  )
}

export default Informationcon