import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import loginImg from '../../assets/images/loginImg.jpg'
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { getLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  async function login(e) {
    e.preventDefault();

    try {
      const loginData = {
        email,
        password,
      };

      await axios.post("http://localhost:5000/auth/login", loginData,{
          withCredentials:true
      });
    //   await axios.post(
        // "https://mern-auth-template-tutorial.herokuapp.com/auth/",
        // registerData
    //   );
     await getLoggedIn();
      navigate("/")
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="signup">
    <div className='signUpForm'>
      <form onSubmit={login} className="form">

      <div>
                  <div className='touchContentOuter'>
                    <p className='touchContent'>Log In</p>
                  </div>
                </div>
                <label htmlFor='email'>Email</label>  
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
                <label htmlFor='password'>Password</label>  
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button type="submit">Login</button>
      </form>
    </div>
    <div className='signUpImage'>
            <img src={loginImg} alt="" />
          </div>
    </div>
  );
}

export default Login;