/* eslint-disable jsx-a11y/no-distracting-elements */
import "./App.css";
import UserDashboard from "./component/UserDashboard";
import Footer from "./component/Footer";
import SignIn from "./component/Signin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./component/AdminDashBoard";
import BlogForm from "./component/AddBlog";
import BlogListing from "./component/BlogsLsiting";
import SignUp from "./component/Signup";
import Dashboard from "./component/Dashboard";
import ForgetPassword from "./component/ForgetPassword";
import { useEffect } from "react";
import AuthGenerate from "./component/admin/AuthGenerate";
import Login from "./component/Login";
import Register from "./component/Register";
import AdminSignin from "./component/AdminSignin";

function App() {
  let localvalue = JSON.parse(localStorage.getItem('user'))
  useEffect( () => {
    
  }, [])
  return (
    <div className="">
      <Router>
        <Routes>
          <Route exact path="/signin" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/user" element={<UserDashboard />} />
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/admin" element={<AdminDashboard localvalue={localvalue}/>} />
          <Route exact path="/admin/addblog" element={<BlogForm />} />
          <Route exact path="*" element={<SignIn />} />
          <Route exact path="/blogs" element={<BlogListing />} />
          <Route exact path="/adminsignin" element={<AdminSignin />} />
          <Route exact path="admin/newauthgenerate" element={<AuthGenerate />} />
          {/* <Route exact path="/forget" element={<ForgetPassword/>} /> */}
          <Route exact path="https://api-t1.fyers.in/api/v3/generate-authcode?c…ee.app/user&response_type=code&state=sample_state" element={<ForgetPassword />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
