import React, { useState } from 'react';
import { useRouter } from 'next/router';
import LoginForm from '../components/LoginForm';

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleLogin = async (username: string, password: string) => {
    try {
      const response = await fetch('http://localhost:3000/login', {  // Full URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Login failed:', errorText);
        setError('Login failed. Please try again.');
        return;
      }

      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        console.error('Failed to parse JSON:', jsonError);
        setError('An error occurred. Please try again.');
        return;
      }

      console.log('Login response:', data); // Debug log

      if (data.success) {
        localStorage.setItem('user', JSON.stringify(data.user)); // Store user info
        router.push('/dashboard'); // Redirect to dashboard after successful login
      } else {
        console.error('Login failed:', data.message); // Log error message
        setError(data.message);
      }
    } catch (error) {
      console.error('Login error:', error); // Log error
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p className="mt-2 text-sm text-gray-600">
            Please sign in to your account
          </p>
        </div>
        {error && <p className="error-message">{error}</p>}
        <LoginForm onLogin={handleLogin} />
        <a href="/forgot-password" className="forgot-password">
          Forgot your password?
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
