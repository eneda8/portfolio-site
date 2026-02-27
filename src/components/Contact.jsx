import React from "react";
import Button from "react-bootstrap/Button";

export default function Contact(props) {
  const email = props.basicInfo.social.find(s => s.name === "Email");

  return (
    <section id="contact">
      <h1 className="section-title">Get in Touch</h1>
      <p className="contact-text">
        Interested in working together? I'd love to hear from you.
      </p>
      {email && (
        <Button
          size="lg"
          className="button contact-button"
          href={email.url}
        >
          <i className={email.icon}></i> Say Hello
        </Button>
      )}
    </section>
  );
}
