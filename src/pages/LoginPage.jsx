import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { login } from '../features/auth/authSlice';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector((state) => state.auth.token);
  // if already has token redirect to home
  if (token) return <Navigate to="/" />;

  // handle user login
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
          id="email"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="test-email">
          Test email: <span>test@gmail.com</span>
        </p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
