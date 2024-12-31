import React from "react";
import "./rightbar.css";
import ads from "../Images/ads.jpg";
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg";
import image3 from "../Images/image3.jpg";
import image4 from "../Images/image4.jpg";
import image5 from "../Images/image5.jpg";
import image6 from "../Images/image6.jpg";
import image7 from "../Images/image1.jpg";

import addFriends from "../Images/add-user.png";
const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightContainer">
        <div className="adsContainer">
          <img src={`${ads}`} className="adsimg" alt="" />
          <div>
            <p
              style={{
                textAlign: "start",
                marginLeft: "10px",
                marginTop: "-20px",
              }}
            >
              CodeDemy
            </p>
            <p
              style={{
                textAlign: "start",
                marginLeft: "10px",
                fontSize: "12px",
                marginTop: "-16px",
              }}
            >
              Buy codedemy course
            </p>
          </div>
        </div>

        <div className="adsContainer">
          <img src={`${image2}`} className="adsimg" alt="" />
          <div>
            <p
              style={{
                textAlign: "start",
                marginLeft: "10px",
                marginTop: "-20px",
              }}
            >
              CodeDemy
            </p>
            <p
              style={{
                textAlign: "start",
                marginLeft: "10px",
                fontSize: "12px",
                marginTop: "-16px",
              }}
            >
              Buy codedemy course
            </p>
          </div>
        </div>
      </div>

      <div className="rightContainer2">
        <h3 style={{ textAlign: "start", marginLeft: "10px" }}>
          {" "}
          Suggested for you
        </h3>
        <div style={{ marginTop: "-10px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={`${image2}`} className="profileImage" alt="" />
              <div>
                <p style={{ marginLeft: "10px", textAlign: "start" }}>Suman</p>
                <p
                  style={{
                    marginLeft: "10px",
                    textAlign: "start",
                    marginTop: "-16px",
                    fontSize: 11,
                    color: "#aaa",
                  }}
                >
                  Suggested for you
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#aaa",
                padding: "10px",
                marginRight: 13,
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              <img className="addfriend" src={`${addFriends}`} alt="" />
            </div>
          </div>
        </div>

        <div style={{ marginTop: "-10px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={`${image5}`} className="profileImage" alt="" />
              <div>
                <p style={{ marginLeft: "10px", textAlign: "start" }}>
                  Zaw Zaw
                </p>
                <p
                  style={{
                    marginLeft: "10px",
                    textAlign: "start",
                    marginTop: "-16px",
                    fontSize: 11,
                    color: "#aaa",
                  }}
                >
                  Followed by Suman
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#aaa",
                padding: "10px",
                marginRight: 13,
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              <img className="addfriend" src={`${addFriends}`} alt="" />
            </div>
          </div>
        </div>

        <div style={{ marginTop: "-10px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={`${image4}`} className="profileImage" alt="" />
              <div>
                <p style={{ marginLeft: "10px", textAlign: "start" }}>
                  Myo Thander
                </p>
                <p
                  style={{
                    marginLeft: "10px",
                    textAlign: "start",
                    marginTop: "-16px",
                    fontSize: 11,
                    color: "#aaa",
                  }}
                >
                  Followed by Suman
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#aaa",
                padding: "10px",
                marginRight: 13,
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              <img className="addfriend" src={`${addFriends}`} alt="" />
            </div>
          </div>
        </div>

        <div style={{ marginTop: "-10px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={`${image6}`} className="profileImage" alt="" />
              <div>
                <p style={{ marginLeft: "10px", textAlign: "start" }}>
                  Phyu Pyar
                </p>
                <p
                  style={{
                    marginLeft: "10px",
                    textAlign: "start",
                    marginTop: "-16px",
                    fontSize: 11,
                    color: "#aaa",
                  }}
                >
                  Followed by Suman
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#aaa",
                padding: "10px",
                marginRight: 13,
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              <img className="addfriend" src={`${addFriends}`} alt="" />
            </div>
          </div>
        </div>

        <div style={{ marginTop: "-10px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={`${image7}`} className="profileImage" alt="" />
              <div>
                <p style={{ marginLeft: "10px", textAlign: "start" }}>
                  Ei Ei 
                </p>
                <p
                  style={{
                    marginLeft: "10px",
                    textAlign: "start",
                    marginTop: "-16px",
                    fontSize: 11,
                    color: "#aaa",
                  }}
                >
                  Followed by Suman
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#aaa",
                padding: "10px",
                marginRight: 13,
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              <img className="addfriend" src={`${addFriends}`} alt="" />
            </div>
          </div>
        </div>

        <div style={{ marginTop: "-10px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={`${image3}`} className="profileImage" alt="" />
              <div>
                <p style={{ marginLeft: "10px", textAlign: "start" }}>
                  Chit Chit
                </p>
                <p
                  style={{
                    marginLeft: "10px",
                    textAlign: "start",
                    marginTop: "-16px",
                    fontSize: 11,
                    color: "#aaa",
                  }}
                >
                  Followed by Suman
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#aaa",
                padding: "10px",
                marginRight: 13,
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              <img className="addfriend" src={`${addFriends}`} alt="" />
            </div>
          </div>
        </div>

        <div style={{ marginTop: "-10px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={`${image1}`} className="profileImage" alt="" />
              <div>
                <p style={{ marginLeft: "10px", textAlign: "start" }}>
                  Toe Toe
                </p>
                <p
                  style={{
                    marginLeft: "10px",
                    textAlign: "start",
                    marginTop: "-16px",
                    fontSize: 11,
                    color: "#aaa",
                  }}
                >
                  Followed by Suman
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#aaa",
                padding: "10px",
                marginRight: 13,
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              <img className="addfriend" src={`${addFriends}`} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
