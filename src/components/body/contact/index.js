import React from "react";
import Separator from "../../common/separator";
import SocialContact from "../../common/social-contact";
import Emailer from "../../mailer";
import "./contact.css";

function Contact() {
  return (
    <div>
      <div className="contact">
        <Separator />
        <label className="section-title"></label>
        <div className="contact-container">
          <div className="contact-left">
            <p>Want to get in touch? Contact me on any of these platform</p>
            <SocialContact />
          </div>
          <div className="download">
            <a download href={require("../../../assets/cv/tolu.pdf").default}>
              <i class="fi-rr-cloud-download download-icon"></i>
              Download Resume
            </a>
          </div>
        </div>
        <Emailer />
      </div>
    </div>
  );
}

export default Contact;
