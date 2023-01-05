import React, { useContext, useRef } from 'react'
import { useForm } from "react-hook-form"
import { toast, ToastContainer } from 'react-toastify';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from '../../../context/Contxt';

const ContactFrom = () => {
  const { theme } = useContext(ThemeContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();


  const form = useRef();

  console.log(errors)
  const sendEmail = () => {
    console.log("Form Values : ", form.current)
    emailjs.sendForm('service_nlstpls', 'template_rg6u9u5', form.current, 'kiHHCVnx4cI7_iVIY')
      .then((result) => {
        console.log(result.text);
        toast.success("Mail sent successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
        reset();
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <>
      <div className="form-container lg:mt-0 my-12 lg:col-span-6">
        <form className='flex flex-col ' onSubmit={handleSubmit(sendEmail)} ref={form}>
          <input name="name" className={`input-fields text-[15px] dark:bg-[#252525] bg-[#EBEBE3] rounded-3xl mb-6 py-2 placeholder:opacity-80 placeholder:text-xs px-3 focus:outline-none ${errors?.name ? " placeholder:text-red border border-red placeholder:text-[13px] " : ""}`} type="text" placeholder={errors.name ? errors.name.message : 'Your Name '}
            {...register("name", {
              required: "Name is required",
              maxLength: 20,
            })}
          />
          {/* <p className='text-[14px] text-red-600 mt-0'>{errors.name}</p> */}
          <input name="email" className={`input-fields text-[15px] dark:bg-[#252525] bg-[#EBEBE3] rounded-3xl mb-6 py-2 placeholder:opacity-80 placeholder:text-xs px-3 focus:outline-none ${errors?.email ? " placeholder:text-red border border-red placeholder:text-[13px] " : ""}`} type="text" placeholder={errors.email ? errors.email.message : 'Your Email '}
            {...register("email", {
              required: "Email is required",
            })}
          />
          {/* <p className='text-[14px] text-red-600 mt-0'>{errors.email}</p> */}
          <input name="subject" className={`input-fields text-[15px] dark:bg-[#252525] bg-[#EBEBE3] rounded-3xl mb-6 py-2 placeholder:opacity-80 placeholder:text-xs px-3 focus:outline-none ${errors?.subject ? " placeholder:text-red border border-red placeholder:text-[13px] " : ""}`} type="text" placeholder={errors.subject ? errors.subject.message : 'Your Subject '}
            {...register("subject", {
              required: "Subject is required",
              maxLength: 20,
            })}
          />

          <textarea name="myMessage" className={`input-fields text-[15px] dark:bg-[#252525] bg-[#EBEBE3] mb-4 placeholder:text-xs p-3 placeholder:opacity-80 rounded-2xl h-32 focus:outline-none overflow-hidden resize-y ' rows="6" type='text' placeholder='Message' ${errors?.myMessage ? " placeholder:text-red border border-red placeholder:text-[13px] " : ""}`} type="text" placeholder={errors.myMessage ? errors.myMessage.message : 'Message '}
            {...register("myMessage", {
              required: "Message is required",
              maxLength: 20,
            })}
          />
          {/* <p className='text-[14px] text-red-600 mt-0'>{errors.myMessage}</p> */}
          <button type='Submit' value='Send' className='btn-send mt-7 ml-auto group'>
            <div className="svg-wrapper-1">
              <div className="svg-wrapper group-hover:translate-x-1 group-hover:-translate-y-1  transition duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path fill="#ffb400" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                </svg>
              </div>
            </div>
            <span className={`${theme}-btn-sendtheme`}>Send Message</span>
          </button>
        </form>
      </div>
      <ToastContainer />
    </>

  )
}

export default ContactFrom