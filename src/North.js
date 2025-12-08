import React from "react";

export default function North() {
  return (
    <div style={styles.page}>
      <div style={styles.overlay}></div>

      <h1 style={styles.title}>North Indian Foods</h1>

      {/* Category Buttons */}
      <div style={styles.filters}>
        <a href="/south" style={styles.btn}>South Indian</a>
        <a href="/chinese" style={styles.btn}>Chinese</a>
        <a href="/vegonly" style={styles.btn}>Veg Only</a>
      </div>

      {/* Food Items */}
      <div style={styles.foodGrid}>
        {foods.map((item) => (
          <div style={styles.card} key={item.name}>
            <img src={item.img} alt={item.name} style={styles.foodImg} />
            <p style={styles.foodName}>{item.name}</p>

            {/* PAY BUTTON */}
            <a href="/Book slot" style={styles.payBtn}>Pay ₹99/hour</a>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Food List */
const foods = [
  {
    name: "Idli Sambar",
    img:"https://th.bing.com/th/id/OIP.pGxWyq4MMU5fO6hNA7UP_AHaE8?w=230&h=180",
  },
  {
    name: "Masala Dosa",
    img: "https://th.bing.com/th/id/OIP.57wfIfqE3IDpxKVbAnyf-wAAAA?w=259&h=180",
  },
  {
    name: "Medu Vada",
    img: "https://th.bing.com/th/id/OIP.dxKQzSiUIcRtnsOKxYq2ZwHaE8?w=218&h=180",
  },
  {
    name: "Vegetable Upma",
    img: "https://th.bing.com/th/id/OIP.U9i-J5PnUwJswArJV3EmPQHaFj?w=281&h=211",
  },
  {
    name: "Pongal",
    img: "https://th.bing.com/th/id/OIP.N9AWP7bKAkHVzGHIg-UlJAAAAA?w=231&h=180",
  },
  {
    name: "Uttapam",
    img: "https://th.bing.com/th/id/OIP.rB-llOLI6lelgEq9VgCaGAHaF4?w=203&h=180",
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
    padding: "15px",
    borderRadius: "15px",
    backdropFilter: "blur(6px)",
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

  payBtn: {
    marginTop: "10px",
    display: "inline-block",
    padding: "10px 20px",
    background: "rgba(255,255,255,0.2)",  
    borderRadius: "20px",
    border: "1px solid white",          
    color: "white",
    fontSize: "15px",
    fontWeight: "700",
    textDecoration: "none",
    backdropFilter: "blur(8px)",          
    cursor: "pointer",
  },
};
