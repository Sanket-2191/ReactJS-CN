// import hook here
import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'

export const NotFound = () => {
  // create back funtion here

  const navigate = useNavigate();

  useEffect(() => {

    const redirect = async () => {
      const timer = setTimeout(() => navigate(-1), 8000);
      return () => clearTimeout(timer);
    }


    redirect();


  }, [])

  return (
    <div className="not-found page">
      <h3>Page not found.</h3>
      <img
        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
        alt="not found"
      />

      <NavLink to='/'>  <button > Back to Home </button> </NavLink>
    </div>
  );
};
