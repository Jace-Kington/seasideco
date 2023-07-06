"use client";

import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Head from 'next/head'

const ContactUs = () => {
  
  const toast_success = () => { toast('Message Sent to Sea Side Co!'); }
  const toast_fail = () => { toast('Error'); }
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5xwj9ky', 'template_81lluo3', form.current, '7jHtCbxop4BW2nz9r')
      .then((result) => {
          document.getElementById("buttonSubmit").innerHTML="Sent!";
          buttonSubmit.classList.add('py-3', 'px-5', 'text-sm', 'font-medium', 'text-center', 'text-white', 'rounded-lg', 'bg-orange-400', 'sm:w-fit');

          console.log(result.text);
          toast_success();
      }, (error) => {
          console.log(error.text);
          toast_fail();
      });
  };

  return (
    <div id="get-started" className='pb-12 px-4 max-w-screen-xl mx-auto pt-12'>

            <div className='sm:px-32 px-12 rounded-3xl'>
            <section className="">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <div className='uppercase text-orange-400 font-bold text-center'>
                        Grab a Shirt
                    </div>
                    <div className="mb-4 text-5xl tracking-tight font-extrabold text-center ">We&apos;ll Be in Touch</div>
                    <form ref={form} onSubmit={sendEmail} className="space-y-8">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-customBlack">Your email</label>
                            <input name="email" type="email" id="email" class="shadow-xl text-sm rounded-lg  block w-full p-2.5 " placeholder="name@company.com" required/>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-customBlack">Product</label>
                            <textarea name="message" id="message" rows={6} className="shadow-xl block p-2.5 w-full text-sm text-customBlack focus:border-blue-400  focus:ring-blue-400 bg-customWhite rounded-lg shadow-sm " placeholder="What Product are You Interested in"></textarea>
                        </div>
                        <div id="buttonSubmit">
                        <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg border-2 border-orange-400 hover:bg-orange-400 hover:text-white transition bg-white sm:w-fit">Send message</button>
                        </div>
                        <ToastContainer
  position="top-right"
  autoClose={5000}
  hideProgressBar={true}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  toastStyle = {{'background-color': 'rgb(34 197 94)', 'color': 'white', 'border-radius': '1rem', 'padding': '15px'}}
  />
                    </form>
                </div>
            </section>
        </div>
        </div>
  )
}

export default ContactUs

