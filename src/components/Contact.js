import React, { useState } from "react";
import contactStyle from "../css/Contact.module.css";
import Hr from "./Hr";
import emailjs from "@emailjs/browser";

const Contact = ({ id }) => {
  const initialState = {
    from_name: "",
    subject: "",
    to_name: "shivam sharma",
    message: "",
    reply_to: "",
  };

  const [value, setValue] = useState(initialState);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("clicked the send button");

    emailjs
      .send("service_dvnw0rq", "template_4gh3e08", value, "l3UP3LZVzoyWmIaOa")
      .then((info) => {
        console.log(info);

        // prompt(info);
      })
      .catch((error) => {
        console.log(error);
        prompt(error);
      });

    resetForm();
  };

  const resetForm = () => {
    console.log("reset");

    setValue(initialState);
  };

  return (
    <div
      id={id}
      style={{ height: "100vh", width: "100vw", display: "grid" }}
      className={contactStyle.masterContainer}
    >
      <div
        style={{
          width: "70%",
          height: "80%",
          color: "white",
          justifySelf: "center",
          alignSelf: "center",
          fontFamily: "sans-serif",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 500px 100px rgba(0, 0, 0, 0.6)",
          padding: "1rem 2rem",
        }}
        className={contactStyle.outerContainerContact}
      >
        <div className={contactStyle.titleContainerContact}>
          <div>
            <h1>Contact</h1>
            <h4>Interested in working together? Let's talk</h4>
          </div>
          <Hr />
        </div>

        <div className={contactStyle.formStr}>
          <form
            style={{ fontFamily: "sans-serif" }}
            className={contactStyle.formGrid}
            onSubmit={sendEmail}
          >
            <input
              className={contactStyle.inputName}
              type="text"
              placeholder="Enter Your name"
              onChange={(e) => {
                setValue({ ...value, from_name: e.target.value });
              }}
              value={value.from_name}
            />
            <input
              className={contactStyle.inputEmail}
              type="text"
              placeholder="Enter Your Email"
              onChange={(e) => {
                setValue({ ...value, reply_to: e.target.value });
              }}
              value={value.reply_to}
            />
            <input
              className={contactStyle.inputSubject}
              type="text"
              placeholder="Enter Subject"
              onChange={(e) => {
                setValue({ ...value, subject: e.target.value });
              }}
              value={value.subject}
            />
            <textarea
              className={contactStyle.inputMessage}
              type="text"
              placeholder="Enter your message"
              onChange={(e) => {
                setValue({ ...value, message: e.target.value });
              }}
              value={value.message}
            />
            <input
              className={contactStyle.submitBtn}
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
