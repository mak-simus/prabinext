import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/LoginForm';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = (username: string, password: string) => {
    if (username === 'admin' && password === 'password') {
      navigate('/dashboard'); // Only redirect to dashboard after successful login
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      {error && <p className="error">{error}</p>}
      <LoginForm onLogin={handleLogin} />
      <a href="/forgot-password">Forgot Password?</a>
    </div>
  );
};

export default LoginPage;
