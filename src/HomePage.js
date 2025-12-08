import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [city, setCity] = useState("");          // city dropdown value
  const [address, setAddress] = useState("");    // user typed address
  const [cookType, setCookType] = useState("Cook"); // cook type dropdown value

  const navigate = useNavigate();

  const styles = {
    container: {
      width: "100%",
      fontFamily: "Poppins, sans-serif",
    },

    hero: {
      height: "70vh",
      backgroundImage:
        "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "white",
      textAlign: "center",
      paddingTop: "120px",
      position: "relative",
    },

    heroOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.45)",
    },

    heroHeading: {
      fontSize: "48px",
      fontWeight: 700,
      position: "relative",
      zIndex: 2,
    },

    heroText: {
      fontSize: "20px",
      marginTop: "10px",
      position: "relative",
      zIndex: 2,
    },

    searchBox: {
      marginTop: "25px",
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      position: "relative",
      zIndex: 2,
      flexWrap: "wrap",
    },

    input: {
      padding: "12px 15px",
      width: "250px",
      fontSize: "16px",
      borderRadius: "8px",
      border: "none",
      outline: "none",
    },

    select: {
      padding: "12px 15px",
      width: "250px",
      fontSize: "16px",
      borderRadius: "8px",
      border: "none",
      outline: "none",
    },

    searchBtn: {
      padding: "12px 25px",
      fontSize: "16px",
      background: "#27ae60",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "0.3s",
    },

    searchBtnHover: {
      background: "#229954",
    },

    sectionTitle: {
      fontSize: "28px",
      margin: "40px 0 20px 30px",
      fontWeight: 600,
    },

    chefList: {
      display: "flex",
      justifyContent: "center",
      gap: "30px",
      flexWrap: "wrap",
      paddingBottom: "50px",
    },

    chefCard: {
      width: "280px",
      background: "white",
      padding: "15px",
      borderRadius: "14px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      textAlign: "center",
      transition: "0.4s",
    },

    chefImg: {
      width: "100%",
      height: "180px",
      borderRadius: "14px",
      objectFit: "cover",
    },

    chefName: {
      margin: "12px 0 5px",
      fontSize: "20px",
      fontWeight: 600,
    },

    experience: {
      color: "#666",
      fontSize: "14px",
    },

    price: {
      marginTop: "8px",
      fontSize: "18px",
      fontWeight: "bold",
      color: "#27ae60",
    },

    hireBtn: {
      textDecoration: "none",
      marginTop: "10px",
      width: "100%",
      padding: "10px 40px",
      fontSize: "16px",
      background: "#27ae60",
      color: "white",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      transition: "0.3s",
    },
  };

  const handleSearch = () => {
    // Navigate to Find page with search parameters
    const searchParams = new URLSearchParams();
    if (city) searchParams.set('city', city);
    if (address) searchParams.set('address', address);
    if (cookType && cookType !== 'Cook') searchParams.set('type', cookType);

    navigate(`/Find?${searchParams.toString()}`);
  };

  return (
    <div style={styles.container}>
      
      <div style={styles.hero}>
        <div style={styles.heroOverlay}></div>

        <h1 style={styles.heroHeading}>Find Trusted Home Cooks Near You</h1>
        <p style={styles.heroText}>
          Book verified home cooks as per your time, taste & budget.
        </p>

        <div style={styles.searchBox}>

          {/* ✅ Correct City Dropdown */}
          <select
            style={styles.select}
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          >
            <option value="">Select City</option>
            <option value="Kandivali">Kandivali</option>
            <option value="Borivali">Borivali</option>
            <option value="Malad">Malad</option>
            <option value="Goregaon">Goregaon</option>
            <option value="Andheri">Andheri</option>
          </select>

          {/* ✅ Address Input (User can type own address) */}
          <input
            style={styles.input}
            type="text"
            placeholder="Enter exact address..."
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />

          {/* Existing Dropdown */}
          <select
            style={styles.select}
            value={cookType}
            onChange={(e) => setCookType(e.target.value)}
          >
            <option>Cook</option>
            <option>Chef</option>
            <option>Bakery Specialist</option>
            <option>Meal Prep Expert</option>
          </select>

          <button style={styles.searchBtn} onClick={handleSearch}>Search</button>
        </div>
      </div>

      {/* ---------------- CHEF LIST SECTION ---------------- */}
      <h2 style={styles.sectionTitle}>Available Home Cooks</h2>

      <div style={styles.chefList}>
        
        <div style={styles.chefCard}>
          <img
            style={styles.chefImg}
            src="https://th.bing.com/th/id/OIP.N9AWP7bKAkHVzGHIg-UlJAAAAA?w=224&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
            alt="chef"
          />
          <h3 style={styles.chefName}>Rohit Sharma</h3>
          <p style={styles.experience}>5+ Years Experience</p>
          <p style={styles.price}>₹250 / hour</p>
          <a href="/Book slot" style={styles.hireBtn}>
            Hire Now
          </a>
        </div>

        <div style={styles.chefCard}>
          <img
            style={styles.chefImg}
            src="https://th.bing.com/th/id/OIP.DAx7O3gE6LNr2HIAnoU8CQHaE8?w=288&h=192&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
            alt="chef"
          />
          <h3 style={styles.chefName}>Anjali Tiwari</h3>
          <p style={styles.experience}>7+ Years Experience</p>
          <p style={styles.price}>₹300 / hour</p>
          <a href="/Book slot" style={styles.hireBtn}>
            Hire Now
          </a>
        </div>

        <div style={styles.chefCard}>
          <img
            style={styles.chefImg}
            src="https://th.bing.com/th/id/OIP.d30ux4pAlTTpYfmaMZBCcQHaEK?w=286&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
            alt="chef"
          />
          <h3 style={styles.chefName}>Deepak Verma</h3>
          <p style={styles.experience}>4+ Years Experience</p>
          <p style={styles.price}>₹200 / hour</p>
          <a href="/Book slot" style={styles.hireBtn}>
            Hire Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
