import React from "react";
import Stats from "@a/images/stats.png";
import VisitorCount from "@a/images/visitorCount.png";
import Linkedin from "@a/icons/linkedin.svg";
import Discord from "@a/icons/discord.svg";
import BuyMeACoffee from "@a/icons/buyMeACoffee.svg";
import Repos from "@a/icons/repos.svg";
import Star from "@a/icons/stars.svg";
import Commits from "@a/images/commits.png";

const About = () => {
  return (
    <div className="gap-[18px]">
      <div className="py-[26px] px-[24px] border border-gray-700 rounded-[6px] w-[894px] h-[530px]">
        <p className="text-[14px]">
          definem <span className="text-[#7D8590]">/</span> README
          <span className="text-[#7D8590]">.md</span>
        </p>
        <div className="">
          <h1 className="text-[23px] text-[#2F81F7] font-semibold mt-[17px]">
            Definem❤️‍🔥 | Developer
          </h1>
          <div className="flex items-center justify-center gap-[7px] mt-[30px]">
            <img src={Linkedin.src} alt="linked icon" />
            <img src={Discord.src} alt="discord icon" />
            <img src={BuyMeACoffee.src} alt="buyMeACoffee icon" />
          </div>
          <div className="text-center">
            <h2 className="mt-[40px] font-semibold">
              Welcome to
              <span className="text-[#2F81F7] font-semibold">Muhammadiyya</span>
              's profile!👋🏻
            </h2>
            <img className="w-[530px]" src={Stats.src} alt="Stats img" />
            {/* <img src={VisitorCount.src} alt="VisitorCount img" /> */}
          </div>
        </div>
      </div>
      <h1 className="mt-[24px] text-[16px]">Pinned</h1>
      <div className="border border-gray-700 rounded-[6px] w-[440px] h-[130px] mt-[8px]">
        <div className="flex items-center gap-[7px] p-[17px]">
          <img src={Repos.src} alt="repos icon" />
          <p className="text-[16px] text-[#2F81F7] font-semibold">Definem</p>
          <p className="border border-[#7D8590] px-2 text-[#7D8590] rounded-[50px] text-[14px]">
            Public
          </p>
        </div>
        <p className="text-[14px] text-[#7D8590] px-[17px]">
          Config files for my GitHub profile
        </p>
        <div className="flex items-center px-[17px] mt-[10px]">
          <img src={Star.src} alt="star icon" />
          <p className="text-[#7D8590]">6</p>
        </div>
      </div>

      <h1 className="mt-[40px] text-[16px]">
        1,019 contributions in the last year
      </h1>
      <div className="mt-[8px]">
        <div className="flex items-center gap-[7px]">
          <img
            className="w-[894] h-[185px]"
            src={Commits.src}
            alt="commits image"
          />
        </div>
      </div>
      <h1 className="text-[13px] text-[#7D8590] mt-[26px]">
        Seeing something unexpected? Take a look at the 
        <span className="text-[#2F81F7]"> GitHub profile guide</span>
      </h1>
    </div>
  );
};

export default About;
