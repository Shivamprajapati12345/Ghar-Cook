import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Navbar from './Navbar';
import Find from './Find';
import Book from './Book slot';
import Pricing from './Pricing';
import About from './About';
import Contact from './Contact';
import CookRegister from './CookRegister';
import RazorpaySection from './Rezorpay';
import North from './North';
import Footer from './Footer';
import South from './South';
import Chinese from './Chinese';
import VegOnly from './Vegonly';
import Cart from './Cart';
import Login from './Auth/login/login';
import Register from './Auth/Register';
import Home from './HomePage';
import Profile from './Profile';
import Learn from './Learn';
import Payment from './Payment';

function PrivateRoute({ children }) {
  const { userLoggedIn } = useAuth();
  return userLoggedIn ? children : <Navigate to="/login" replace />;
}

function AppContent() {
  const { userLoggedIn, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={userLoggedIn ? <Navigate to="/Homepage" replace /> : <Navigate to="/login" replace />} />
        <Route path="/Homepage" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/Find" element={<PrivateRoute><Find /></PrivateRoute>} />
        <Route path="/Book slot" element={<PrivateRoute><Book /></PrivateRoute>} />
        <Route path="/Pricing" element={<PrivateRoute><Pricing /></PrivateRoute>} />
        <Route path="/About" element={<PrivateRoute><About /></PrivateRoute>} />
        <Route path="/Contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
        <Route path="/Profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/CookRegister" element={<PrivateRoute><CookRegister /></PrivateRoute>} />
        <Route path="/Resorpay" element={<PrivateRoute><RazorpaySection /></PrivateRoute>} />
        <Route path="/North" element={<PrivateRoute><North /></PrivateRoute>} />
        <Route path="/South" element={<PrivateRoute><South /></PrivateRoute>} />
        <Route path="/Chinese" element={<PrivateRoute><Chinese /></PrivateRoute>} />
        <Route path="/Vegonly" element={<PrivateRoute><VegOnly /></PrivateRoute>} />
        <Route path="/Cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
        <Route path="/Learn" element={<PrivateRoute><Learn /></PrivateRoute>} />
        <Route path="/Payment" element={<PrivateRoute><Payment /></PrivateRoute>} />
        <Route path="/login" element={userLoggedIn ? <Navigate to="/Homepage" replace /> : <Login />} />
        <Route path="/register" element={userLoggedIn ? <Navigate to="/login" replace /> : <Register />} />
      </Routes>
      {userLoggedIn && <Footer />}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
