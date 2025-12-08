import React from "react";

export default function Vegonly() {
  return (
    <div style={styles.page}>
      <div style={styles.overlay}></div>

      <h1 style={styles.title}>North Indian Foods</h1>

      {/* Category Buttons as <a> */}
      <div style={styles.filters}>
        <a href="/south" style={styles.btn}>South Indian</a>
        <a href="/chinese" style={styles.btn}>Chinese</a>
      </div>

      {/* Food Items */}
      <div style={styles.foodGrid}>
        {foods.map((item) => (
          <a href="/Book slot" style={styles.card} key={item.name}>
            <img src={item.img} alt={item.name} style={styles.foodImg} />
            <p style={styles.foodName}>{item.name}</p>

            {/* 🔥 Added Button Here */}
            <p style={styles.priceBtn}>₹99 / hour</p>
          </a>
        ))}
      </div>
    </div>
  );
}

/* ---------- Pure Veg North Indian Food Images ---------- */
const foods = [
  {
    name: "Paneer Butter Masala",
    img: "https://th.bing.com/th/id/OIP.m9mslyKem-pJL7W334gz-QHaE7?w=237&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    name: "Chole Bhature",
    img: "https://th.bing.com/th/id/OIP.VGfL__jXLLrL0BnDW4kZAQHaDF?w=329&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    name: "Dal Makhani",
    img: "https://th.bing.com/th/id/OIP.3T6sRNzFizQwVp49s1imrQHaHa?w=188&h=188&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    name: "Aloo Paratha",
    img: "https://th.bing.com/th/id/OIP.KApnYpfROGSXwcKzLlZVSgHaFF?w=254&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    name: "Veg Biryani",
    img: "https://th.bing.com/th/id/OIP.RmgwVuDMCFvZgSdnDly-cAHaEs?w=314&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    name: "Shahi Paneer",
    img: "https://th.bing.com/th/id/OIP.U6MXUIhuVVVi2l5UhpA1zQHaFW?w=210&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
];

/* ---------- Styles ---------- */
const styles = {
  page: {
    minHeight: "100vh",
    padding: "20px",
    position: "relative",
    backgroundImage:
      "url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg')",
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
    textDecoration: "none",
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

  /* ⭐ NEW BUTTON STYLE */
  priceBtn: {
    marginTop: "8px",
    background: "#c7bbb7ff",
    color: "white",
    padding: "6px 12px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "600",
    display: "inline-block",
  },
};

