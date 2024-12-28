import React from 'react';
import bg from '../src/assets/bgimgae.webp';
import ullog from '../src/assets/ul log1.png'
import exp from '../src/assets/5 years.png'
import pro from '../src/assets/progresion.476eb71b.webp'
import so from '../src/assets/so.webp'
import req from '../src/assets/req.webp'
import soft from '../src/assets/software.jpg'
import mobile from '../src/assets/mobile.jpg'
import web from '../src/assets/web.jpg'
import digital from '../src/assets/digital.webp'
import Staff from '../src/assets/It staff.webp'
import poten from '../src/assets/poten.webp'
import orange from '../src/assets/orange.jpg'
import Technology from './Technology';

const Home = () => {
  return (
    <>
      <div className="relative">
        {/* Background Image */}
        <img src={bg} alt="Background" className="w-full h-screen object-cover" />

        {/* Content */}
        <div className="absolute top-32 left-16 text-white">
          {/* Main Heading */}
          <p className="text-4xl font-bold mb-2 ml-7 text-black">Welcome to Ultrafly Solutions</p>
          <p className="text-4xl font-semibold mb-6 ">"Your Partner in Digital Formation"</p>

          {/* Buttons */}
          <div className="flex gap-9">
            <button className="border bg-orange-800 px-4 py-2 rounded-lg shadow-md hover:bg-orange-500 transition-all">
              Turning ideas into digital reality
            </button>
            <button className="border bg-orange-800 px-4  rounded-lg shadow-md hover:bg-orange-500 transition-all">
              Innovating tomorrow’s web, today.
            </button>
          </div>
          <div className="flex gap-9 py-5">
            <button className="border bg-orange-800 px-1 py-2 rounded-lg shadow-md hover:bg-orange-500 transition-all">
              Building websites that drive growth.
            </button>
            <button className="border bg-orange-800 px-4  rounded-lg shadow-md hover:bg-orange-500 transition-all">

              Crafting your digital success story.
            </button>

          </div>
          <div className="flex justify-center">
            <button className="border bg-orange-500 px-1 py-2 rounded-lg shadow-md hover:bg-orange-800  transition-all">
              GetStarted
            </button>
          </div>
        </div>


        <div className=''>
          <div className='absolute top-40 left-2/4 flex justify-end'>
            <img src={ullog} width={"280px"} className='ml-64 rounded-xl' />
          </div>
          <div className='absolute top-[94px] left-2/4 flex justify-end'>
            <pre className=' ml-[350px] bg-red-800 text-white rounded-lg'>    Web
              <br></br> Application <br></br>
              <pre> Development</pre></pre>
          </div>
          <div className='absolute top-64 left-2/4 flex justify-end'>
            <pre className=' ml-[528px] mt-8 bg-red-800 rounded-lg  text-white'> IT Staffing </pre>
          </div>
          <div className='absolute top-64 left-2/4 flex justify-end'>
            <pre className=' ml-[170px] mt-6 bg-red-800 rounded-lg text-white'>  Digital <br></br> Marketing </pre>
          </div>

          <div className='absolute top-[353px] left-2/4 flex justify-end'>
            <pre className=' ml-[345px] mt-20 bg-red-800 text-white rounded-lg'>    Web
              <br></br> Application <br></br>
              <pre> Development</pre></pre>
          </div>
        </div>









        {/* <div className='absolute top-[530px]  '>
          <div className=' flex col-span-3 gap-7  text-justify-center ml-10 mr-10 ab '>

            <p className='hover:bg-white border rounded-lg bg-white transition-opacity duration-300 hover:opacity-60'>
              <img src={pro} className=' ml-36' />
              <h1 className='text-center '> Progression</h1>
              <p className='ml-9 mt-6 mr-4 text-center'>
                Passionate coders creating innovative apps, delivering perfection with cutting-edge technology to meet all software needs.
              </p></p>

            <p className='hover:bg-white border rounded-lg bg-white transition-opacity duration-300 hover:opacity-60 '>
              <img src={so} className=' ml-32' />
              <h1 className='text-center'>Software Development</h1>
              <p className='ml-9 mt-6 mr-4 text-center'>
                Crafting apps to perfection, unleashing creativity, harnessing cutting-edge technology to deliver innovative, seamless solutions.</p></p>
            <p className='hover:bg-white border rounded-lg bg-white transition-opacity duration-300 hover:opacity-60'>
              <img src={req} className=' ml-40' />
              <h1 className='text-center'>RECRUITMENT</h1>
              <p className='ml-9 mt-6 mr-4 text-center'>
                A strong employer brand helps you stand out from competitors, attracting passive job seekers and enhancing your recruitment efforts.</p></p>
          </div>

        </div> */}





        {/* //Innovtate technology// */}
{/* 
        <div className='flex mt-48 justify'  >
          <div className='mt-9 justify-center'>
            <h1 className='text-2xl font-bold ml-9'>Innovative Technology Solutions for Your Business</h1>

            <p className='mt-3 ml-8 text-justify'>Ultrafly Solutions Private Limited was founded in 2019 as a Coimbatore-based company
              working towards excellence in computers and believing in pursuing business through
              innovation and technology.</p>
            <p className='ml-8 mt-4 text-justify'>
              Our fields of expertise include software development, web development, mobile app development, search engine optimization, and digital marketing and recruitment services. Our global clients come from a wide spectrum of industries with varying requirements.
            </p>
          </div>
          <img src={exp} width={"300px"} />



        </div>
      </div> */}

      <div className=' col-span-2 mt-12'>
        <div className='ml-9'>
        <p className='ml-96 text-xl text-orange-500 font-bold '>OUR SERVICES</p></div>
        <div className=' flex col-span-2 gap-7 mt-10'>
          <div className='ml-11   gap-10 mb-11 w-60 hover:bg-orange-500 rounded-lg bg-white transition-all duration-300 hover:opacity-90 '>
            <img src={soft} width={"200px"} className='ml-5 h-40 mt-3' />
            <p className='ml-10 font-bold'>Software Development</p>
            <p className='ml-4 text-justify mr-4 text-sm'>We are experts in developing end-to-end applications based on web technologies. We combine strong technological insight together with business visions to deliver you the accurate inputs across the product life cycle.</p>
          </div>
          <div className='ml-11   gap-10 mb-11 w-60 hover:bg-orange-500 rounded-lg bg-white transition-all duration-300 hover:opacity-90 ' >
            <img src={mobile} width={"200px"} className='ml-5 mt-3' />
            <p className='ml-5 font-bold'> Mobile App Development </p>
            <p className='ml-4 text-justify mr-4 text-sm'>We excel in developing high-quality mobile apps. Whether you're a startup, a small business, or a large enterprise, having a mobile app can help you reach a wider audience and customer engagement.</p>

          </div>
          <div className='ml-11   gap-10 mb-11 w-64 hover:bg-orange-500 rounded-lg bg-white transition-all duration-300 hover:opacity-90 ' >
            <img src={web} width={"220px"} className='ml-5 h-40 mt-3' />
            <p className='ml-11 font-bold'> Website Development </p>
            <p className='ml-4 text-justify mr-4 text-sm'>As technology continues to evolve at an unprecedented pace, the role of Website development will only grow in significance. It is a field that demands intellectual curiosity, problem-solving abilities, and a passion for creating something new.</p>

          </div>
          <div>
            <p className='font-medium text-orange-600'>Who we are</p>
            <br />
            <h1 className='text-xl text- font-medium'>Empowering Ideas with Technology</h1>
            <br/>
            
            <p className='w-80 text-justify text-xl font-serif '>At Ultrafly, we use our passion for technology and understanding of business, to create unique and customized solutions. We help our partners navigate the ever-evolving landscape of digital tech innovation and offer solutions that align with their business.</p>
          
            {/* <p className='w-80 text-justify text-xl'>We thrive on top-notch UI/UX designs and software development standards to create meaningful web products, mobile apps and custom software solutions. Each of these is crafted with love and passion.</p>
           */}
          </div>
        </div>
        <div className='flex '>
          <div className='ml-60  gap-10 mb-11 w-64 hover:bg-orange-500 transition-all rounded-lg bg-white duration-300 hover:opacity-90 ' >
            <img src={digital} width={"220px"} className='ml-5 h-40 mt-3 ' />
            <p className='ml-11 font-bold'> SEO & Digital Marketing </p>
            <p className='ml-4 text-justify mr-4 text-sm'>At Ultrafly Solutions, we specialize in result-driven SEO and innovative social media marketing. Our SEO services focus on optimizing your online presence for better search engine rankings and improved visibility. Our social media marketing strategies utilize popular platforms to achieve measurable marketing and branding goals, ensuring that your business stays ahead of the competition.</p>

          </div>
          <div className='ml-24  gap-10 mb-11 w-64 hover:bg-orange-500 rounded-lg bg-white transition-all duration-300 hover:opacity-90 ' >
            <img src={Staff} width={"220px"} className='ml-5 h-40 mt-3' />
            <p className='ml-11 font-bold'> IT Staffing Solutions</p>
            <p className='ml-4 text-justify mr-4 text-sm'>Expert IT Staffing Solutions
              Staffing: key to success, blending recruiting, training, intuition, and data. Staffing, the cornerstone of organizational success, is a strategic function that involves recruiting, selecting, training, and developing employees to meet an organization's goals.</p>
          </div>
          <div className=' ml-28'>
        <p className='w-80 text-justify text-xl font-serif '>We thrive on top-notch UI/UX designs and software development standards to create meaningful web products, mobile apps and custom software solutions. Each of these is crafted with love and passion.</p>
        </div>
        </div>
       
        </div>
      </div>
      <div className=''>
        <img src={orange} className='w-full h-72' />
        </div>
        <div className='absolute top-[1700px] ml-[600px] '>
        <img src={poten} width={"500px"}  />
        </div>
        <div className='absolute top-[1750px] ml-72 '>
        <p  className='text-5xl ml-36'>Unlock</p>
       <p  className='text-5xl ml-20'> Your Potential</p>
        <br/>
        <p className='ml-10'>We are Always providing Best Software Services for you </p>
        <br/>
        <button className="border bg-orange-500 px-4 py-2 rounded-lg shadow-md hover:bg-yellow-400 transition-all ml-48">
              JoinUs
            </button>

      </div>

      <Technology/>
    </>
  );
};

export default Home;

