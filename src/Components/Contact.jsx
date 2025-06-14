import { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import instagram from "../Images/instagram.png";
import github from "../Images/github.png";
import facebook from "../Images/facebook.png";
import { Mail, Phone } from "lucide-react";
import linkedIn from "../Images/linkedin.png";

export const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    emailjs
      .send(
        "service_3qsiawj",
        "template_f6fofza",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "_bzxiNGIntjS8fMxL"
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        toast.error("Something went wrong. Please try again.");
      });
  };

  return (
    <section className="contact-me" id="contact">
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
      />

      <div className="contact-me-container">
        <div className="contact-container">
          <h2 className="about-title contact-title">Contact Me</h2>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="name-email">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="contact-input"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  autoComplete="off"
                />
                <label className="floating-label">Your Name</label>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="contact-input"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                  required
                />
                <label className="floating-label">Your Email</label>
              </div>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                className="contact-textarea"
                value={formData.message}
                onChange={handleChange}
                placeholder=" "
                rows="6"
                required
              ></textarea>
              <label className="floating-label floating-label-msg">
                Your Message
              </label>
            </div>

            <button type="submit" className="contact-button2">
              Send Message ➤
            </button>
          </form>
        </div>

        <div className="socials-container">
          <h2 className="about-title contact-title">My Socials</h2>
          <div className="socials">
            <a
              className="social-link"
              href="https://www.linkedin.com/in/eris-ismajli-9b666636b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedIn} alt="linkedin" className="social-icon" />
              <p>erisismajli</p>
            </a>

            <a
              className="social-link"
              href="https://github.com/eris-ismajli"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github" className="social-icon" />
              <p>eris-ismajli</p>
            </a>

            <a
              className="social-link"
              href="https://www.instagram.com/erisismajli10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="instagram" className="social-icon" />
              <p>erisismajli10</p>
            </a>

            <a
              className="social-link"
              href="https://www.facebook.com/profile.php?id=100081731738138"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="facebook" className="social-icon" />
              <p>Eris Ismajli</p>
            </a>
          </div>
        </div>

        <div className="info-container">
          <h2 className="about-title contact-title">More Info</h2>
          <div className="info">
            <p>
              This portfolio was developed with React, Vite, and Vanilla CSS,
              with a focus on performance, animation, and responsive design. I’m
              currently open to job opportunities, freelance work, or creative
              collaborations — feel free to reach out through any of my socials.
            </p>
            <div className="more-info">
              <Mail opacity={0.6} />
              <p>erisismajli7@gmail.com</p>
            </div>

            <div className="more-info">
              <Phone opacity={0.6} />
              <p>+363 45 464 686</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
