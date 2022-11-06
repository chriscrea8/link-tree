import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <span>Hi there, contact me to ask me about anything you have in mind. </span>
      <form action="">
        <div>
          <div>
            <label htmlFor="first_name">First name</label>
            <input type="text" id="first_name" placeholder="Enter your first name" />
          </div>
          <div>
            <label htmlFor="last_name">Last name</label>
            <input type="text" id="last_name" placeholder="Enter your last name" />
          </div>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="yourname@email.com" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="5" placeholder="Send me a message and Ill reply you as soon as possible..."></textarea>
        </div>
        <div>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">You agree to providing your data to name who may contact you.</label>
        </div>
        <button id="btn__submit">Send message</button>
      </form>
    </div>
  )
}

export default Contact
