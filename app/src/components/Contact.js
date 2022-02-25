import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Alert } from "react-bootstrap";

function Contact() {
  const defaultFormData = {
    name: "",
    email: "",
    message: "",
  };
  const defaultStatus = {
    message: "",
    code: "light",
  };
  const [formData, setFormData] = useState(defaultFormData);
  const [status, setStatus] = useState(defaultStatus);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = process.env.REACT_APP_USER_ID;
    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    emailjs.send(serviceId, templateId, formData, userId).then(
      // If message successfully sends
      (success) => {
        console.log(success);
        setStatus({
          message: (
            <>
              <strong>Success:</strong> {success.text}, message successfully
              sent!
            </>
          ),
          code: "success",
        });
        setFormData(defaultFormData);
      },
      // If message fails to send
      (error) => {
        console.log(error);
        setStatus({
          message: (
            <>
              <strong>Failed:</strong> {error.text}. Sending message failed.
              Please consider reaching out on{" "}
              <Alert.Link
                href="https://www.linkedin.com/in/joshua-phillip-holmes/"
              >
                social media
              </Alert.Link> instead.
            </>
          ),
          code: "danger",
        });
      }
    );
  };

  const clearStatus = () => {
    setStatus({
      ...status,
      message: "",
    });
  };

  return (
    <div id="contact">
      <h2>Get in Touch</h2>
      <div id="contact-form">
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
        {!status.message ? null : (
          <Alert className="my-alert" variant={status.code} dismissible onClose={clearStatus}>
            {status.message}
          </Alert>
        )}
      </div>
    </div>
  );
}

export default Contact;
