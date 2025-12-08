import React, { useState, useEffect } from "react";
import { paymentAPI } from "./api/payment";

function Payment() {
  const [loading, setLoading] = useState(false);
  const [amount] = useState(3999); // Fixed amount 
  const [bookingId, setBookingId] = useState(null);

  // Read bookingId from URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("bookingId");
    if (id) setBookingId(id);
  }, []);

  const handlePayment = async () => {
    if (!localStorage.getItem("token")) {
      alert("Please login first");
      return;
    }

    if (!bookingId) {
      alert("❌ Booking ID missing!");
      return;
    }

    setLoading(true);

    try {
      // Hit backend to create payment order
      const orderResponse = await paymentAPI.createOrder({
        amount,
        description: "Ghar Cook Service Payment",
        bookingId,
      });

      // Simulating payment success (Replace with Razorpay in live mode)
      setTimeout(() => {
        alert(
          `✅ Payment Successful!\nOrder ID: ${orderResponse.payment.orderId}\nAmount: ₹${amount}`
        );
        setLoading(false);
        window.location.href = "/Profile";
      }, 2000);

    } catch (error) {
      alert(
        "Payment failed: " +
          (error.response?.data?.message || error.message)
      );
      setLoading(false);
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.overlay}>
        <h2 style={styles.title}>Fast & Secure Payment</h2>
        <p style={styles.subtitle}>Pay easily using Razorpay</p>

        <div style={styles.amountContainer}>
          <label style={styles.amountLabel}>Amount (₹):</label>
          <div style={styles.amountDisplay}>₹{amount}</div>
        </div>

        <button
          style={{ ...styles.payBtn, opacity: loading ? 0.6 : 1 }}
          onClick={handlePayment}
          disabled={loading}
        >
          {loading ? "Processing..." : `Pay ₹${amount}`}
        </button>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1563013544-824ae1b704d3')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "70px 20px",
    textAlign: "center",
    borderRadius: "12px",
    height: "420px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  overlay: {
    background: "rgba(0, 0, 0, 0.65)",
    padding: "35px",
    borderRadius: "12px",
    width: "90%",
    maxWidth: "450px",
    color: "white",
  },

  title: {
    fontSize: "30px",
    fontWeight: "700",
    marginBottom: "8px",
  },

  subtitle: {
    fontSize: "17px",
    marginBottom: "22px",
  },

  amountContainer: {
    marginBottom: "20px",
  },

  amountLabel: {
    display: "block",
    fontSize: "16px",
    marginBottom: "6px",
    fontWeight: "500",
  },

  amountDisplay: {
    width: "100%",
    padding: "12px",
    borderRadius: "6px",
    backgroundColor: "#f0f0f0",
    border: "1px solid #ddd",
    fontSize: "17px",
    textAlign: "center",
    fontWeight: "bold",
    color: "#333",
  },

  payBtn: {
    padding: "12px",
    width: "100%",
    background: "#ff7f50",
    border: "none",
    borderRadius: "8px",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "0.3s",
  },
};

export default Payment;
