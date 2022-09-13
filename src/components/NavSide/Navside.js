import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import "./Navside.css";

import tshirt from "../../../src/tshirt.jpg"
import {
  CalendarToday,
  ContactMail,
  DoubleArrow,
  Home,
  Info,
  LocalMall,
  Note,
  Person,
  PhonelinkRing,
  RateReviewSharp,
  Search
} from "@material-ui/icons";
import "./Side.css";
import Side from "./Side";
import Sidenew from "./Sidenew";

const Navside = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <div className="navside">
      <div className={sidebar ? "side active" : "side"}>
        <ul className="icons">
          <li>
            <a href="/">
              <Person />
            </a>
          </li>
          <li>
            <a href="/">
              <LocalMall />
            </a>
          </li>
          <li>
            <a href="/">
              <CalendarToday />
            </a>
          </li>
          <li>
            <a href="/">
              <PhonelinkRing />
            </a>
          </li>
          <li>
            <a href="/">
              <Note />
            </a>
          </li>
        </ul>

        <div className="side_end">
          <button
            className="menuBtn"
            onClick={showSidebar}
            style={{ background: "white", border: "none" }}
          >
            <DoubleArrow />
          </button>
        </div>
      </div>
      <nav className={sidebar ? "nav-menu " : "nav-menu active"} style={{ zIndex: 10 }}>
        <div
          className="Navside Cont "
          style={{ width: "100%" }}
        >
          <div className="sidedata mx-1" style={{ width: "100%" }}>
            <div className="storename">Zoko Store</div>
            <div class="input-group flex-nowrap" style={{ width: "90%" }}>
              <span class="input-group-text" id="addon-wrapping">
                <Search />
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Search..."
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>

            <div className="products">
              <div className="row" style={{ width: "100%" }}>
                <div
                  className="col-6 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-around align-items-center"
                  style={{ width: "100%", height: "100%" }}
                >
                  <div className="card ">
                    <img src={tshirt} />
                    <div className="card-body">
                      <p className="card-text collectionName">White Kimono</p>
                      <p className="card-text productName">2000</p>
                    </div>
                  </div>
                  <div className="card ">
                    <img src={tshirt} />
                    <div className="card-body">
                      <p className="card-text collectionName">White Kimono</p>
                      <p className="card-text productName">2000</p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-6 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-around align-items-center"
                  style={{ width: "100%", height: "100%" }}
                >
                  <div className="card ">
                    <img src={tshirt} />
                    <div className="card-body">
                      <p className="card-text collectionName">White Kimono</p>
                      <p className="card-text productName">2000</p>
                    </div>
                  </div>
                  <div className="card ">
                    <img src={tshirt} />
                    <div className="card-body">
                      <p className="card-text collectionName">White Kimono</p>
                      <p className="card-text productName">2000</p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </nav>
      </div>
    </>
  );
};

export default Navside;
