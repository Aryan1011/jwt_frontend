import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import signImg from '../../assets/images/loginImg.jpg'

function Register() {


  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [batch, setBatch] = useState("");
  const [branch, setBranch] = useState("");
  const [phone, setPhone] = useState("");
  const [about, setAbout] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  async function register(e) {
    e.preventDefault();

    try {
      const registerData = {
        email,
        name,
        batch,
        branch,
        phone,
        about,
        password,
        passwordVerify,
      };

      await axios.post("https://mitrauiet.herokuapp.com/auth/", registerData,{
          withCredentials:true
      });
      await getLoggedIn();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  }



  return (
    <div className="signin">
  <div className="signInForm">

    
      <form onSubmit={register} className="form">

      <div>
                  <div className='touchContentOuter'>
                    <p className='touchContent'>Register</p>
                  </div>
                </div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="name">Name</label>
        <input
          type="name"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label htmlFor="batch">Batch</label>
        <input
          type="batch"
          placeholder="Starting Year of Batch"
          onChange={(e) => setBatch(e.target.value)}
          value={batch}
        />
        <label htmlFor="branch">Branch</label>
        <input
          type="branch"
          placeholder="Branch"
          onChange={(e) => setBranch(e.target.value)}
          value={branch}
        />
        <label htmlFor="phone">Phone</label>
        <input
          type="phone"
          placeholder="Phone"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
        <label htmlFor="about">About Yourself</label>
        <input
          type="about"
          placeholder="About Yourself"
          onChange={(e) => setAbout(e.target.value)}
          value={about}
        />
<label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <label htmlFor="password">Confirm Password</label>
        <input
          type="password"
          placeholder="Verify your password"
          onChange={(e) => setPasswordVerify(e.target.value)}
          value={passwordVerify}
        />
        <button type="submit">Register</button>
      </form>
  </div>
  <div className='signInImage'>
            <img src={signImg} alt="" />
          </div>

    </div>
  );
}

export default Register;