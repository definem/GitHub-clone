import React from "react";
import GitHub from "@a/icons/GitHub.svg";

const Footer = () => {
  return (
    <div className="flex items-center m-[52px] gap-[70px]">
      <div className="flex items-center gap-[8px]">
        <img src={GitHub.src} alt="" />
        <p className="text-[12px] text-[#7D8590]">© 2023 GitHub, Inc.</p>
      </div>
      <ul className="flex items-center text-[12px] text-[#2F81F7] gap-[41px]">
        <li>Terms</li>
        <li>Privacy</li>
        <li>Security</li>
        <li>Status</li>
        <li>Docs</li>
        <li>Contact GitHub</li>
        <li>Pricing</li>
        <li>API</li>
        <li>Training</li>
        <li>Blog</li>
        <li>About</li>
      </ul>
    </div>
  );
};

export default Footer;
