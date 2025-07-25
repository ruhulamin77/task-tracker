import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/auth/authSlice';
import { Link } from 'react-router';

export default function Header() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  return (
    <div className="header">
      <Link to="/" className="logo">
        Task Tracker
      </Link>
      {token ? (
        <button onClick={() => dispatch(logout())} className="logout-btn">
          Logout
        </button>
      ) : (
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
      )}
    </div>
  );
}
