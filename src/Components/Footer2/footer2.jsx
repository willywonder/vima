import React from "react";
import "../Footer2/footer2.css";
import { TbBrandFacebookFilled } from "react-icons/tb";
import { GrInstagram } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { GrYoutube } from "react-icons/gr";
const Footer2 = () => {
  return (
    <div className="footer-two">
      <div className="sapien-information">
        <div className="div-container">
          <div className="sapien"> Sapien</div>
          <div className="tandc">
            <div>terms of use </div>
            <div>Privacy policy</div>
          </div>
        </div>
        <div className="information">
          <div className="info">
            <h3>Information</h3>
            <div className="write">Aboutus </div>{" "}
            <div className="write">Selling tips</div>{" "}
            <div className="write">Home2</div>{" "}
            <div className="write">Contact Us</div>
          </div>
          <div className="info">
            <h3>My Account</h3>
            <div className="write">My Account </div>{" "}
            <div className="write">Register</div>{" "}
            <div className="write">cart</div>{" "}
            <div className="write">Wish List</div>{" "}
            <div className="write">Order History</div>
          </div>
          <div className="info">
            <h3>Help and Support</h3>
            <div className="write">How to shop </div>{" "}
            <div className="write">Payment</div>{" "}
            <div className="write">Returns</div>{" "}
            <div className="write">Delivery</div>
          </div>
        </div>
      </div>
      <div className="socials-copyright">
        <div className="copy">© 2023 VIMA APP. All rights reserved.</div>
        <div className="social-media">
          <TbBrandFacebookFilled />
          <GrInstagram />
          <GrTwitter />
          <GrYoutube />
        </div>
      </div>
    </div>
  );
};

export default Footer2;
