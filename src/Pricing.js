import React from "react";

function Pricing() {
  return (
    <div style={styles.page}>
      {/* Dark overlay */}
      <div style={styles.overlay}></div>

      {/* Content */}
      <div style={styles.container}>
        <h1 style={styles.heading}>Our Pricing Plans</h1>
        <p style={styles.subheading}>
          Choose the plan that fits your needs. Transparent & affordable.
        </p>

        <div style={styles.cardsRow}>
          {/* Basic Plan */}
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Basic</h2>
            <h3 style={styles.price}>₹3999 / month</h3>
            <ul style={styles.features}>
              <li>1 Home Cook Visit</li>
              <li>Basic Meal Prep</li>
              <li>Timing: 1 Hour</li>
            </ul>
            <a href="/Book slot" style={styles.btn}>Choose Plan</a>
          </div>

          {/* Standard Plan */}
          <div style={{ ...styles.card, ...styles.popularCard }}>
            <h2 style={styles.cardTitle}>Standard</h2>
            <h3 style={styles.price}>₹4999 / month</h3>
            <ul style={styles.features}>
              <li>2 Home Cook Visits</li>
              <li>Full Meal Prep</li>
              <li>Timing: 2 Hours</li>
            </ul>
            <a href="/Book slot" style={styles.btn}>Choose Plan</a>
          </div>

          {/* Premium Plan */}
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Premium</h2>
            <h3 style={styles.price}>₹7999 / month</h3>
            <ul style={styles.features}>
              <li>Daily Home Cook Visits</li>
              <li>Premium Meal Prep</li>
              <li>Timing: 3 Hours</li>
            </ul>
            <a href="/Book slot" style={styles.btn}>Choose Plan</a>
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
      "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    padding: "40px 20px",
    color: "white",
    fontFamily: "Poppins, sans-serif",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.6)",
    zIndex: 1,
  },

  container: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
  },

  heading: {
    fontSize: "40px",
    fontWeight: "bold",
  },

  subheading: {
    marginTop: "10px",
    marginBottom: "40px",
    fontSize: "18px",
    opacity: 0.9,
  },

  cardsRow: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  card: {
    width: "300px",
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(12px)",
    padding: "25px",
    borderRadius: "20px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
    color: "white",
    transition: "0.3s",
  },

  popularCard: {
    transform: "scale(1.04)",
  },

  cardTitle: {
    fontSize: "26px",
    marginBottom: "5px",
  },

  price: {
    fontSize: "24px",
    marginBottom: "20px",
    fontWeight: "bold",
    color: "#ffcc66",
  },

  features: {
    textAlign: "left",
    listStyle: "none",
    padding: 0,
    marginBottom: "20px",
    lineHeight: "1.8",
    fontSize: "16px",
  },

  btn: {
    display: "block",
    width: "100%",
    padding: "12px",
    background: "#ffcc66",
    color: "black",
    border: "none",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center",
  },
};

export default Pricing;
