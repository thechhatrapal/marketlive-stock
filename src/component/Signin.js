import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import ErrorMessage from "./ErrorMessage";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/signin`, {
        email,
        password,
      });
      if (user) {
        let users = JSON.stringify(user);
        localStorage.setItem("user", users);
        navigate("/user");
      }
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <>
      {error && <ErrorMessage setError={setError} error={error}/>}
      <div className="signin-container">
        <form className="signin-form" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold">{`Sign In as ${isAdmin ? 'Admin': 'User'}`}</h2>
          <div className="form-group">
            <label htmlFor="email" className="font-bold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="font-bold">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "10px",
              textAlign: "center",
            }}
            type="submit"
          >
            Sign In
          </button>
          <p>
            <Link
              className="font-bold cursor-pointer hover:underline"
              type="button"
              to="/forget"
            >
              Forget Password
            </Link>
          </p>
          <p>
            Don't have an account?{" "}
            <Link className="font-bold cursor-pointer" to="/register">
              Register
            </Link>
          </p>
          <p>
            or Sign in as ?{" "}
            <Link className="font-bold cursor-pointer" onClick={() => setIsAdmin(true)}>
              {!isAdmin ? 'Admin': 'User'}
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignIn;
