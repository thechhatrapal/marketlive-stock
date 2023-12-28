/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import "./Login.css";
import ImageRight from "../assets/image-right.png";
import LogoSvg from "../assets/logo.svg";
import { useNavigate, Link } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import {Credential} from './admin/AdminCredentials'

function AdminSignin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(Credential.email === email && Credential.password === password) {
        localStorage.setItem('ml', JSON.stringify(Credential.token)) 
        navigate('/admin')
    }
    else {
        setError('invalid credentials')
    }
  };

  return (
    <>
      {error && <ErrorMessage setError={setError} error={error} />}
      <div className="form-body">
        <div className="container form-wrapper mx-4">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 d-none d-md-block text-center px-0">
              <img
                src={ImageRight}
                alt="Sign Up Image"
                className="singup-img w-100"
              />
            </div>
            <div className="col-md-6 bg-white py-4 text-center form-detail">
              <img src={LogoSvg} alt="Logo" className="form-logo mb-4" />
              <h5 className="text-center text-uppercase fw-700 mb-4">Login</h5>
              <p className="text-muted fs-14">Enter details to start journey</p>
              <form className="form">
                <div className="form-group">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    className="focus-ring focus-ring-light form-control form-input mb-3"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    className="focus-ring focus-ring-light form-control form-input mb-3"
                    id="exampleInputPassword1"
                    placeholder="Password0"
                  />
                </div>
                <p onClick={() => navigate('/signin')}>sign in as <span className="font-bold">User</span></p>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="btn btn-primary signup-btn"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminSignin;
