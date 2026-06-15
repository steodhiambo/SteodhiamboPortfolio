import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import SendIcon from "@mui/icons-material/Send";
import SEO from "../components/SEO";
import "../styles/Contact.css";

const EMAILJS_CONFIGURED =
  import.meta.env.VITE_EMAILJS_SERVICE_ID &&
  import.meta.env.VITE_EMAILJS_SERVICE_ID !== "your_service_id" &&
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID &&
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID !== "your_template_id" &&
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY &&
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY !== "your_public_key";

function Contact() {
  const form = useRef();
  const statusRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!EMAILJS_CONFIGURED) {
      const mailtoLink = `mailto:stephenoginga6@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
      window.location.href = mailtoLink;
      setStatus("success");
      return;
    }

    setStatus("sending");

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("error");
      });
  };

  useEffect(() => {
    if (status === "success" || status === "error") {
      if (statusRef.current) {
        statusRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      const timer = setTimeout(() => setStatus("idle"), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section className="contact" aria-label="Contact form">
      <SEO
        title="Contact"
        description="Get in touch with Stephen Odhiambo Oginga — Full-Stack Developer based in Kisumu, Kenya. Open to collaboration and opportunities."
        ogUrl="https://steodhiambo.com/contact"
      />
      <h1>Get In Touch</h1>
      <p className="contact-subtitle">
        Have a question, want to collaborate, or just want to say hi? Fill out the form below.
      </p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your.email@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="What's this about?"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your message..."
            rows="6"
          />
        </div>

        <button type="submit" className="submit-btn" disabled={status === "sending"}>
          <SendIcon /> {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p ref={statusRef} className="form-success">Message sent successfully! I'll get back to you soon.</p>
        )}
        {status === "error" && (
          <p ref={statusRef} className="form-error">Failed to send. Please try again or email me directly.</p>
        )}
      </form>
    </section>
  );
}

export default Contact;
