import React from "react";
import "../Body/body.css";
import { IoMdList } from "react-icons/io";
import { GoLocation } from "react-icons/go";

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
      <div className="part2">
        <div className="images">
          <img src="/Rectangle 578.png" width={124} height={124} alt="camera" />
          <img src="/Rectangle 579.png" width={124} height={124} alt="camera" />
          <img src="/Rectangle 580.png" width={124} height={124} alt="camera" />
          <img src="/Rectangle 581.png" width={124} height={124} alt="camera" />
        </div>
        <div className="frame">
          <img src="/Frame 176.png" width={670} height={600} alt="camera" />
        </div>
        <div className="container2">
          <div className="paragraph1">
            Nget Morbi venenatis tincidunt Nam elit. tempor volutpat non. Nunc
            varius nisl. Nunc amet, tincidunt ipsum non quis ex non.
          </div>
          <div className="stars">
            <img src="/Frame 174.png" width={263} height={14} alt="camera" />
          </div>
          <div className="dollars">$ 36,758.00</div>
          <div className="paragraph2">
            Sapien elementum luctus amet, gravida ipsumvitae ex id consectetur
            placerat efficitur. Nunc Ut malesuada facilisis sapien vitae varius
            T nec eget amet, venenatis id nibh id hendrerit ipsum nulla, dolor
            ex maximus tempor faucibus leo. eget tincidunt facilisis nibh elit
            turpis sed ex vehicula, est elementum turpis porta sodales. ultrices
            Nam libero, placerat. non. urna vitae placerat consectetur Praesent
            ipsum ipsum. d in a neat, compact unit. It can be easily arranged to
            match your living room design and give it a classy look at the same
            time. This sound system is designed for the extreme entertainment
            lovers to enjoy their amazing music and movies with sound clarity
            never heard before.<span> Read More</span>
          </div>
          <button className="btn"> NUNC LIBERO </button>
        </div>
      </div>
      <div className="part3">
        <div className="product">
          <h1>PRODUCT DETAILS</h1>

          <h2>
            <u>Description </u>
          </h2>
          <p>
            licursus Ut scelerisque sollicitudin. Lorem eget elit viverra non.
            ex ultrices porta lobortis, est. sit venenatis adipiscing laoreet
            convallis. at, amet, nec orci tincidunt non sollicitudin. maximus
            lobortis, ullamcorper ullamcorper non. eu tortor. quam Donec porta
            quis risus elementum elit lacus, Nam luctus nulla, Nunc non eget
            lacus, Cras dui vitae id Nunc quis ipsum Nunc placerat est. sed orci
            eget amet, amet, placerat facilisis elit. sit tempor convallis.
            viverra luctus ex nec Cras varius Donec eu Nullam felis, lacus,
            porta efficitur. vitae non tempor commodo tincidunt Nam at gravida
            maximus risus libero, Quisque elit viverra ex. faucibus id lacus,
            faucibus massa Sed quis sodales. vitae ex. efficitur. in
          </p>
          <h2>
            <u>Technical</u> Specifications
          </h2>

          <li>Quisque elit viverra ex</li>
          <li>Nunc quis ipsum Nunc</li>
          <li>porta quis risus elementum</li>
          <li>risus elementum elit lacus</li>
          <li>nec orci tincidunt</li>
          <li>Nunc non eget lacus</li>
          <li>Nunc non eget lacus</li>

          <h2>
            <u>Shipping</u> and Warranty
          </h2>

          <li>Quisque elit viverra ex</li>
          <li>Nunc quis ipsum Nunc</li>
          <li>porta quis risus elementum</li>
          <li>risus elementum elit lacus</li>
          <li>nec orci tincidunt</li>
          <li>Nunc non eget lacus</li>
          <li>Nunc non eget lacus</li>
        </div>
        <div className="phase2">
          <div className="buyer">
            <h1>BUYER INSIGHTS</h1>
          </div>
          <div className="sihao">
            <div className="image">
              <img src="image 11.png" width={97} height={86} alt=" sihao" />{" "}
            </div>
            <div className="facibus">
              <div className="haohao">Ficibus Haohao Vehicle Co., Ltd.</div>
              <div className="location">
                <GoLocation /> Texas
              </div>
            </div>
          </div>
          <div>
            <h2>Product Analysis</h2>
          </div>
          <div className="grid-container">
            <div className="grid-items">
              <div className="number">59+</div>
              <div className="undertext">Inquiries (180 days)</div>
            </div>
            <div className="grid-items">
              <div className="number">$365,456.16</div>
              <div className="undertext">Vendors Sales amount</div>
            </div>
            <div className="grid-items">
              <div className="number">10+</div>
              <div className="undertext">Stores Order Volume</div>
            </div>
            <div className="grid-items">
              <div className="number"> 6hr</div>
              <div className="undertext">Response Time</div>
            </div>
            <div className="grid-items">
              <div className="number">90%</div>
              <div className="undertext">On-Time Delivery rate</div>
            </div>
            <div className="grid-items">
              <div className="number">170,000+</div>
              <div className="undertext">Transactions</div>
            </div>
          </div>
          <div className="rating">
            <h2> Ratings & Reviews</h2>
          </div>
          <div className="reviews">
            <img src="/Frame 175.png" width={282} height={26} alt="" />
            <div className="add">AddRating</div>
          </div>
          <div className="frame261">
            <img src="/Frame 261.png" width={127} height={19} alt="" />
          </div>
          <div>
            <h2>I like it</h2>
            <div className="para">
              It is a good sunscreen and it leaves no whitecast but it makes the
              face very sweaty. Good product , fast delivery , amazing price
            </div>
            3rd Jul 2023 by Aneliko
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
