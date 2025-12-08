import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./login.css";

const Login = () => {
  const { userLoggedIn, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      setErrorMessage("");

      try {
        await login(email, password);
        setEmail("");
        setPassword("");
        // Redirect will happen due to Navigate component

      } catch (error) {
        setErrorMessage(error.response?.data?.message || error.message);
        setIsSigningIn(false);
      }
    }
  };

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    // For now, disable Google sign in since we're using backend auth
    setErrorMessage("Google sign in not implemented yet");
  };

  return (
    <div>
      {userLoggedIn && <Navigate to="/home" replace />}

      <main className="login-main">
        <div className="login-card">
          <div className="login-header">
            <h3>Welcome Back</h3>
            <p>Login to continue</p>
          </div>

          <form onSubmit={onSubmit} className="login-form">
            
            {/* Email */}
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password with Show/Hide */}
            <div className="input-group">
              <label>Password</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="toggle-eye"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁️"}
                </span>
              </div>
            </div>

            {errorMessage && <p className="error-text">{errorMessage}</p>}

            <button type="submit" disabled={isSigningIn} className="btn-primary">
              {isSigningIn ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <p className="signup-text">
            Don't have an account? <Link to="/register">Sign up</Link>
          </p>

          <div className="divider">
            <span>OR</span>
          </div>

          <button
            className="google-btn"
            onClick={onGoogleSignIn}
            disabled={isSigningIn}
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Google_%22G%22_Logo.svg" alt="" />
            {isSigningIn ? "Signing In..." : "Continue with Google"}
          </button>

        </div>
      </main>
    </div>
  );
};

export default Login;
