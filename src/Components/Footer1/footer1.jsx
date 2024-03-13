import React from "react";
import "../Footer1/footer1.css";
const Footer1 = () => {
  return (
    <div className="footer-one">
      <div className="email">
        <div className="join">Join us & get a special gift</div>
        <div className="input">
          <input type="text" placeholder="Your Email" />
          <button className="button">subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
