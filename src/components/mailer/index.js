import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./mailer.css";
import emailjs from "emailjs-com";

function Emailer() {
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
      })
      .catch((err) => console.log(err));
  }
  return (
    <div class="container contact">
      <div class="row">
        <div class="col-md-3">
          <div class="contact-info">
            <img
              src="https://image.ibb.co/kUASdV/contact-image.png"
              alt="tolu"
            />
            <h2>Contact Us</h2>
            <h4>We would love to hear from you !</h4>
          </div>
        </div>
        <form onSubmit={sendEmail}>
          <div class="col-md-9">
            <div class="contact-form">
              <div class="form-group">
                <label class="control-label col-sm-2" for="fname">
                  First Name:
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="fname"
                    placeholder="Enter First Name"
                    name="fname"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-sm-2" for="lname">
                  Last Name:
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="lname"
                    placeholder="Enter Last Name"
                    name="lname"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-sm-2" for="email">
                  Email:
                </label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-sm-2" for="comment">
                  Comment:
                </label>
                <div class="col-sm-10">
                  <textarea
                    name="message"
                    class="form-control"
                    rows="5"
                    id="comment"
                  ></textarea>
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                  <button
                    type="submit"
                    class="btn btn-default"
                    className="tolu"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Emailer;
