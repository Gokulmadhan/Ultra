import React from 'react';
import heart from '../src/assets/heart.webp';
import Bank from '../src/assets/bank.webp';
import insurance from '../src/assets/insurance.webp';
import leanding from '../src/assets/lending.webp';
import savings from '../src/assets/savings.webp';
import retail from '../src/assets/retail.webp';
import manufacturing from '../src/assets/manufacturing.webp';
import professional from '../src/assets/professional..webp';
import oil from '../src/assets/oil.webp';
import telecom from '../src/assets/telecom.webp';
import logistic from '../src/assets/logistics.webp';
import consts from '../src/assets/construction.webp';
import Footer from './Footer';

const WhoworkWith = () => {
  return (
    <>
      <div className="text-center bg-blue-50">
        <br />
        <h1 className="text-4xl font-medium">Who We Work With</h1>
        <div className="text-sm text-gray-700 mt-5 leading-6">
          <p>
            To bring end-to-end solutions to market, many of our clients have spent years investing in new business capabilities, integrating acquisitions, and updating
          </p>
          <p>existing IT stacks.</p>
          
        </div>
      </div>

      <div className="bg-blue-50">
        <div className="flex flex-col items-center justify-center py-10">
          <div className="grid grid-cols-4 gap-5">
            <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow-md p-10 w-64 hover:shadow-lg hover:bg-gray-100 transition duration-75">
              <img src={heart} alt="Healthcare" className="w-12 h-12 object-cover rounded-full mr-4" />
              <p className="text-gray-800 text-lg font-medium">HealthCare</p>
            </div>
            <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow-md p-10 w-64 hover:shadow-lg hover:bg-gray-100 transition duration-75">
              <img src={Bank} alt="Banking" className="w-12 object-cover rounded-full mr-4" />
              <p className="text-gray-800 text-lg font-medium">Banking</p>
            </div>
            <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow-md p-10 w-64 hover:shadow-lg hover:bg-gray-100 transition duration-75">
              <img src={insurance} alt="Insurance" className="w-12 object-cover rounded-full mr-4" />
              <p className="text-gray-800 text-lg font-medium">Insurance</p>
            </div>
            <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow-md p-10 w-64 hover:shadow-lg hover:bg-gray-100 transition duration-75">
              <img src={leanding} alt="Lending" className="w-12 object-cover rounded-full mr-4" />
              <p className="text-gray-800 text-lg font-medium">Lending</p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-5 mt-6">
            <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow-md p-10 w-64 hover:shadow-lg hover:bg-gray-100 transition duration-75">
              <img src={savings} alt="Savings" className="w-12 h-12 object-cover rounded-full mr-4" />
              <p className="text-gray-800 text-lg font-medium">Investment</p>
            </div>
            <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow-md p-10 w-64 hover:shadow-lg hover:bg-gray-100 transition duration-75">
              <img src={retail} alt="Retail" className="w-12 object-cover rounded-full mr-4" />
              <p className="text-gray-800 text-lg font-medium">Retail</p>
            </div>
            <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow-md p-10 w-64 hover:shadow-lg hover:bg-gray-100 transition duration-75">
              <img src={manufacturing} alt="Manufacturing" className="w-12 object-cover rounded-full mr-4" />
              <p className="text-gray-800 text-lg font-medium">Manufacturing</p>
            </div>
            <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow-md p-10 w-64 hover:shadow-lg hover:bg-gray-100 transition duration-75">
              <img src={professional} alt="Professional Services" className="w-12 object-cover rounded-full mr-4" />
              <p className="text-gray-800 text-lg font-medium">Professional Services</p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-5 mt-6">
            <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow-md p-10 w-64 hover:shadow-lg hover:bg-gray-100 transition duration-75">
              <img src={oil} alt="Oil and Gas" className="w-14 h-16 object-cover rounded-full mr-4" />
              <p className="text-gray-800 text-lg font-medium">Oil and Gas</p>
            </div>
            <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow-md p-10 w-64 hover:shadow-lg hover:bg-gray-100 transition duration-75">
              <img src={telecom} alt="Telecom" className="w-12 object-cover rounded-full mr-4" />
              <p className="text-gray-800 text-lg font-medium">Telecom</p>
            </div>
            <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow-md p-10 w-64 hover:shadow-lg hover:bg-gray-100 transition duration-75">
              <img src={logistic} alt="Logistics" className="w-12 object-cover rounded-full mr-4" />
              <p className="text-gray-800 text-lg font-medium">Logistics and Transportation</p>
            </div>
            <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow-md p-10 w-64 hover:shadow-lg hover:bg-gray-100 transition duration-75 ">
              <img src={consts} alt="Construction" className="w-12 object-cover rounded-full mr-4" />
              <p className="text-gray-800 text-lg font-medium ">Engineering and Construction</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default WhoworkWith;
