import React from "react";

export default function Chinese() {
  const handleClick = (name) => {
    window.location.href = "/Book slot"; // your payment redirect
  };

  return (
    <div style={styles.page}>
      <div style={styles.overlay}></div>

      <h1 style={styles.title}>Chinese Foods</h1>

      {/* Category Links */}
      <div style={styles.filters}>
        <a href="/north" style={styles.btn}>North Indian</a>
        <a href="/south" style={styles.btn}>South Indian</a>
        <a href="/vegonly" style={styles.btn}>Veg Only</a>
      </div>

      {/* Items */}
      <div style={styles.foodGrid}>
        {foods.map((item) => (
          <div
            style={styles.card}
            key={item.name}
            onClick={() => handleClick(item.name)}
          >
            <img src={item.img} alt={item.name} style={styles.foodImg} />
            <p style={styles.foodName}>{item.name}</p>

            {/* ⭐ SAME BUTTON ADDED HERE */}
            <p style={styles.priceBtn}>₹99 / hour</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Chinese Foods ---------- */
const foods = [
  {
    name: "Hakka Noodles",
    img: "https://th.bing.com/th/id/OIP.a_C9v1H7RBbVyFjU4udThgHaKX?w=128&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    name: "Veg Manchurian",
    img: "https://th.bing.com/th/id/OIP.cl_w7nt7KCT_xiWW5odiogHaFW?w=246&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    name: "Spring Rolls",
    img: "https://th.bing.com/th/id/OIP.jLG1CMGiMHGM617egzD5OgHaEo?w=227&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    name: "Fried Rice",
    img: "https://th.bing.com/th/id/OIP.m9mslyKem-pJL7W334gz-QHaE7?w=237&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    name: "Chilli Paneer",
    img: "https://th.bing.com/th/id/OIP.VKwOQ7TD4NyD88vE3L8sMwHaIi?w=137&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    name: "Schezwan Noodles",
    img: "https://th.bing.com/th/id/OIP.q67sjCxxLskNET1Zz-PPrgHaK3?w=115&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
];

/* ---------- Styles ---------- */
const styles = {
  page: {
    minHeight: "100vh",
    padding: "20px",
    position: "relative",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.6)",
  },

  title: {
    textAlign: "center",
    color: "white",
    fontSize: "40px",
    fontWeight: "800",
    marginTop: "100px",
    position: "relative",
    zIndex: 2,
  },

  filters: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    flexWrap: "wrap",
    position: "relative",
    zIndex: 2,
  },

  btn: {
    padding: "10px 20px",
    borderRadius: "20px",
    border: "1px solid white",
    background: "rgba(255,255,255,0.2)",
    color: "white",
    fontSize: "15px",
    cursor: "pointer",
    backdropFilter: "blur(8px)",
    textDecoration: "none",
  },

  foodGrid: {
    position: "relative",
    zIndex: 2,
    marginTop: "30px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "50px",
    padding: "40px",
  },

  card: {
    background: "rgba(255,255,255,0.15)",
    padding: "10px",
    borderRadius: "15px",
    backdropFilter: "blur(6px)",
    cursor: "pointer",
    textAlign: "center",
  },

  foodImg: {
    width: "100%",
    height: "130px",
    borderRadius: "10px",
    objectFit: "cover",
  },

  foodName: {
    marginTop: "10px",
    color: "white",
    fontSize: "17px",
    fontWeight: "600",
  },

  /* ⭐ NEW BUTTON STYLE SAME AS OTHER PAGE */
  priceBtn: {
    marginTop: "8px",
    background: "#a0a0a0ff",
    color: "white",
    padding: "6px 12px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "600",
    display: "inline-block",
  },
};
