import React from 'react'
import { FaPhoneSquareAlt } from "react-icons/fa"
import { BsEnvelopeFill } from "react-icons/bs"
import { RiGithubFill } from "react-icons/ri"
import { IoLogoInstagram } from "react-icons/io"
import { TiSocialLinkedinCircular } from "react-icons/ti"
import "./Contact.scss"

import 'react-toastify/dist/ReactToastify.css';
import ContactFrom from './ContactFrom'

const Contact = () => {


  return (
    <>

      <div className=' dark:text-white text-sec dark:bg-sec bg-white md:min-h-screen w-screen'>
        <div className='text-[30px] relative md:text-5xl uppercase font-[900] md:p-6 md:ml-10 md:text-center '>
          <p className='hidden md:block font-extrabold opacity-[0.07] text-8xl font-secondary absolute right-0 left-0 top-2/4 -translate-y-2/4 tracking-[10px]'>CONTACT</p>
          <p className='font-secondary md:p-0 p-5 md:bg-opacity-0 bg-zinc-900 '>
            <span className=''>GET IN </span><span className=' text-pri'>TOUCH</span>
          </p>
        </div>
        <div className='w-11/12 sm:w-9/12 md:w-4/6 mt-10 mx-auto grid grid-cols-1 lg:grid-cols-10 lg:w-[80%] lg:space-x-4'>
          <div className="contact-div lg:col-span-4">
            <p className='text text-xl font-semibold'>DON'T BE SHY !</p>
            <p className='text my-4 text-[1rem]'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            <a href="mailto:shykhfaisal09@gmail.com" target="blank">
              <div className='flex flex-row my-8'>
                <div className=' justify-center mr-3 flex'>
                  <BsEnvelopeFill className=' text-4xl text-pri' />
                </div><span className='text-[1rem]'>MAIL ME <p className='text-[0.8rem]'>shykhfaisal09@gmail.com</p></span></div></a>
            <a href="tel:+919622434732"><div className='flex flex-row mb-4'>
              <div className=' justify-center mr-3 flex mb-4'>
                <FaPhoneSquareAlt className=' text-4xl text-pri' />
              </div><span className='text-[1rem]'>CALL ME <p className='text-[0.8rem] '>+91 9622434732</p></span>
            </div>
            </a>
            <span className='flex flex-row text-[30px] items-center'>
              <a href="https://www.linkedin.com/in/faisal-qayoom-526a21216" target="blank"><TiSocialLinkedinCircular className='mr-4 text-[33px] text-pri dark:hover:text-white hover:text-sec' /></a>
              <a href="https://www.instagram.com/faisal_qayoom_4917/" target="blank"> <IoLogoInstagram className='mr-4 text-pri dark:hover:text-white hover:text-sec' /></a>
              <a href="https://github.com/faisalqayoom" target="blank"> <RiGithubFill className='mr-4 text-pri dark:hover:text-white hover:text-sec' /></a>
            </span>
          </div>
          <ContactFrom />

          {/* <div className="form-container lg:mt-0 my-12 lg:col-span-6">
            <form className='flex flex-col ' onSubmit={sendEmail} ref={form}>
              <input name="name" className='input-fields text-lg bg-[#252525] rounded-3xl mb-6 py-2 placeholder:opacity-80 placeholder:text-xs px-3 focus:outline-none focus:border-pri focus:border ' type="text" placeholder='Your Name ' />
              <input name="email" className='input-fields text-lg bg-[#252525] rounded-3xl mb-6 py-2 placeholder:opacity-80 placeholder:text-xs px-3 focus:outline-none focus:border-pri focus:border' type="text" placeholder='Your Email ' />
              <input name="subject" className='input-fields text-lg bg-[#252525] rounded-3xl mb-6 py-2 placeholder:opacity-80 placeholder:text-xs px-3 focus:outline-none focus:border-pri focus:border' type="text" placeholder='Your Subject ' />
              <textarea name="myMessage" className='input-fields text-lg bg-[#252525] mb-4 placeholder:text-xs p-3 placeholder:opacity-80 rounded-2xl h-32 focus:outline-none focus:border-pri focus:border overflow-hidden resize-y ' rows="6" type='text' placeholder='Message ' />
              <button type='Submit' value='Send' className='btn-send mt-7 ml-auto '>
                <div class="svg-wrapper-1">
                  <div class="svg-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="#ffb400" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                    </svg>
                  </div>
                </div>
                <span>Send Message</span>
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Contact