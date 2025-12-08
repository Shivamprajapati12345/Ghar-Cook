import React from "react";

export default function PaymentCard() {
  return (
    <div style={styles.page}>
      <div style={styles.overlay}></div>

      <div style={styles.card}>
        <h2 style={styles.title}>Payment Details</h2>

        <input type="text" placeholder="Card Holder Name" style={styles.input} />
        <input type="text" placeholder="Card Number" style={styles.input} />
        <input type="text" placeholder="Expiry Date (MM/YY)" style={styles.input} />
        <input type="text" placeholder="CVV" style={styles.input} />

        <button style={styles.btn}>Pay Now</button>
      </div>
    </div>
  );
}

/* ---------- Styles ---------- */
const styles = {
  page: {
    minHeight: "100vh",
    padding: "20px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1595507532289-3b0f8f77c8e1')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.5)",
    backdropFilter: "blur(5px)",
  },

  card: {
    width: "350px",
    padding: "25px",
    borderRadius: "20px",
    background: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(10px)",
    boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.2)",
    zIndex: 2,
  },

  title: {
    textAlign: "center",
    color: "white",
    fontSize: "25px",
    marginBottom: "20px",
    fontWeight: "700",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    borderRadius: "10px",
    border: "1px solid #fff",
    background: "rgba(255,255,255,0.3)",
    color: "white",
    fontSize: "16px",
  },

  btn: {
    width: "100%",
    padding: "12px",
    marginTop: "20px",
    borderRadius: "10px",
    border: "none",
    background: "white",
    color: "black",
    fontSize: "18px",
    fontWeight: "700",
    cursor: "pointer",
  },
};
