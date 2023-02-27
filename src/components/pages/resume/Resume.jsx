import React, { useContext } from 'react'
import { AiOutlineMail, AiOutlinePhone, AiFillGithub, AiOutlineLinkedin } from "react-icons/ai"
import "./Resume.scss"
import { Link } from "react-router-dom"
import { ThemeContext } from '../../../context/Contxt'

const Resume = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className=' dark:text-white text-sec dark:bg-sec bg-white h-full w-full md:px-20 lg:px-28 pb-6 '>
      <div className='flex mx-5'>
        <div className=' lg:ml-auto '>
          <a href='resume/Faisal-Qayoom.pdf' target='blank' ><button className={`buttonDownload my-5 ${theme}-btn-download`}>Download</button></a>
        </div>
      </div>
      <div className='text-center py-6 dark:bg-gray bg-gray mb-5'>
        <p className="heading text-pri font-extrabold text-4xl pb-2">FAISAL <span className=' text-white '>QAYOOM</span> </p>
        <p className="heading text-white text-lg">Frontend Developer(Fresher)</p>
      </div>
      <div className='details-wrapper grid md:grid-cols-2 md:space-x-9 px-5'>
        <div className='left-side'>
          <div className='about-div'>
            <p className=' text-2xl text-pri font-semibold mt-3'>About</p>
            <hr className=' w-20 mb-3 pb-[1px] mt-[2px] bg-pri ' />
            <p className=' text-justify leading-8'>A highly motivated and skilled engineering
              graduate looking for an entry-level position
              as a software engineer. Solid knowledge in
              writing well-designed and testable code.<br />
              My objective is to be a part of an
              organisation where I can work and learn in a
              real profession ambience which enables me
              to cope up with the latest technology and
              trends for widening the spectrum of my
              knowledge.</p>
          </div>
          <div className='my-contact'>
            <p className=' text-2xl font-semibold text-pri mt-8'>Contact Details</p>
            <hr className=' w-44 mb-2 pb-[1px] mt-[2px] bg-pri' />
            <a href="mailto:shykhfaisal09@gmail.com"><div className="cts flex flex-row items-center my-4">
              <AiOutlineMail className=' text-3xl mr-4 text-pri' /> <span>shykhfaisal09@gmail.com</span>
            </div></a>
            <a href="tel:+91 9622434732"><div className="cts flex flex-row items-center my-4">
              <AiOutlinePhone className='mr-4 text-3xl text-pri' /> <span>+91 9622434732</span>
            </div></a>
            <a href="https://github.com/faisalqayoom"><div className="cts flex flex-row items-center my-4">
              <AiFillGithub className='mr-4 text-3xl text-pri' /> <span>@faisal-qayoom</span>
            </div></a>
            <a href="https://www.linkedin.com/in/faisal-qayoom-526a21216"><div className="cts flex flex-row items-center my-4">
              <AiOutlineLinkedin className='mr-4 text-3xl text-pri' /> <span>@faisalqayoom</span>
            </div></a>
          </div>
          <div className='technical-skill'>
            <p className=' text-2xl font-semibold text-pri mt-8'>Technical Skill</p>
            <hr className=' w-44 mb-2 pb-[1px] mt-[2px] bg-pri' />
            <div>
              <ul className=' marker:text-pri leading-7'>
                <li className='list-disc ml-5 my-1'>HTML</li>
                <li className='list-disc ml-5 my-1'>CSS</li>
                <li className='list-disc ml-5 my-1'>Bootstrap/Tailwind</li>
                <li className='list-disc ml-5 my-1'>JavaScript</li>
                <li className='list-disc ml-5 my-1'>React Js</li>
                <li className='list-disc ml-5 my-1'>Redux/Redux-Toolkit</li>
                <li className='list-disc ml-5 my-1'>Java</li>
              </ul>
            </div>
          </div>
          <div className='soft-skill'>
            <p className=' text-2xl font-semibold text-pri md:mt-8 mt-4 '>Soft Skill</p>
            <hr className=' w-44 mb-4 pb-[1px] mt-[2px] bg-pri' />
            <div>
              <ul className=' marker:text-pri leading-7'>
                <li className='list-disc ml-5 my-1'>Observation</li>
                <li className='list-disc ml-5 my-1'>Decision making</li>
                <li className='list-disc ml-5 my-1'>Communication</li>
                <li className='list-disc ml-5 my-1'>Problem solving</li>
                <li className='list-disc ml-5 my-1'>Team work</li>
                <li className='list-disc ml-5 my-1'>Public speaking</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='right-side'>
          <div className='education'>
            <p className=' text-2xl font-semibold text-pri md:mt-3 mt-4'>Education Background</p>
            <hr className=' w-72 mb-4 pb-[1px] mt-[2px] bg-pri' />
            <ul className=' marker:text-pri leading-7'>
              <li className=' font-semibold text-lg'>Jyothy Institute of Technology,Bangalore, INDIA</li>
              <li className=' list-disc ml-5 my-1 '>B-Tech (Electronics and Communication Engineering)</li>
              <li className=' list-disc ml-5 my-1 '>CGPA:8.14</li>
              <li className=' list-disc ml-5 my-1 mb-4'>2018 - 2022</li>
              <li className=' font-semibold text-lg'>Govt. Boys Higher Secondary, Pampore,Jammu and Kashmir, INDIA</li>
              <li className=' list-disc ml-5 my-1'>10+2 (PUC)</li>
              <li className=' list-disc ml-5 my-1'>Major - PCMB</li>
              <li className=' list-disc ml-5 my-1'>2017-2018</li>
              <li className=' list-disc ml-5 my-1'>Percentage - 76%</li>
            </ul>
          </div>
          <p className=' text-2xl font-semibold text-pri mt-8'>Projects</p>
          <hr className=' w-28 mb-4 pb-[1px] mt-[2px] bg-pri' />
          <div className="projects-1 leading-8">
            <p className='font-semibold text-lg '>Wireless charging system for electric vehicles using electro magnetic induction.</p>
            <p>October 2020 - July 2021</p>
            <p>Key responsibilities :</p>
            <ul className=' marker:text-pri'>
              <li className=' list-disc list ml-5 my-1'>Worked on overall design and implementation and played a key role as system engineer.</li>
              <li className=' list-disc ml-5 my-1'>Overall ranked 2nd place in the competition.</li>
              <li className=' list-disc ml-5 my-1'>Hardware: Arduino Board, Electromagnitic coils, 16X2LCD, Step-down transformer,Electrolytic Capacitor, Regulator and Voltage sensor.</li>
              <li className=' list-disc ml-5 my-1'>Software Technologies: C, Arduino Programming.</li>
            </ul>
          </div>
          <div className="projects-2 leading-8">
            <p className='font-semibold text-lg mt-7'>Hand Gesture Vocalizer for deaf.</p>
            <p>Nov 2021 - June 2022</p>
            <p>Key responsibilities :</p>
            <ul className=' marker:text-pri'>
              <li className='list-disc ml-5 my-1'>Worked on the software Portion and overall design of the project.</li>
              <Link to="https://ijisrt.com/hand-gesture-vocaliser-for-deaf" target="_blank"> <li className='list-disc ml-5 my-1'>Published a Paper on IJISRT</li></Link>
              <li className='list-disc ml-5 my-1'>Hardware: Arduino , Flex sensors, LCD 16x2,.</li>
              <li className='list-disc ml-5 my-1'>Software Technologies: C, Arduino Programming.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='dark:bg-gray bg-gray py-4 mt-5'></div>

    </div>
  )
}

export default Resume