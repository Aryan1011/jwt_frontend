import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

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

      await axios.post("http://localhost:5000/auth/", registerData,{
          withCredentials:true
      });
      await getLoggedIn();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  }



  return (
    <div>
      <h1>Register a new account</h1>
      <form onSubmit={register}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="name"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="batch"
          placeholder="Starting Year of Batch"
          onChange={(e) => setBatch(e.target.value)}
          value={batch}
        />
        <input
          type="branch"
          placeholder="Branch"
          onChange={(e) => setBranch(e.target.value)}
          value={branch}
        />
        <input
          type="phone"
          placeholder="Phone"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
        <input
          type="about"
          placeholder="About Yourself"
          onChange={(e) => setAbout(e.target.value)}
          value={about}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          type="password"
          placeholder="Verify your password"
          onChange={(e) => setPasswordVerify(e.target.value)}
          value={passwordVerify}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;