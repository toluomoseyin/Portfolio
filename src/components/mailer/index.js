import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./mailer.css";
import emailjs from "emailjs-com";

function Emailer() {
  var allOrangeJuiceByClass = document.getElementsByClassName("tosin");
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aruqxbl",
        "template_of5ymgm",
        e.target,
        "user_ypus9Hqav0WfeQSBOhhVH"
      )
      .then((res) => {
        console.log(res);
        for (
          var i = 0, len = allOrangeJuiceByClass.length | 0;
          i < len;
          i = (i + 1) | 0
        ) {
          allOrangeJuiceByClass[i].value = "";
        }
      })
      .catch((err) => console.log(err));
  }
  return (
    <div class="container">
      <h5 className="mail">Wanna send me a mail?</h5>
      <form onSubmit={sendEmail}>
        <div class="row">
          <div class="col-25">
            <label for="fname">Name</label>
          </div>
          <div class="col-75">
            <input
              class="tosin"
              required
              type="text"
              id="fname"
              name="fname"
              placeholder="Your name.."
            />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="lname">Email</label>
          </div>
          <div class="col-75">
            <input
              required
              class="tosin"
              type="text"
              id="lname"
              name="email"
              placeholder="Your Email..."
            />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="subject">Message</label>
          </div>
          <div class="col-75">
            <textarea
              required
              class="tosin"
              id="subject"
              name="message"
              placeholder="Write something.."
              style={{ height: 200 }}
            ></textarea>
          </div>
        </div>
        <div class="row" className="tolu">
          <input type="submit" value="Submit" style={{ width: 700 }} />
        </div>
      </form>
    </div>
  );
}

export default Emailer;
