import React, { useState } from 'react';
import { Navigate, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Register = () => {
    const navigate = useNavigate();
    const { userLoggedIn, register } = useAuth();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [role, setRole] = useState('user');
    const [slots, setSlots] = useState(['']);
    const [isRegistering, setIsRegistering] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
            return;
        }
        if (!isRegistering) {
            setIsRegistering(true);
            setErrorMessage('');
            try {
                const registrationData = { name, email, phone, password, role };
                if (role === 'cook') {
                    registrationData.slots = slots.filter(slot => slot.trim() !== '');
                }
                await register(registrationData);
                navigate('/login'); // Redirect to login after successful registration
            } catch (error) {
                setErrorMessage(error.response?.data?.message || error.message);
                setIsRegistering(false);
            }
        }
    };

    return (
        <>
            {userLoggedIn && <Navigate to={"/home"} replace />}

            {/* ---------- CSS INSIDE SAME FILE ---------- */}
            <style>{`
                body {
                    margin: 0;
                    padding: 0;
                    font-family: Arial, sans-serif;
                    background: linear-gradient(135deg, #c2c5d2ff, #a777e3);
                }

                .reg-container {
                    width: 100%;
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 20px;
                }

                .reg-card {
                    width: 380px;
                    padding: 25px;
                    border-radius: 18px;
                    background: rgba(255, 255, 255, 0.25);
                    border: 1px solid rgba(255, 255, 255, 0.4);
                    backdrop-filter: blur(12px);
                    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
                    text-align: center;
                }

                .reg-title {
                    font-size: 26px;
                    font-weight: 700;
                    color: #fff;
                    margin-bottom: 18px;
                }

                .reg-label {
                    display: block;
                    text-align: left;
                    color: #fff;
                    margin-bottom: 6px;
                    font-weight: bold;
                    font-size: 14px;
                }

                .reg-input {
                    width: 100%;
                    padding: 10px;
                    border-radius: 10px;
                    border: 1px solid #ddd;
                    outline: none;
                    background: rgba(255,255,255,0.6);
                    margin-bottom: 15px;
                    font-size: 14px;
                    transition: 0.3s;
                }

                .reg-input:focus {
                    border-color: #4b6bfb;
                    background: #fff;
                    box-shadow: 0 0 8px rgba(255,255,255,0.4);
                }

                .reg-btn {
                    width: 100%;
                    padding: 12px;
                    border: none;
                    border-radius: 10px;
                    background: #4b6bfb;
                    color: white;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: 0.3s;
                }

                .reg-btn:hover {
                    background: #3c54d4;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                }

                .reg-btn:disabled {
                    background: #bbb;
                    cursor: not-allowed;
                }

                .error-text {
                    color: #ff4d4d;
                    font-weight: bold;
                    font-size: 14px;
                    margin-bottom: 10px;
                }

                .reg-footer {
                    margin-top: 10px;
                    font-size: 14px;
                    color: #fff;
                }

                .reg-footer a {
                    font-weight: bold;
                    text-decoration: underline;
                    color: #fff;
                }
            `}</style>

            {/* ---------- UI HTML ---------- */}
            <main className="reg-container">
                <div className="reg-card">
                    <h3 className="reg-title">Create a New Account</h3>

                    <form onSubmit={onSubmit}>
                        <label className="reg-label">Name</label>
                        <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="reg-input"
                        />

                        <label className="reg-label">Email</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="reg-input"
                        />

                        <label className="reg-label">Phone</label>
                        <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="reg-input"
                        />

                        <label className="reg-label">Role</label>
                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="reg-input"
                        >
                            <option value="user">User</option>
                            <option value="cook">Cook</option>
                        </select>

                        {role === 'cook' && (
                            <>
                                <label className="reg-label">Available Slots (optional)</label>
                                {slots.map((slot, index) => (
                                    <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                        <input
                                            type="text"
                                            placeholder={`Slot ${index + 1} (e.g., 9:00 AM - 11:00 AM)`}
                                            value={slot}
                                            onChange={(e) => {
                                                const newSlots = [...slots];
                                                newSlots[index] = e.target.value;
                                                setSlots(newSlots);
                                            }}
                                            className="reg-input"
                                            style={{ flex: 1, marginRight: '10px' }}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => {
                                                const newSlots = slots.filter((_, i) => i !== index);
                                                setSlots(newSlots.length ? newSlots : ['']);
                                            }}
                                            style={{
                                                padding: '8px 12px',
                                                backgroundColor: '#ff4d4d',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '5px',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={() => setSlots([...slots, ''])}
                                    style={{
                                        padding: '8px 12px',
                                        backgroundColor: '#4b6bfb',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                        marginBottom: '15px',
                                    }}
                                >
                                    Add Slot
                                </button>
                            </>
                        )}

                        <label className="reg-label">Password</label>
                        <input
                            type="password"
                            required
                            disabled={isRegistering}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="reg-input"
                        />

                        <label className="reg-label">Confirm Password</label>
                        <input
                            type="password"
                            required
                            disabled={isRegistering}
                            value={confirmPassword}
                            onChange={(e) => setconfirmPassword(e.target.value)}
                            className="reg-input"
                        />

                        {errorMessage && (
                            <div className="error-text">{errorMessage}</div>
                        )}

                        <button
                            type="submit"
                            disabled={isRegistering}
                            className="reg-btn"
                        >
                            {isRegistering ? "Signing Up..." : "Sign Up"}
                        </button>

                        <p className="reg-footer">
                            Already have an account?{" "}
                            <Link to={"/login"}>Continue</Link>
                        </p>
                    </form>
                </div>
            </main>
        </>
    );
};

export default Register;
