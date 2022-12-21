import React from "react";
import { useState } from "react";
import "./mobile.css";
import { stack as Menu } from "react-burger-menu";

export const Navbar = () => {
  return (
    <div>
      <Menu width={"65%"} right>
        <a className="link">About</a>
        <a className="link">Education</a>
        <a className="link">Work Experience</a>
        <a className="link">Skills</a>
      </Menu>
      <div className="nav-bar-mobile">
        <a className="main-link-mobile" href="./">
          Skye Renda
        </a>
        <span className="span-nav-mobile"></span>
      </div>
    </div>
  );
};
