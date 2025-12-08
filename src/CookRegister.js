import React, { useState } from "react";

export default function CookRegister() {
  const [form, setForm] = useState({
    name: "",
    specialist: "",
    email: "",
    phone: "",
    age: "",
    experience: "",
    photo: null,
  });

  const handlePhoto = (e) => {
    setForm({ ...form, photo: e.target.files[0] });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Cook Registered Successfully!");
  };

  return (
    <div style={styles.page}>
      {/* FIX: Overlay must NOT block clicks */}
      <div style={styles.overlay}></div>

      <div style={styles.container}>
        <h1 style={styles.heading}>Register as a Cook 👨‍🍳</h1>
        <p style={styles.subheading}>
          Apni details fill karke hamare platform par Cook ban sakte ho.
        </p>

        <form style={styles.form} onSubmit={handleSubmit}>
          {/* Photo */}
          <label style={styles.label}>Upload Photo</label>
          <input
            type="file"
            onChange={handlePhoto}
            style={styles.inputFile}
            required
          />

          {/* Name */}
          <label style={styles.label}>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            style={styles.input}
            onChange={handleChange}
            required
          />

          {/* Specialist */}
          <label style={styles.label}>Specialist In (Konsa Khana)</label>
          <input
            type="text"
            name="specialist"
            placeholder="e.g., Paneer, South Indian, Chinese"
            style={styles.input}
            onChange={handleChange}
            required
          />

          {/* Email */}
          <label style={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            style={styles.input}
            onChange={handleChange}
            required
          />

          {/* Phone */}
          <label style={styles.label}>Phone Number</label>
          <input
            type="number"
            name="phone"
            placeholder="Enter your phone number"
            style={styles.input}
            onChange={handleChange}
            required
          />

          {/* Age */}
          <label style={styles.label}>Age</label>
          <input
            type="number"
            name="age"
            placeholder="Enter your age"
            style={styles.input}
            onChange={handleChange}
            required
          />

          {/* Experience */}
          <label style={styles.label}>Experience (Years)</label>
          <input
            type="number"
            name="experience"
            placeholder="How many years?"
            style={styles.input}
            onChange={handleChange}
            required
          />

          {/* Submit */}
          <button style={styles.btn} type="submit">
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  page: {
    width: "100%",
    minHeight: "100vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=1350&q=60')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "40px 20px",
    position: "relative",
    fontFamily: "Poppins, sans-serif",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.65)",
    pointerEvents: "none", // FIXED: Overlay won't block clicking
  },

  container: {
    position: "relative",
    zIndex: 2,
    maxWidth: "600px",
    margin: "auto",
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(10px)",
    padding: "35px",
    borderRadius: "20px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
    color: "white",
  },

  heading: {
    fontSize: "36px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "10px",
  },

  subheading: {
    textAlign: "center",
    fontSize: "18px",
    marginBottom: "30px",
    opacity: 0.9,
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  label: {
    fontSize: "16px",
    fontWeight: "600",
  },

  input: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "10px",
    border: "none",
    outline: "none",
  },

  inputFile: {
    padding: "12px",
    borderRadius: "10px",
    background: "#fff",
    color: "#000",
  },

  btn: {
    padding: "14px",
    marginTop: "15px",
    background: "#ffcc66",
    color: "#000",
    border: "none",
    borderRadius: "10px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};
