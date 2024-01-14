import React from "react";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import HeroCSS from "../../styles/Hero.module.css";
import DataContext from "../../context/DataContext";
import { AlertMessage } from "../sub/AlertMessage";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { alertMessage, setAlertMessage } = useContext(DataContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/user/register", {
        username,
        password,
        confirmPassword,
      });
      navigate("/login");
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
        setAlertMessage(err.response.data.message);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  return (
    <>
      {alertMessage ? <AlertMessage /> : null}
      <div className={`${HeroCSS.loginContainer}`}>
        <form>
          <div className={`${HeroCSS.loginCard}`}>
            <div className={`${HeroCSS.loginSubContainer}`}>
              <label htmlFor="username">Username</label>
              <Input
                id="username"
                placeholder="Username"
                autoComplete="off"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className={`${HeroCSS.loginSubContainer}`}>
              <label htmlFor="password">Password</label>
              <Input
                id="password"
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className={`${HeroCSS.loginSubContainer}`}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Input
                id="confirmPassword"
                placeholder="Confirm Password"
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <Button onClick={handleSubmit}>Register</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
