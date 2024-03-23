import React from "react";
import { FaReadme, FaLinkedin, FaGithub, FaPager } from "react-icons/fa";
import resume from "../../assets/files/Resume_Adityarajshekhawat.pdf";
import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./footerstyle.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li
            className="menuItem"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://policies.google.com/terms?hl=en-US";
            }}
          >
            Terms Of Use
          </li>

          <li
            className="menuItem"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://policies.google.com/privacy?hl=en-US";
            }}
          >
            Privacy-Policy
          </li>
          <li
            className="menuItem"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://www.linkedin.com/in/aditya-raj-shekhawat";
            }}
          >
            About
          </li>
          <li
            className="menuItem"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://adityarajshekhawat.github.io/";
            }}
          >
            Blog
          </li>
          <li
            className="menuItem"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://policies.google.com/faq?hl=en-US";
            }}
          >
            FAQ
          </li>
        </ul>
        <div className="infoText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        <div className="socialIcons">
          <span
            className="icon"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://github.com/adityarajshekhawat";
            }}
          >
            <FaGithub />
          </span>
          <span
            className="icon"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://adityarajshekhawat.github.io/";
            }}
          >
            <FaPager />
          </span>
          <span
            className="icon"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = resume;
            }}
          >
            <FaReadme />
          </span>
          <span
            className="icon"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://www.linkedin.com/in/aditya-raj-shekhawat";
            }}
          >
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
