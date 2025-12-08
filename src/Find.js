import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { cookAPI } from "./api/cook";

function Find() {
  const [cooks, setCooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const initialSearch =
      params.get("search") ||
      params.get("city") ||
      params.get("address") ||
      params.get("type") ||
      "";

    if (initialSearch) {
      setSearchTerm(initialSearch);
      fetchCooks(initialSearch);
    } else {
      fetchCooks();
    }
  }, [location.search]);

  const fetchCooks = async (search = "") => {
    try {
      setLoading(true);
      const response = await cookAPI.getCooks(search);
      setCooks(response.cooks || []);
      setError(null);
    } catch (err) {
      setError("Failed to load cooks. Please try again.");
      console.error("Error fetching cooks:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchCooks(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <>
      <style>{`
        .find-hero {
          height: 75vh;
          width: 100%;
          background-image: url("https://images.pexels.com/photos/4252138/pexels-photo-4252138.jpeg");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.55);
        }

        .hero-content {
          position: relative;
          text-align: center;
          color: white;
          width: 90%;
        }

        .hero-title {
          font-size: 3.2rem;
          font-weight: 800;
          margin-bottom: 15px;
          letter-spacing: 1px;
        }

        .search-area {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          gap: 12px;
        }

        .search-area input {
          width: 360px;
          padding: 13px;
          border-radius: 12px;
          border: none;
          font-size: 17px;
          outline: none;
        }

        .search-area button {
          padding: 12px 22px;
          background: #00cec9;
          color: white;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          font-size: 17px;
        }

        .search-area button:hover {
          background: #009999;
        }

        .filters {
          margin-top: 25px;
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .filters a {
          padding: 8px 18px;
          background: rgba(255,255,255,0.25);
          border: 1px solid white;
          border-radius: 20px;
          color: white;
          font-size: 15px;
          backdrop-filter: blur(5px);
          cursor: pointer;
          text-decoration: none;
        }

        .filters a:hover {
          background: white;
          color: black;
        }

        .grid {
          padding: 40px 25px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 25px;
        }

        .card {
          background: rgba(255,255,255,0.8);
          backdrop-filter: blur(10px);
          border-radius: 18px;
          padding: 18px;
          text-align: center;
          box-shadow: 0px 10px 25px rgba(0,0,0,0.15);
          transition: 0.3s;
        }

        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0px 14px 35px rgba(0,0,0,0.25);
        }

        .cook-img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 15px;
          margin-bottom: 10px;
        }

        .speciality {
          color: #555;
          font-size: 14px;
        }

        .info {
          margin-top: 8px;
          display: flex;
          justify-content: space-between;
          padding: 0 10px;
          font-weight: 600;
        }

        .price {
          color: #00b894;
        }

        .rating {
          color: #fdcb6e;
        }

        .hire-btn {
          text-decoration: none;
          margin-top: 12px;
          width: 50%;
          padding: 10px 30px;
          background: #0984e3;
          border: none;
          color: white;
          border-radius: 10px;
          cursor: pointer;
          transition: 0.3s;
          display: inline-block;
        }

        .hire-btn:hover {
          background: #74b9ff;
        }

        @media (max-width: 600px) {
          .hero-title {
            font-size: 2.2rem;
          }
          .search-area {
            flex-direction: column;
            align-items: center;
          }
          .search-area input {
            width: 90%;
          }
        }
      `}</style>

      {/* HERO SECTION */}
      <div className="find-hero">
        <div className="overlay"></div>

        <div className="hero-content">
          <h1 className="hero-title">Find Your Perfect Home Cook</h1>

          <div className="search-area">
            <input
              type="text"
              placeholder="Search by dish, cook or city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button onClick={handleSearch}>Search</button>
          </div>

          <div className="filters">
            <a href="/">All</a>
            <a href="/North">North Indian</a>
            <a href="/South">South Indian</a>
            <a href="/Chinese">Chinese</a>
            <a href="/Vegonly">Veg Only</a>
          </div>
        </div>
      </div>

      {/* COOK CARDS */}
      <div className="grid">

        {/* Cook 1 */}
        <div className="card">
          <img
            src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000"
            className="cook-img"
          />
          <h2>Ramesh Kumar</h2>
          <p className="speciality">North Indian Specialist</p>

          <div className="info">
            <span className="price">₹250 / day</span>
            <span className="rating">⭐ 4.5</span>
          </div>

          <a href="/Book slot" className="hire-btn">Hire Now</a>
        </div>

        {/* Cook 2 */}
        <div className="card">
          <img
            src="https://th.bing.com/th/id/OIP.y1pjbcFd6USd9jsE3tzWGwHaGG?w=231&h=191&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.3&pid=1.7&rm=3"
            className="cook-img"
          />
          <h2>Savitri Devi</h2>
          <p className="speciality">South Indian, Veg Only</p>

          <div className="info">
            <span className="price">₹300 / day</span>
            <span className="rating">⭐ 4.7</span>
          </div>

          <a href="/Book slot" className="hire-btn">Hire Now</a>
        </div>

        {/* Cook 3 */}
        <div className="card">
          <img
            src="https://th.bing.com/th/id/OIP.-K0TDcKR8N6mVCQpE8L6tQHaFw?w=258&h=201&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.3&pid=1.7&rm=3"
            className="cook-img"
          />
          <h2>Anjali Sharma</h2>
          <p className="speciality">Chinese & Fast Food</p>

          <div className="info">
            <span className="price">₹280 / day</span>
            <span className="rating">⭐ 4.6</span>
          </div>

          <a href="/Book slot" className="hire-btn">Hire Now</a>
        </div>

        {/* Cook 4 */}
        <div className="card">
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.gKph-mvj5P52lOWlX8IVPAHaHa?cb=ucfimgc2&pid=ImgDet&w=184&h=184&c=7&dpr=1.3&o=7&rm=3"
            className="cook-img"
          />
          <h2>Rohit Verma</h2>
          <p className="speciality">Multi-Cuisine Home Chef</p>

          <div className="info">
            <span className="price">₹350 / day</span>
            <span className="rating">⭐ 4.8</span>
          </div>

          <a href="/Book slot" className="hire-btn">Hire Now</a>
        </div>

      </div>
    </>
  );
}

export default Find;
