import React from 'react'
import idea from '../src/assets/idea.webp'
import design from '../src/assets/design.jpg'
import quality from '../src/assets/quality.webp'
import Footer from './Footer'
import consistency from '../src/assets/consistency.webp'
import strtegy from '../src/assets/strtegy.webp'
import business from '../src/assets/business.webp'

const WhatWEDo = () => {
  return (
    <>         
    <div className='bg-blue-50'>
                <div className='text-center '>
                    <br/>
                    <div className=''>
                        <h1 className='text-4xl font-medium'>What We Do</h1>
                        </div>
                      
                    <div className='text-sm text-gray-700  mt-5 '>
                       <p>Over the past 5 years, we have delivered more than 100+ projects.</p><p> We are empowering data and delivering added value to our clients.
                   </p> </div>
                   <div className='flex flex-wrap justify-center gap-4 mt-9'>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden ">
        <img
          src={idea}
          alt="Customer Experience"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600">
          Idea To Implementation
          </h2>
          <p className="text-gray-600 text-justify text-sm leading-6">
          Implementing an idea may seem daunting, but it can be rewarding by breaking it down into manageable steps. We define the idea clearly, conduct market research, create a detailed plan, assemble a skilled team, communicate and collaborate effectively.
          </p>
        </div>
      </div>
    
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden ">
        <img
          src={design}
          alt="Unique Services"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600">
          Design & Deploy Solution
          </h2>
          <p className="text-gray-600 text-justify text-sm leading-6">
          By comprehending clients' goals, demands, and challenges, we develop solutions using the latest technology and industry best practices. Our team delivers solutions with minimal disruption to business operations, providing ongoing assistance for continued success.
          </p>
        </div>
      </div>
    
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden ">
        <img
          src={consistency}
          alt="Enterprise Modernization"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600">
          Consistency and Follow-Up
          </h2>
          <p className="text-gray-600 text-justify text-sm leading-6">
          Providing high-quality technological solutions requires a commitment to delivering the same level of quality, attention to detail and customer service, regardless of the job's size. We believe these principles foster enduring client relationships and promote economic growth.  </p>
        </div>
      </div>
    
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden ">
        <img
          src={quality}
          alt="Project On-Time Delivery"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600">
          Excellence and Quality
          </h2>
          <p className="text-gray-600 text-justify text-sm leading-6">
          Our solutions undergo stringent quality control procedures at every stage, from planning to implementation. We believe that excellence and quality are key to success in the fast-paced IT industry and are committed to delivering excellent solutions to our clients at a competitive price.  </p>
        </div>
      </div>
    
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden ">
        <img
          src={strtegy}
          alt="Better HR Process"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600">
          Strategy
          </h2>
          <p className="text-gray-600 text-justify text-sm leading-6">
          We take a holistic approach to strategy development, collaborating with clients to understand their long-term goals. We also regularly evaluate our strategies to ensure they remain relevant and successful in helping clients achieve their objectives.    </p>
        </div>
      </div>
    
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden ">
        <img
          src={business}
          alt="Specialized Teams"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600">
          Business
          </h2>
          <p className="text-gray-600 text-justify text-sm leading-6">
          We offers customised IT solutions to businesses of all sizes and industries, knowing that today's dynamic environment presents unique challenges. As We strives to help businesses thrive in the digital age by developing solutions that are required to their specific needs and objectiv    </p>
        </div>
      </div>
    </div>
    </div>
    <br/>
    <br/>
    </div>
    <Footer/>
    </>
    
    
  )
}

export default WhatWEDo