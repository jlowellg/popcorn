import React from "react";
import Cookies from "universal-cookie";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import HeroCSS from "../../styles/Hero.module.css";
import { Link } from "react-router-dom";
import DataContext from "../../context/DataContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "../ui/use-toast";
import { AlertMessage } from "../sub/AlertMessage";

const LoginPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLoggedIn, alertMessage, setAlertMessage, backendURL } =
    useContext(DataContext);

  const cookies = new Cookies();
  const { toast } = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${backendURL}/user/login`, {
        username,
        password,
      });
      const userInfo = response.data.userInfo;
      cookies.set("userInfo", userInfo, { path: "/" });
      setIsLoggedIn(userInfo);
      localStorage.setItem("username", userInfo);
      navigate("/");
      toast({
        title: "Login successful.",
      });
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

  useEffect(() => {
    document.title = "Login";
  }, []);

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
            <Button onClick={handleSubmit}>Login</Button>
            <div className={`${HeroCSS.mutedText}`}>
              Don't have an account?
              <Link reloadDocument to="/register">
                <span className={`${HeroCSS.gray}`}> Register</span>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
