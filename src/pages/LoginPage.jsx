import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router';
import { login } from '../features/auth/authSlice';
import { FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector((state) => state.auth.token);
  // if already has token redirect to home
  if (token) return <Navigate to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      dispatch(login(email));
      toast.success('Login successful!');
      navigate('/');
    } else {
      toast.error('Email is required!');
    }
  };

  return (
    <div className="login-form">
      <h2>
        <FaUser /> Login
      </h2>
      <div className="login-photo">
        <img src="/login.png" alt="" />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
