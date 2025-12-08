import React, { useState, useEffect } from "react";
import { bookingAPI } from "./api/booking";
import { cookAPI } from "./api/cook";

function Book() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    hour: "",
    minute: "",
    ampm: "",
    cookId: "",
  });
  const [loading, setLoading] = useState(false);
  const [cooks, setCooks] = useState([]);
  const [cooksLoading, setCooksLoading] = useState(true);

  useEffect(() => {
    fetchCooks();
  }, []);

  const fetchCooks = async () => {
    try {
      const response = await cookAPI.getCooks();
      setCooks(response.cooks);
    } catch (error) {
      console.error("Error fetching cooks:", error);
    } finally {
      setCooksLoading(false);
    }
  };

  const handleBookClick = async (e) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.date.trim() ||
      !form.hour ||
      !form.minute ||
      !form.ampm ||
      !form.cookId
    ) {
      alert("Please fill all fields before booking!");
      return;
    }

    if (!localStorage.getItem("token")) {
      alert("Please login first");
      return;
    }

    setLoading(true);
    try {
      const time = `${form.hour}:${form.minute} ${form.ampm}`;
      const bookingResponse = await bookingAPI.createBooking({
        name: form.name,
        email: form.email,
        date: form.date,
        time,
        cookId: form.cookId,
      });

      // Redirect to payment with bookingId
      window.location.href = `/Resorpay?bookingId=${bookingResponse.booking._id}`;
    } catch (error) {
      alert("Booking failed: " + (error.response?.data?.message || error.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.overlay}></div>

      <div style={styles.container}>
        <h1 style={styles.title}>Book Your Slot</h1>
        <p style={styles.subtitle}>Choose your date and time</p>

        <input
          type="text"
          placeholder="Full Name"
          style={styles.input}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email Address"
          style={styles.input}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <select
          style={styles.input}
          onChange={(e) => setForm({ ...form, cookId: e.target.value })}
          disabled={cooksLoading}
        >
          <option value="">
            {cooksLoading ? "Loading cooks..." : "Select a Cook"}
          </option>
          {cooks.map((cook) => (
            <option key={cook._id} value={cook._id}>
              {cook.name} - {cook.email}
            </option>
          ))}
        </select>

        <input
          type="date"
          style={styles.input}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />

        {/* TIME SELECT (HOUR - MINUTE - AM/PM) */}
        <div style={{ display: "flex", gap: "8px" }}>
          <select
            style={styles.input}
            onChange={(e) => setForm({ ...form, hour: e.target.value })}
          >
            <option value="">Hour</option>
            {[...Array(12)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>

          <select
            style={styles.input}
            onChange={(e) => setForm({ ...form, minute: e.target.value })}
          >
            <option value="">Minute</option>
            {["00", "15", "30", "45"].map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>

          <select
            style={styles.input}
            onChange={(e) => setForm({ ...form, ampm: e.target.value })}
          >
            <option value="">AM/PM</option>
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>

        {/* BOOK BUTTON */}
        <button
          onClick={handleBookClick}
          disabled={loading}
          style={{
            ...styles.button,
            opacity: loading ? 0.6 : 1,
          }}
        >
          {loading ? "Booking..." : "Book Slot"}
        </button>

        <h2 style={styles.sectionHeading}>Contact Us</h2>

        <div style={styles.contactBox}>
          <p>📞 +91 9876543210</p>
          <p>✉️ support@homecook.com</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    width: "100%",
    margin: 0,
    padding: 0,
    fontFamily: "Arial, sans-serif",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1506765515384-028b60a970df')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    overflow: "hidden",
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
    width: "350px",
    margin: "auto",
    marginTop: "60px",
    padding: "30px",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(10px)",
    color: "white",
    textAlign: "center",
  },

  title: {
    fontSize: "30px",
    marginBottom: "10px",
  },

  subtitle: {
    marginBottom: "20px",
  },

  input: {
    width: "100%",
    padding: "12px",
    margin: "8px 0",
    borderRadius: "10px",
    border: "none",
    fontSize: "16px",
  },

  button: {
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    background: "#ffbd59",
    border: "none",
    borderRadius: "10px",
    fontSize: "18px",
    cursor: "pointer",
    fontWeight: "bold",
    color: "black",
  },

  sectionHeading: {
    marginTop: "25px",
    marginBottom: "10px",
  },

  contactBox: {
    background: "rgba(255,255,255,0.2)",
    padding: "15px",
    borderRadius: "12px",
  },
};

export default Book;
