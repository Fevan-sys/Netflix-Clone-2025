import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./footer.css"; // Adjusted CSS import path

const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        {/* Social Media Icons */}
        <div className="footer_icons">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>

        {/* Footer Links */}
        <div className="footer_data">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Centre</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Centre</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        {/* Service Code */}
        <div className="service_code">
          <p>Service Code</p>
        </div>

        {/* Copyright Notice */}
        <div className="copy_write">
          © 1997-2024 Netflix, Inc. 
          {/* &Copy; 1997-2024 Netflix, Inc. */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
