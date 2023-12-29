/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from '../assets/logo.svg'

function Navbar() {
  const navigate = useNavigate();
  const [isSignined, setIsignedIn] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsignedIn(true);
      navigate('/user')
    } else {
      navigate("/");
    }
  }, []);

  const handleClick = (e) => {
    if (isSignined) {
      localStorage.removeItem("user");
      navigate("/");
    } else {
      navigate("/signin");
    }
  };

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand">
           <img src={Logo} width="80" height="40" alt />
          </a>
          <form className="d-flex">
            <input
              className="form-control me-2 search-box"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-primary"
              type="submit"
              onClick={handleClick}
            >
              {isSignined ? "logout" : "Login"}
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
