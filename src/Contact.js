import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thanks for contacting us!");

    // Reset form fields
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div style={styles.page}>
      <div style={styles.overlay}></div>

      <div style={styles.container}>
        <h1 style={styles.title}>Contact Us</h1>
        <p style={styles.subtitle}>
          We’re here to help you. Get in touch anytime!
        </p>

        {/* FORM START */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            style={styles.input}
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            style={styles.input}
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            style={styles.input}
            value={form.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message..."
            rows="4"
            style={styles.textarea}
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" style={styles.button}>
            Send Message
          </button>
        </form>
        {/* FORM END */}

        <div style={styles.infoBox}>
          <h3>📍 Our Office</h3>
          <p>Lucknow, Uttar Pradesh</p>

          <h3>📞 Phone</h3>
          <p>+91 9876543210</p>

          <h3>✉️ Email</h3>
          <p>support@homecook.com</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    width: "100%",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    fontFamily: "Arial, sans-serif",
    position: "relative",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    zIndex: 1,
  },

  container: {
    position: "relative",
    zIndex: 2,
    maxWidth: "450px",
    margin: "auto",
    marginTop: "60px",
    padding: "30px",
    textAlign: "center",
    background: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(15px)",
    borderRadius: "20px",
    color: "white",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
  },

  title: {
    fontSize: "32px",
    marginBottom: "10px",
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: "16px",
    marginBottom: "20px",
    color: "#f1f1f1",
  },

  input: {
    width: "100%",
    padding: "12px",
    margin: "8px 0",
    borderRadius: "10px",
    border: "none",
    fontSize: "16px",
  },

  textarea: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "10px",
    border: "none",
    fontSize: "16px",
  },

  button: {
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    background: "#ffbd59",
    color: "black",
    border: "none",
    borderRadius: "10px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  infoBox: {
    marginTop: "25px",
    padding: "15px",
    background: "rgba(255,255,255,0.20)",
    borderRadius: "12px",
    lineHeight: "1.6",
  },
};

export default Contact;
