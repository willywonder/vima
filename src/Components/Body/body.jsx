import React from "react";
import "../Body/body.css";
import { IoMdList } from "react-icons/io";

const Body = () => {
  return (
    <div>
      <div className="part1">
        <div>
          <IoMdList />
        </div>
        <div className="text2"> FAUCIBUS</div>
        <div className="text3"> Morbi/Elit</div>
      </div>
      <div className="images">
        <img src="/Rectangle 578.png" width={124} height={124} alt="camera" />
        <img src="/Rectangle 579.png" width={124} height={124} alt="camera" />
        <img src="/Rectangle 580.png" width={124} height={124} alt="camera" />
        <img src="/Rectangle 581.png" width={124} height={124} alt="camera" />
      </div>
    </div>
  );
};

export default Body;
