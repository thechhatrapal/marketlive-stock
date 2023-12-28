import React, { useState } from "react";
import axios from "axios";
import NavbarPage from "../../pages/NavbarPage";
import {useNavigate} from 'react-router-dom';

function AuthGenerate() {
  const [authUrl, setAuthUrl] = useState();
  const [auth, setAuth] = useState('');

  const Navigate = useNavigate();
  const handleAuthGenerate = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:5000/token/authgenerateurl")
      .then((res) => setAuthUrl(res.data))
      .catch((err) => console.log(err));
  };

  const handleSaveAuthCode = (e) => {
    e.preventDefault()
    axios
    .post("http://localhost:5000/save/auth-code", {authCode : auth})
    .then((res) => {
      axios.get('http://localhost:5000/token/getrefreshtoken').then(res => console.log(res))
      alert('successfully saved new auth code')
      Navigate('/admin')
    })
    .catch((err) => console.log(err));
  }

  return (
    <>
      {/* <NavbarPage /> */}
      <div className="flex text-center flex-column justify-center  md:h-96  items-center">
        <button
          className="btn btn-success mx-2 md:p-5"
          onClick={handleAuthGenerate}
        >
          Click here Generate auth
        </button>
        {authUrl && (
          <h1 className="cursor-pointer my-3">
            Click on link generated url
            <a
              href={`${authUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 font-bold hover:underline"
            >
              {authUrl}
            </a>
          </h1>
        )}
        <div className="my-3">
          <label>Enter the auth_code here</label>
          <input type="text" placeholder="" onChange={(e) => setAuth(e.target.value)}/>
          <button className={`btn btn-primary my-2  ${auth.length === 0  ? 'disabled' : ''}`} onClick={handleSaveAuthCode}>save</button>
        </div>
      </div>
    </>
  );
}

export default AuthGenerate;
