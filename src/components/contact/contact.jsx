import React from 'react'
import './contact.css'
export default function contact() {
  return (
    <section className="ContactUs ">
      <div className="title flex">
        <span className="icon-envelope-o"></span>
        <h2 className="">Contact Us</h2>
      </div>
      <p>
        Contact Us for mare information and get notified when I publish
        something new.
      </p>
      <form className="">
        <div className='flex'>
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" />
        </div>
        <div className='flex'>
          <label htmlFor="message">Your message:</label>
          <textarea id="message"></textarea>
        </div>
        <button>Submit</button>
      </form>
    </section>
  );
}
