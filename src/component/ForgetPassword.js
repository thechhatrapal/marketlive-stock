import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ErrorMessage from "./ErrorMessage";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [isUser, setIsUser] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
      e.preventDefault();
    if (isUser) {
      try {
        const user = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/auth/setNewPassword`,
          {
            email,
            password
          }
        );
        if (user) {
            navigate('/signin')
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const user = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/verifyuser`, {
          email,
        });
        if (user) {
          setIsUser(true);
        }
      } catch (err) {
        console.log(err);
        setError('Invalid Email Or No Connection')
      }
    }
  };

  return (
    <>
    {error && <ErrorMessage setError={setError} error={error}/>}
    <div className="signin-container">
      <form className="signin-form">
        {!isUser && <h2 className="text-2xl font-bold">verify your email</h2>}
        <div className="form-group">
          <>
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
          </>
          {isUser && (
            <>
              <label htmlFor="email" className="font-bold">
                Enter new password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </>
          )}
        </div>
        <button
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "10px",
            textAlign: "center",
          }}
          onClick={handleSubmit}
        >
          submit
        </button>
      </form>
    </div>
    </>
  );
}

export default ForgetPassword;
