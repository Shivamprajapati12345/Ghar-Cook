import React from "react";

function Profile() {
  return (
    <div style={styles.page}>
      {/* Dark overlay */}
      <div style={styles.overlay}></div>

      {/* Content */}
      <div style={styles.container}>
        <h1 style={styles.heading}>Thank You for Booking! 🎉</h1>
        <p style={styles.subheading}>
          Your cook partner will arrive in <strong>10 minutes</strong>. We
          appreciate your trust in our service.
        </p>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Your Booking is Confirmed ✔</h2>

          <p style={styles.text}>
            Our home cook partner is preparing to reach your location as soon as
            possible. Please keep your phone available for any updates or
            verification.
          </p>

          <p style={styles.text}>
            Enjoy fresh, hygienic, and delicious homemade meals —
            <strong>just like Ghar ka Khana! 🍽️</strong>
          </p>

          <a href="/HomePage" style={styles.btn}>
            Go to Home
          </a>
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
      "url('https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1350&q=60')",
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
    background: "rgba(0, 0, 0, 0.65)",
    zIndex: 1,
  },

  container: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    marginTop: "30px",
  },

  heading: {
    fontSize: "42px",
    fontWeight: "bold",
    marginBottom: "10px",
  },

  subheading: {
    fontSize: "20px",
    opacity: 0.95,
    marginBottom: "40px",
    lineHeight: 1.5,
  },

  card: {
    maxWidth: "550px",
    margin: "auto",
    background: "rgba(255,255,255,0.15)",
    borderRadius: "25px",
    padding: "30px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
  },

  cardTitle: {
    fontSize: "28px",
    marginBottom: "15px",
    fontWeight: "bold",
    color: "#ffcc66",
  },

  text: {
    fontSize: "18px",
    marginBottom: "20px",
    lineHeight: 1.7,
  },

 btn: {
  marginTop: "10px",
  width: "100%",
  padding: "14px",
  background: "#ffcc66",
  color: "black",
  border: "none",
  borderRadius: "12px",
  fontSize: "18px",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "0.3s",
  textDecoration: "none",   // ✅ FIXED
},
}

export default Profile;
