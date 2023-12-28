/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import ImageRight from "../assets/image-right.png";
import LogoSvg from "../assets/logo.svg";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import ErrorMessage from "./ErrorMessage";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const user = await axios.post('http://localhost:5000/auth/signup', {name, email, password})
        if(user) {
          let users = JSON.stringify(user);
          localStorage.setItem("user", users);
          navigate('/user')
        }
      }
      catch(err) {
        console.log(err)
        setError(err.response.data.error);
      }
  };

  return (
    <>
    {error && <ErrorMessage setError={setError} error={error}/>}
    <div className="form-body">
      <div class="container form-wrapper mx-4">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-6 d-none d-md-block text-center px-0">
            <img
              src={ImageRight}
              alt="Sign Up Image"
              class="singup-img w-100"
            />
          </div>
          <div class="col-md-6 py-4 text-center form-detail">
            <img src={LogoSvg} alt="Logo" class="form-logo mb-4" />
            <h5 class="text-center text-uppercase fw-700 mb-4">Sign Up</h5>
            <p class="text-muted fs-14">Enter details to start journey</p>
            <form class="form">
              <div class="form-group">
                <input
                  type="text"
                  class="focus-ring focus-ring-light form-control form-input mb-3"
                  id="username"
                  aria-describedby="username"
                  placeholder="Enter username"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div class="form-group">
                <input
                  type="email"
                  class="focus-ring focus-ring-light form-control form-input mb-3"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="focus-ring focus-ring-light form-control form-input mb-3"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <p class="fs-14 text-muted">
                Already have account please <Link  className="font-bold" to="/signin">Login</Link>
              </p>
              <button type="submit" class="btn btn-primary signup-btn" onClick={handleSubmit}>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>

  );
}

export default Register;
