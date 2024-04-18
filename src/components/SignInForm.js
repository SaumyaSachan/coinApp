import React, { useState } from 'react';
import './SignInForm.css';

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const userId= 'abc@gmail.com';
        const userPassword= '12345';
        if (email ===userId && password ===userPassword) {
            alert(`Signing in with email: ${email} and password: ${password}`);
        } else {
            alert('Please provide email and password');
        }
    }

    return (
        <div className="sign-in-form">
            <h2>Sign in to Coinbase</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text" 
                        id="email" 
                        name="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <button type="submit">Sign In</button>
            </form>
            <div className="forgot-password-privacy-policy">
                <div className="forgot-password">
                    <a href="#">Forgot password?</a>
                </div>
                <div className="privacy-policy">
                    <a href="#">Privacy policy</a>
                </div>
            </div>
        </div>
    );
}

export default SignInForm;
