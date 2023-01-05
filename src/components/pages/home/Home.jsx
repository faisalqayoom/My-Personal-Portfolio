import React, { useContext } from 'react'
import "./Home.scss"
import { Link } from "react-router-dom"
import { ThemeContext } from '../../../context/Contxt'
const Home = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className='w-full items-center justify-center bg-white dark:bg-sec  min-h-screen  flex'>
      <div className='lg:items-start lg:justify-start lg:bg-pri lg:fixed lg:h-[200%] lg:w-[100%] lg:left-[-83%] lg:top-[-53%] lg:block lg:transform lg:rotate-[-15deg]'><p></p></div>
      <div className=' justify-center items-center grid lg:grid-cols-5 gap-1 lg:relative'>
        <div className='w-full flex justify-center lg:col-span-2 rounded-full lg:h-[500px] lg:w-[400px] md:mt-20 mt-24 '>
          <img className='rounded-full lg:rounded-[30px] w-[250px] h-[251px] lg:w-full lg:h-auto lg:ml-16 lg:shadow-lg lg:shadow-black' src={`${theme === "dark" ? "/images/photopea.png" : "/images/img-white.png"}`} width={""} alt="personal" />
        </div>
        <div className=' lg:col-span-3 lg:mr-24 '>
          <div className='dark:text-white text-sec items-center justify-center flex flex-col lg:items-start lg:pr-28 '>
            <p className=' lg:text-[38px] text-[30px] mt-5 font-bold text-pri'>I'M FAISAL QAYOOM </p>
            <p className=' lg:text-[38px] text-[30px] font-bold text dark:text-white text-sec'>WEB DEVELOPER </p>
            <p className='leading-8 lg:px-0 pt-4 pb-6 px-10 '>Hello! My name is Faisal Qayoom and I am a recent graduate of Jyothy Institute of Technology in Bangalore. I am a highly motivated and skilled frontend developer, with a strong foundation in technologies such as HTML, CSS, SCSS, Bootstrap, Tailwind, JavaScript, ReactJS, and Java. I am eager to use my skills and knowledge to make a positive impact in the field of web development. I am a quick learner and am always looking for new challenges and opportunities to grow as a developer. I am confident that my skills and dedication make me a strong candidate for any frontend development position.</p>
          </div>
          <div className=' items-center justify-center flex lg:justify-start lg:m-auto mb-8'>
            <Link to="/about" >
              <button className="button-about rounded-full border-2 border-pri">
                <span className="circle-about" aria-hidden="true">
                  <span className="icon-about arrow-about"></span>
                </span>
                <span className={`button-about-text  dark:text-white text-sec font-semibold border-1 dark:border-white border-sec ${theme}-btn-text`}>MORE ABOUT ME</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home