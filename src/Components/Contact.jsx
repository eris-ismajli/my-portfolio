import { useCallback, useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import instagram from "../Images/instagram.png";
import github from "../Images/github.png";
import facebook from "../Images/facebook.png";
import linkedIn from "../Images/linkedin.png";
import { Mail, Phone } from "lucide-react";

const SOCIALS = [
  {
    href: "https://www.linkedin.com/in/eris-ismajli-9b666636b/",
    icon: linkedIn,
    label: "LinkedIn",
    username: "erisismajli",
  },
  {
    href: "https://github.com/eris-ismajli",
    icon: github,
    label: "GitHub",
    username: "eris-ismajli",
  },
  {
    href: "https://www.instagram.com/erisismajli10",
    icon: instagram,
    label: "Instagram",
    username: "erisismajli10",
  },
  {
    href: "https://www.facebook.com/profile.php?id=100081731738138",
    icon: facebook,
    label: "Facebook",
    username: "Eris Ismajli",
  },
];

export const ContactMe = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    emailjs
      .send(
        "service_3qsiawj",
        "template_f6fofza",
        {
          from_name: name,
          from_email: email,
          message,
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
  }, [formData]);

  return (
    <section className="contact-me" id="contact">
      <ToastContainer position="bottom-right" autoClose={3000} theme="dark" />

      <div className="contact-me-container">
        {/* Contact Form */}
        <div className="contact-container">
          <h2 className="about-title contact-title">Contact Me</h2>

          <form onSubmit={handleSubmit} className="contact-form" noValidate>
            <div className="name-email">
              {["name", "email"].map((field) => (
                <div className="form-group" key={field}>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    className="contact-input"
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder=" "
                    required
                    autoComplete="off"
                  />
                  <label className="floating-label">
                    {field === "name" ? "Your Name" : "Your Email"}
                  </label>
                </div>
              ))}
            </div>

            <div className="form-group">
              <textarea
                name="message"
                className="contact-textarea"
                value={formData.message}
                onChange={handleChange}
                placeholder=" "
                rows={6}
                required
              ></textarea>
              <label className="floating-label floating-label-msg">Your Message</label>
            </div>

            <button type="submit" className="contact-button2">
              Send Message ➤
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="socials-container">
          <h2 className="about-title contact-title">My Socials</h2>
          <div className="socials">
            {SOCIALS.map(({ href, icon, label, username }) => (
              <a
                key={label}
                className="social-link"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={icon} alt={`${label} icon`} className="social-icon" loading="lazy" />
                <p>{username}</p>
              </a>
            ))}
          </div>
        </div>

        {/* More Info */}
        <div className="info-container">
          <h2 className="about-title contact-title">More Info</h2>
          <div className="info">
            <p>
              This portfolio was developed with React, Vite, and Vanilla CSS, with a focus on
              performance, animation, and responsive design. I’m currently open to job
              opportunities, freelance work, or creative collaborations — feel free to reach out
              through any of my socials.
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
