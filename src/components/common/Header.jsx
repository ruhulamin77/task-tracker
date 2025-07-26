import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import { logout } from '../../features/auth/authSlice';

export default function Header() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  console.log(token);
  const handleLogout = () => {
    dispatch(logout());
    toast.success('User logged out!');
  };

  return (
    <div className="header-container">
      <div className="header">
        <Link to="/" className="logo">
          Task Tracker
        </Link>
        {token ? (
          <div>
            <span className="user-email">{token?.email}</span>
            <button onClick={() => handleLogout()} className="logout-btn">
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
}
