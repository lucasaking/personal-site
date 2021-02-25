import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';
import "./ContactForm.css"

function ContactForm() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const [formData, setFormData] = useState({
    from_name: "",
    message: "",
    reply_to: ""
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  }

  function sendMessage(e) {
    e.preventDefault();

    emailjs.sendForm('service_8xsnm1l', 'template_aupyvbd', e.target, 'user_U0OkHYRoAwcmiTHkx79SY')
      .then(function () {
        console.log('SUCCESS!');
      }, function (error) {
        console.log('FAILED...', error);
      });
    e.target.reset();
    setFormData({ from_name: "", message: "", reply_to: "" });
  }

  return (
    <div>

      <div className="alignment">

        <h1 className="ContactFormInfo">Include your name, message & the best email to reach you at.</h1>

        <form onSubmit={sendMessage} className="ContactFormContent">

          <div className="field">

            <label htmlFor="from_name">NAME</label>

            <input
              type="text"
              name="from_name"
              id="from_name"
              onChange={handleChange}
              value={formData.from_name} />

          </div>

          <div className="field">

            <label htmlFor="message">MESSAGE</label>

            <textarea
              cols="30"
              rows="8"
              type="text"
              name="message"
              id="message"
              onChange={handleChange}
              value={formData.message}>
            </textarea>

          </div>

          <div className="field">

            <label htmlFor="reply_to">REPLY TO</label>

            <input
              type="text"
              name="reply_to"
              id="reply_to"
              onChange={handleChange}
              value={formData.reply_to} />

          </div>

          <button type="submit" value="Send Message" className="ContactFormBtn">Send Message</button>

        </form>

      </div>

      <h1 className="content3"><Link className="About-pointer" to="/"><b className="Contact-me">HOME</b></Link></h1>

      {/** UNDER CONSTRUCTION */}

      <br></br><br></br><br></br><br></br>

      {/** UNDER CONSTRUCTION */}

    </div>
  )
}

export default ContactForm;
