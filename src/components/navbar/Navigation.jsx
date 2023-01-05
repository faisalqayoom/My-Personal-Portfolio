import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaUserTie } from "react-icons/fa"
import { MdContactMail } from "react-icons/md"
import { HiChatAlt } from "react-icons/hi"
import { AiFillFileText } from "react-icons/ai"
import "./Navigation.scss"
import { ThemeContext } from '../../context/Contxt'

const Navigation = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className=''>
      <div className="mobDesign block lg:hidden"><MobileDesign /></div>
      <div className="lapDesign hidden lg:block"> <LaptopDesign /></div>
    </div>

  )
}

export default Navigation

const MobileDesign = () => {
  const { theme } = useContext(ThemeContext)
  const [navbar, setNavbar] = useState(false)
  const genericHamburgerLine = `h-[2px] w-5 my-1 rounded-full dark:bg-white bg-sec transition ease transform duration-300`;
  return (
    <>
      <div className={`absolute w-full top-0 left-0 z-10 justify-space-evenly overflow-hidden transition duration-[0.5s] ${navbar ? " translate-x-[0]" : " -translate-x-[110%]"}`}>
        <div className={`flex flex-col dark:text-white text-sec text-[26px] font-[650px] h-screen ease-out w-full dark:bg-[#252525] bg-white pt-16`}>
          <div className='ml-3 active:text-pri'>
            <Link className='nav-links m-2 flex  items-center py-3 hover:text-pri' to="/" onClick={() => setNavbar(false)}><FaHome className='mr-5 ' /> HOME</Link>
            <hr className='mr-2 border-5 border-[#4d5358]' />
          </div>
          <div className='ml-3 active:text-pri'>
            <Link className='nav-links m-2 flex items-center py-3 hover:text-pri' to="/about" onClick={() => setNavbar(false)}><FaUserTie className='mr-5' /> ABOUT</Link>
            <hr className='mr-2 border-5 border-[#4d5358]' />
          </div >
          <div className='ml-3 active:text-pri'>
            <Link className='nav-links m-2 flex items-center py-3 hover:text-pri' to="/resume" onClick={() => setNavbar(false)}><AiFillFileText className='mr-5' /> RESUME</Link>
            <hr className='mr-2 border-5 border-[#4d5358]' />
          </div>
          <div className='ml-3 active:text-pri'>
            <Link className='nav-links m-2 flex items-center py-3 hover:text-pri' to="/contact" onClick={() => setNavbar(false)}><MdContactMail className='mr-5' /> CONTACT</Link>
            <hr className='mr-2 border-5 border-[#4d5358]' />
          </div>
          <div className='ml-3 active:text-pri'>
            <Link className='nav-links m-2 flex items-center py-3 hover:text-pri' to="/blog" onClick={() => setNavbar(false)}><HiChatAlt className='mr-5' /> BLOG</Link>
          </div>
        </div>
      </div >
      <div className='absolute z-[99999] top-2 right-2'>
        <button onClick={() => setNavbar(!navbar)} className={` dark:text-white text-sec m-3 p-[10px] rounded-md bg-gray-900 shadow-sm shadow-slate-400`}>
          {<>
            <div
              className={` ${genericHamburgerLine} ${navbar
                ? "rotate-45 translate-y-[7px] opacity-50 group-hover:opacity-100 "
                : "opacity-50 group-hover:opacity-100"
                } `}
            />
            <div className={`${genericHamburgerLine} ${navbar ? "opacity-0" : "opacity-50 group-hover:opacity-100"} `} />
            <div
              className={`${genericHamburgerLine} ${navbar
                ? "-rotate-45 -translate-y-[5px] opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
                } `}
            />
          </>}
        </button>
      </div></>

  )
}

export const LaptopDesign = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className="flex">
      <div className='flex flex-col fixed z-[99999999999] right-5 top-1/2 -translate-y-1/2 items-end'>
        <div className='group  flex'>
          <Link className='' to="/">
            <button className="btn-anim learn-more m-[10px]">
              <span className={`button-text  dark:text-white  ${theme}-home-btn`}>HOME</span>
              <span className="circle" aria-hidden="true">
                <FaHome className={`icon`} />
              </span>
            </button>
          </Link>
        </div>
        <div className=''>
          <Link className='py-2' to="/about">
            <button className="btn-anim learn-more m-[10px]">
              <span className={`button-text  dark:text-white  ${theme}-home-btn`}>ABOUT</span>
              <span className="circle" aria-hidden="true">
                <FaUserTie className={`icon`} />
              </span>
            </button>
          </Link>
        </div >
        <div className=''>
          <Link className='py-2' to="/resume">
            <button className="btn-anim learn-more m-[10px]">
              <span className={`button-text  dark:text-white  ${theme}-home-btn`}>RESUME </span>
              <span className="circle" aria-hidden="true">
                <AiFillFileText className={`icon`} />
              </span>
            </button>
          </Link>
        </div>
        <div className=''>
          <Link className='my-2' to="/contact">
            <button className="btn-anim learn-more m-[10px]">
              <span className={`button-text  dark:text-white  ${theme}-home-btn`}>CONTACT</span>
              <span className="circle" aria-hidden="true">
                <MdContactMail className={`icon`} />
              </span>
            </button>
          </Link>
        </div>
        <div className=''>
          <Link className='my-2' to="/blog">
            <button className={` btn-anim learn-more m-[10px]`}>
              <span className={`button-text  dark:text-white  ${theme}-home-btn`}>BLOG</span>
              <span className="circle" aria-hidden="true">
                <HiChatAlt className={`icon`} />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
