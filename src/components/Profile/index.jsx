import React from "react";
import ProfilePicture from "../../../assets/images/profrilePicture.png";
import Users from "../../../assets/icons/users.svg";
import Yolo from "../../../assets/icons/yolo.svg";
import PullShark from "../../../assets/icons/pullShark.svg";
import Target from "../../../assets/icons/target.svg";

const index = () => {
    return (
      <div className="">
        <img src={ProfilePicture.src} alt="" />
        <h1 className="mt-[16px]">محمدية</h1>
        <p className="text-[#7D8590]">definem</p>
        <p className="mt-[19px]">Don't approach. You are good from afar.</p>
        <button className="mt-[16px] w-[296px] h-[32px] bg-[#21262D] rounded-[7px] border border-gray-700 hover:bg-gray-800 hover:border-gray-400 transition-duration 75ms">
          Follow
        </button>
        <div className="flex items-center mt-[22px] text-[16px] gap-[3px] border-b border-gray-800 pb-[35px]">
          <img src={Users.src} alt="Users avatar" />
          <p className="">
            12 <span className="text-[#7D8590]">followers</span> · 0
            <span className="text-[#7D8590]">following</span>
          </p>
        </div>
        <div className="mt-[20px]">
          <h1>Achievements</h1>
          <div className="flex mt-[12px]">
            <img src={Yolo.src} alt="yolo icon" />
            <img src={PullShark.src} alt="PullShark icon" />
          </div>
          <div className="flex items-center mt-[18px] gap-[4px] border-b border-gray-800 pb-[35px]">
            <p className="border border-[#3FB950] px-2 text-[#3FB950] rounded-[50px] text-[14px]">
              Beta
            </p>
            <p className="text-[14px] text-[#2F81F7]">Send feedback</p>
          </div>
        </div>
        <div className="mt-[17px]">
          <h1>Highlights</h1>
          <div className="flex items-center gap-[4px] mt-[10px]">
            <img src={Target.src} alt="" />
            <p className="text-[16px]">Developer Program Member</p>
          </div>
          <p className="text-[19px] text-[#7D8590] mt-[11px]">
            Block or Report
          </p>
        </div>
      </div>
    );
};

export default index;
