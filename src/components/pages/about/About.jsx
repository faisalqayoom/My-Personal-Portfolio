import React, { useContext } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./About.scss"
import { FaGraduationCap } from "react-icons/fa"
import { MdOutlineWork } from "react-icons/md"
import { ThemeContext } from '../../../context/Contxt';

const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className=' dark:text-white text-sec dark:bg-sec bg-white min-w-full min-h-full md:px-20 lg:px-28 pb-10'>
      {/* //!ABOUT ME */}
      <div className='text-[30px] relative md:text-5xl uppercase font-[900] md:p-6 md:ml-10 md:text-center '>
        <p className='hidden md:block font-extrabold opacity-[0.07] text-8xl font-secondary absolute right-0 left-0 top-2/4 -translate-y-2/4 tracking-[10px]'>RESUME</p>
        <p className='font-secondary md:p-0 p-5 md:bg-opacity-0 bg-zinc-900 '>
          <span className=''>About </span><span className=' text-pri'>me</span>
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:w-4/5 lg:mx-auto sm:px-8'>
        <div className="flex md:justify-end lg:justify-center justify-center ">
          <img className='rounded-full' src={`${theme === 'dark' ? '/images/img-sm.png' : '/images/white-small.png'}`} alt="photoos" />
        </div>
        <div className='flex md:justify-end lg:justify-center justify-center mt-5'>
          <div className=" w-fit space-y-5 justify-center ">
            <p className=''>Name:- <span className=''> Faisal Qayoom</span></p>
            <p className=''>Email:- <span className=''> shykhfaisal09@gmail.com</span></p>
            <p className=''>LinkedIn:- <span className=''> @faisalqayoom</span></p>
            <p className=''>Github:- <span className=''> @faisalqayoom</span></p>
            <p className=''>Contact:- <span className=''> 9622434732</span></p>
            <div className=''>
              <a href="resume/FQS-CV.pdf">
                <div data-tooltip="Size: 44.3Kb" className="button-download">
                  <div className="button-wrapper-download">
                    <div className="text-download">DOWNLOAD CV</div>
                    <span className="icon-download">
                      <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" height="2em" width="2em" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" fill="none"></path></svg>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='line'>
        <hr className=' border-pri border-1 w- max-w-[100%] ml-auto mr-auto my-10' />
      </div>
      {/* //! MY SKILLS */}

      <div className="My-skills sm:px-8">
        <p className='flex justify-center w-full my-5 text-[26px] font-semibold'>MY SKILLS</p>
        <div className=' grid lg:grid-cols-6 grid-cols-3 drop-shadow-md '>
          <div className='mx-3 mt-5'>
            <CircularProgressbar styles={buildStyles({ textSize: '16px', pathColor: '#ffb400', textColor: 'white', trailColor: '#343a40', strokeLinecap: 'butt', })} strokeWidth={8} className=' stroke-pri dark:text-white text-sec' value={95} text={`${95}%`} />
            <span className='flex justify-center items-center text-[20px] mt-2'>HTML</span>
          </div>
          <div className='mx-3 mt-5'>
            <CircularProgressbar styles={buildStyles({ textSize: '16px', pathColor: '#ffb400', textColor: 'white', trailColor: '#343a40', strokeLinecap: 'butt', })} strokeWidth={8} className=' stroke-pri dark:text-white text-sec' value={95} text={`${95}%`} />
            <span className='flex justify-center items-center text-[20px] mt-2'>CSS</span>
          </div>
          <div className='mx-3 mt-5'>
            <CircularProgressbar styles={buildStyles({ textSize: '16px', pathColor: '#ffb400', textColor: 'white', trailColor: '#343a40', strokeLinecap: 'butt', })} strokeWidth={8} className=' stroke-pri dark:text-white text-sec' value={90} text={`${90}%`} />
            <span className='flex justify-center items-center text-[20px] mt-2'>BOOTSTRAP</span>
          </div>
          <div className='mx-3 mt-5'>
            <CircularProgressbar styles={buildStyles({ textSize: '16px', pathColor: '#ffb400', textColor: 'white', trailColor: '#343a40', strokeLinecap: 'butt', })} strokeWidth={8} className=' stroke-pri dark:text-white text-sec' value={85} text={`${85}%`} />
            <span className='flex justify-center items-center text-[20px] mt-2'>TAILWIND</span>
          </div>
          <div className='mx-3 mt-5'>
            <CircularProgressbar styles={buildStyles({ textSize: '16px', pathColor: '#ffb400', textColor: 'white', trailColor: '#343a40', strokeLinecap: 'butt', })} strokeWidth={8} className=' stroke-pri dark:text-white text-sec' value={80} text={`${80}%`} />
            <span className='flex justify-center items-center text-[20px] mt-2'>JAVASCRIPT</span>
          </div>
          <div className='mx-3 mt-5'>
            <CircularProgressbar styles={buildStyles({ textSize: '16px', pathColor: '#ffb400', textColor: 'white', trailColor: '#343a40', strokeLinecap: 'butt', })} strokeWidth={8} className=' stroke-pri dark:text-white text-sec' value={75} text={`${75}%`} />
            <span className='flex justify-center items-center text-[20px] mt-2'>REACT</span>
          </div>

        </div>
      </div>
      <hr className=' border-pri border-1 w- max-w-[100%] ml-auto mr-auto my-10' />
      {/* //!EDUCATION */}

      <p className='flex justify-center w-full text-[26px] font-semibold'>EDUCATION</p>
      <div className="grid sm:grid-cols-2 sm:px-8">
        <div className="mt-10 ml-4 ">
          <div className="flex">
            <div className='mr-6'>
              <span className='p-3 inline-block text-2xl bg-gray dark:text-white text-white rounded-full text-secondary'>
                <FaGraduationCap />
              </span>
            </div>
            <div className="">
              <div className=''>
                <p className="text-xs font-semibold bg-slate-500 rounded-full text-light-gray w-fit px-4 py-1 mt-1">Aug 2018 - Aug-2022</p>
                <p className=" mt-4 font-semibold leading-8">
                  <span className='uppercase'>B.TECH(ECE)</span>
                  <p className=' uppercase'>JYOTHY INSTITUTE OF TECHNOLOGY BANGALORE,INDIA</p>
                  <p className='mt-3 font-light'>I received my bachelor of engineering degree in electronics and communication from Jyothy Institute of Technology in Bangalore, Karnataka , INDIA. </p>
                </p>
                <p className="last mt-4">CGPA: 8.14</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 ml-4">
          <div className="flex">
            <div className='mr-6'>
              <span className='p-3 inline-block text-2xl bg-gray dark:text-white text-white rounded-full text-secondary'>
                <FaGraduationCap />
              </span>
            </div>
            <div className="">
              <div className=''>
                <p className="uppercase text-xs font-semibold bg-slate-500 rounded-full text-light-gray w-fit px-4 py-1 mt-1">jan 2022</p>
                <p className=" mt-4 font-semibold leading-8">
                  <span>PUC(10 + 2)</span>
                  <p className=' uppercase'>Govt. Boys Higher Secondary, Pampore, Jammu
                    and Kashmir, INDIA</p>
                  <p className='mt-3 font-light'>I have finished my high school education at the government boys higher secondary pampore jammu and kashmir, INDIA.</p>
                </p>
                <p className="last mt-4">PERCENTAGE: 76%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //!PROJECTS */}

      <hr className=' border-pri border-1 w- max-w-[100%] ml-auto mr-auto my-10' />
      <p className='flex justify-center w-full text-[26px] font-semibold'>PROJECTS</p>
      <div className="grid sm:grid-cols-2  sm:px-8">
        <div className="mt-10 ml-4">
          <div className="flex">
            <div className='mr-6'>
              <span className='p-3 inline-block text-2xl dark:text-white text-white bg-gray rounded-full text-secondary'>
                <MdOutlineWork />
              </span>
            </div>
            <div className="">
              <div className=''>
                <p className=" text-xs font-semibold bg-slate-500 rounded-full text-light-gray w-fit px-4 py-1 mt-1">Oct 2020 - July 2021</p>
                <p className=" mt-4 font-semibold leading-8">
                  <span className=' uppercase'>Wireless charging system for electric vehicles using electro
                    magnetic induction.</span>
                  <p className='mt-3 font-light text-[18px]'>key responsibilities :</p>
                  <p className='mt-3 font-light  leading-7'>
                    <ul>
                      <li className=' list-disc mt-1' >Worked on overall design and implementation and played a key role as system engineer.</li>
                      <li className=' list-disc mt-1' >Overall ranked 2nd place in the competition.</li>
                      <li className=' list-disc mt-1' >Hardware: Arduino Board, Electromagnitic coils, 16X2LCD, Step-down transformer, Electrolytic
                        Capacitor, Regulator and Voltage sensor.</li>
                      <li className=' list-disc mt-1'>Software Technologies: C, Arduino Programming.</li>
                    </ul>
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 ml-4">
          <div className="flex">
            <div className='mr-6'>
              <span className='p-3 inline-block text-2xl dark:text-white text-white bg-gray rounded-full fill-slate-100'>
                <MdOutlineWork className='' />
              </span>
            </div>
            <div className="">
              <div className=''>
                <p className=" text-xs font-semibold bg-slate-500 rounded-full text-light-gray w-fit px-4 py-1 mt-1">Nov 2021 - June 2022</p>
                <p className=" mt-4 font-semibold leading-8">
                  <span className=' uppercase'>Hand Gesture Vocalizer for deaf.</span>
                  <p className='mt-3 font-light text-[18px]'>key responsibilities :</p>
                  <p className='mt-3 font-light leading-7'>
                    <ul>
                      <li className=' list-disc mt-1'>Worked on the software Portion and overall
                        design of the project.</li>
                      <li className=' list-disc mt-1'>Hardware: Arduino , Flex sensors, LCD 16x2,.</li>
                      <li className=' list-disc mt-1'>Software Technologies: C, Arduino Programming.</li>
                      <a href="http://ijisrt.com/hand-gesture-vocalizer-for-deaf"><li className=' list-disc mt-1 underline underline'>
                        Published a Paper on IJISRT (International Journal of Innovative Science and Research Technology)</li></a>
                    </ul>
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* //! Personal Portfolio */}
        <div className="mt-10 ml-4">
          <div className="flex">
            <div className='mr-6'>
              <span className='p-3 inline-block text-2xl dark:text-white text-white bg-gray rounded-full text-secondary'>
                <MdOutlineWork />
              </span>
            </div>
            <div className="">
              <div className=''>
                {/* <p className=" text-xs font-semibold bg-slate-500 rounded-full text-light-gray w-fit px-4 py-1 mt-1">Oct 2020 - July 2021</p> */}
                <p className=" mt-4 font-semibold leading-8">
                  <span className=' uppercase'>MY PERSONAL PORTFOLIO.</span>

                  <p className='mt-3 font-light  leading-7'>
                    <ul>
                      <li className=' list-disc mt-1' >This portfolio is a collection of my most notable projects and achievements, and is meant to give you a sense of my skills and abilities.</li>
                    </ul>
                    <div className=' flex flex-row mt-5'>
                      <p className=' text-xs font-semibold rounded-full text-white w-fit px-4 py-1 mt-1 bg-gray mr-2'>React Js</p>
                      <p className="text-xs font-semibold rounded-full text-white w-fit px-4 py-1 mt-1 bg-gray mr-2">Tailwind css</p>
                    </div>
                  </p>
                </p>
              </div> 
            </div>
          </div>
        </div>


        {/* <div>
          <div className='mr-6 justify-center  px-4'>
            <span className='p-3 pb-0 inline-block text-2xl bg-gray rounded-full fill-slate-100'>
              <MdOutlineWork className='mt-5' />
            </span>
            <span className=' ml-6 mb-3 font-semibold '>MY PERSONAL PORTFOLIO.</span>
            <ul>
              <li className='list-disc ml-[75px] mt-5 leading-7 font-light'>This portfolio is a collection of my most notable projects and achievements, and is meant to give you a sense of my skills and abilities.
              </li>
            </ul>
            <div className=' flex flex-row mt-5'>
              <p className='ml-14 text-xs font-semibold rounded-full text-light-gray w-fit px-4 py-1 mt-1 mx-3 bg-slate-800'>React Js</p>
              <p className="text-xs font-semibold rounded-full text-light-gray w-fit px-4 py-1 mt-1 mx-3 bg-slate-800">Tailwind css</p>
            </div>
          </div>
        </div> */}
      </div>
    </div >
  )
}

export default About