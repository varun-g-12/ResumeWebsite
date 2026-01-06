import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaMediumM,
  FaPaperPlane,
  FaUser,
  FaComment
} from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { basics } from '../data/resume';

// Contact Info Item Component
function ContactInfoItem({ icon: Icon, label, value, href }) {
  const content = (
    <motion.div
      className="contact-info__item"
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="contact-info__icon">
        <Icon />
      </div>
      <div className="contact-info__text">
        <span className="contact-info__label">{label}</span>
        <span className="contact-info__value">{value}</span>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="contact-info__link" target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}

// Social Link Component
function SocialLink({ icon: Icon, href, label }) {
  return (
    <motion.a
      href={href}
      className="contact-social__link"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ y: -5, scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon />
    </motion.a>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${basics.email}?subject=${subject}&body=${body}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="contact__container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div className="contact__header" variants={itemVariants}>
          <span className="contact__label">Get In Touch</span>
          <h2 className="contact__title">
            Let's Build Something
            <span className="contact__title-highlight"> Amazing</span>
          </h2>
          <p className="contact__subtitle">
            Have an AI project in mind? Let's talk about how we can work together.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="contact__content">
          {/* Contact Form */}
          <motion.div className="contact__form-wrapper" variants={itemVariants}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__group">
                <div className="contact-form__input-wrapper">
                  <FaUser className="contact-form__icon" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="contact-form__input"
                  />
                </div>
              </div>

              <div className="contact-form__group">
                <div className="contact-form__input-wrapper">
                  <FaEnvelope className="contact-form__icon" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contact-form__input"
                  />
                </div>
              </div>

              <div className="contact-form__group">
                <div className="contact-form__input-wrapper contact-form__input-wrapper--textarea">
                  <FaComment className="contact-form__icon" />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="contact-form__textarea"
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                className="contact-form__submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Send Message</span>
                <FaPaperPlane />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="contact__info-wrapper" variants={itemVariants}>
            <div className="contact-info">
              <div className="contact-info__header">
                <HiSparkles className="contact-info__sparkle" />
                <span>Contact Information</span>
              </div>

              <div className="contact-info__list">
                <ContactInfoItem
                  icon={FaEnvelope}
                  label="Email"
                  value={basics.email}
                  href={`mailto:${basics.email}`}
                />
                <ContactInfoItem
                  icon={FaPhone}
                  label="Phone"
                  value={basics.phone}
                  href={`tel:${basics.phone}`}
                />
                <ContactInfoItem
                  icon={FaMapMarkerAlt}
                  label="Location"
                  value={`${basics.location}, India`}
                />
              </div>

              <div className="contact-social">
                <div className="contact-social__header">
                  <span>Connect With Me</span>
                </div>
                <div className="contact-social__links">
                  <SocialLink
                    icon={FaLinkedinIn}
                    href={basics.linkedin}
                    label="LinkedIn"
                  />
                  <SocialLink
                    icon={FaMediumM}
                    href={basics.medium}
                    label="Medium"
                  />
                  <SocialLink
                    icon={FaEnvelope}
                    href={`mailto:${basics.email}`}
                    label="Email"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
