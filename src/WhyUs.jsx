import React from 'react'
import customer from '../src/assets/customer.webp'
import unique from '../src/assets/unique.webp'
import erp from '../src/assets/erp.webp'
import delevery from '../src/assets/delevery.webp'
import hr from '../src/assets/hr.webp'
import teams from '../src/assets/teams.webp'
import Footer from './Footer'

const WhyUs = () => {
    return (

        <>

           
<div className='bg-blue-50'>
            <div className='text-center '>
                <br/>
                <div className=''>
                    <h1 className='text-4xl font-medium '>Why Choose Us</h1>
                    </div>
                  
                <div className='text-sm text-gray-700  mt-5'>
                   <p> Our solutions are very state-of-the-art and timely. We ensure adopting innovative procedures and advantages technologies for best customer-focused results.</p><p> We have been there and done it all before.
               </p> </div>
               <div className='flex flex-wrap justify-center gap-4 mt-9'>
  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden h-80">
    <img
      src={customer}
      alt="Customer Experience"
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600">
        Customer Experience
      </h2>
      <p className="text-gray-600 text-justify text-sm leading-6">
        Customer experience is the overall impression a customer has when engaging with a product or service.
      </p>
    </div>
  </div>

  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden h-80">
    <img
      src={unique}
      alt="Unique Services"
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600">
        Unique Services
      </h2>
      <p className="text-gray-600 text-justify text-sm leading-6">
        We believe every business has unique products, services, opportunities to set their goals and achieve more revenue.
      </p>
    </div>
  </div>

  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden h-80">
    <img
      src={erp}
      alt="Enterprise Modernization"
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600">
        Enterprise Modernization
      </h2>
      <p className="text-gray-600 text-justify text-sm leading-6">
        The process of updating and improving the technologies used by an organization in order to take advantage of new technologies.
      </p>
    </div>
  </div>

  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden h-80">
    <img
      src={delevery}
      alt="Project On-Time Delivery"
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600">
        Project On-Time Delivery
      </h2>
      <p className="text-gray-600 text-justify text-sm leading-6">
        Our project manager streamlines the operation and guides team members to complete your project.
      </p>
    </div>
  </div>

  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden h-80">
    <img
      src={hr}
      alt="Better HR Process"
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600">
        Better HR Process
      </h2>
      <p className="text-gray-600 text-justify text-sm leading-6">
        We have a fast onboarding process and we monitor each employee's performance with a Customer Relationship Supervisor.
      </p>
    </div>
  </div>

  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden h-80">
    <img
      src={teams}
      alt="Specialized Teams"
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600">
        Specialized Teams
      </h2>
      <p className="text-gray-600 text-justify text-sm leading-6">
        Joining our teams means being ready to work, having experience in the IT outsourcing industry, and willingness to continue learning.
      </p>
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

export default WhyUs
