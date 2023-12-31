import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import HeroCSS from "../../styles/Hero.module.css";
const LoginPage = () => {
  return (
    <div className={`${HeroCSS.loginContainer}`}>
      <form>
        <div className={`${HeroCSS.loginCard}`}>
          <div className={`${HeroCSS.loginSubContainer}`}>
            <label htmlFor="username">Username</label>
            <Input id="username" placeholder="Username" autocomplete="off" />
          </div>
          <div className={`${HeroCSS.loginSubContainer}`}>
            <label htmlFor="password">Password</label>
            <Input id="password" placeholder="Password" type="password" />
          </div>
          <Button>Login</Button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
