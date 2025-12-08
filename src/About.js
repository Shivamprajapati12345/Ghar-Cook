import React from "react";

function About() {
  return (
    <div style={styles.page}>
      <div style={styles.overlay}></div>

      <div style={styles.container}>
        {/* Heading */}
        <h1 style={styles.heading}>About HomeCook</h1>
        <p style={styles.subheading}>
          Fresh Meals • Trusted Chefs • Comfort of Home
        </p>

        {/* About Content Section */}
        <div style={styles.contentBox}>
          {/* Left Side Image */}
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="Cooking"
            style={styles.image}
          />

          {/* Right Side Text */}
          <div style={styles.textBox}>
            <h2 style={styles.title}>Who We Are</h2>
            <p style={styles.text}>
              HomeCook is a trusted home-cooking service designed to bring
              fresh, healthy, and hygienic food straight to your dining table.
              We connect you with professional home cooks who prepare meals
              exactly how you want — with taste, tradition, and love.
            </p>

            <h2 style={styles.title}>Our Mission</h2>
            <p style={styles.text}>
              To make your daily meals healthy, personalized, and affordable —
              without the stress of cooking. Whether you're a student, a working
              professional, or a family, we ensure delicious homemade food
              whenever you need it.
            </p>

            <a href="Learn" style={styles.btn}>
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    width: "100%",
    minHeight: "100vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1498579809087-ef1e558fd1da')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    padding: "60px 20px",
    fontFamily: "Poppins, sans-serif",
    color: "white",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.6)",
    zIndex: 1,
  },

  container: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  },

  heading: {
    fontSize: "42px",
    fontWeight: "bold",
  },

  subheading: {
    marginTop: "10px",
    fontSize: "20px",
    opacity: 0.9,
    marginBottom: "40px",
  },

  contentBox: {
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(10px)",
    borderRadius: "20px",
    padding: "30px",
    display: "flex",
    gap: "30px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
    flexWrap: "wrap",
  },

  image: {
    width: "100%",
    maxWidth: "450px",
    borderRadius: "18px",
    objectFit: "cover",
  },

  textBox: {
    flex: 1,
    textAlign: "left",
    color: "white",
  },

  title: {
    fontSize: "26px",
    marginBottom: "10px",
    color: "#ffcc66",
  },

  text: {
    fontSize: "18px",
    lineHeight: "1.6",
    marginBottom: "20px",
    opacity: 0.9,
  },

  btn: {
    marginTop: "10px",
    background: "#ffcc66",
    color: "black",
    padding: "12px 25px",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
  },
};

export default About;
