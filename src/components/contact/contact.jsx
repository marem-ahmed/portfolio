import React from 'react'
import './contact.css'
import Lottie from "lottie-react";
import doneAnimation from "../../../public/animations/done.json";
import EmailAnimation from '../../../public/animations/email.json'
import { useForm, ValidationError } from "@formspree/react";


export default function contact() {
  const [state, handleSubmit] = useForm("xoqgboor");
  
  return (
    <section className="ContactUs flex justify-content-between " id="contact">
      <div className="start-side">
        <div className="title flex ">
          <span className="icon-envelope-o"></span>
          <h2 className="">Contact Us</h2>
        </div>
        <p>
          Contact Us for mare information and get notified when I publish
          something new.
        </p>
        <form className="" onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email" className='pe-2'>Email Address:</label>
            <input autoComplete="off" type="email" id="email" name="email" placeholder='Email..' />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex">
            <label htmlFor="message" className='pe-2'>Your message:</label>
            <textarea id="message" name="message" placeholder='Message..'></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting}>
            {state.submitting ? "Submiting...." : "Submit"}
          </button>
          {state.succeeded && (
            <div className="title-color d-flex justify-content-flex-end align-items-center  ">
              <Lottie
                loop={false}
                style={{ height: 30 }}
                animationData={doneAnimation}
                className="my-auto"
              />
              <h5 className="title-color my-auto">
                Your message has been sent successfully 👌
              </h5>
            </div>
          )}
        </form>
      </div>
      <div className="end-side">
        <Lottie
          style={{ height: 320 }}
          animationData={EmailAnimation}
          className="my-auto animation"
        />
      </div>
    </section>
  );
}
