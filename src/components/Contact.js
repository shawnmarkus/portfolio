import React, { useRef } from "react";
import contactStyle from "../css/Contact.module.css";
import Hr from "./Hr";
import emailjs from "@emailjs/browser";

const Contact = ({ id }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm(
        "service_dvnw0rq",
        "template_4gh3e08",
        form.current,
        "l3UP3LZVzoyWmIaOa"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id={id} className={contactStyle.masterContainer}>
      <div className={contactStyle.outerContainer}>
        <div className={contactStyle.titleContainer}>
          <div>
            <h1>Contact</h1>
            <h4>Interested in working together? Let's talk</h4>
          </div>
          <Hr />
        </div>

        <div className={contactStyle.formStr}>
          <form
            className={contactStyle.formGrid}
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              className={contactStyle.inputName}
              type="text"
              placeholder="Enter Your name"
            />
            <input
              className={contactStyle.inputEmail}
              type="text"
              placeholder="Enter Your Email"
            />
            <input
              className={contactStyle.inputSubject}
              type="text"
              placeholder="Enter Subject"
            />
            <textarea
              className={contactStyle.inputMessage}
              type="text"
              placeholder="Enter your message"
            />
            <input
              className={contactStyle.submitBtn}
              type="submit"
              value="Submit"
            />
          </form>

          {/* <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
