import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/general/notfound.css';

function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 5000);
  }, [navigate]);

  return (
    <div className="overlay">
      <div className="quoteContainer">
        <h1>Page Not Found</h1>
        <p>Redirecting...</p>
      </div>
    </div>
  );
}

export default NotFound;
