    import React from "react";
    import "./leftbar.css";
    import image from "../Images/Profile.png";
    import image1 from "../Images/image1.jpg";
    import image2 from "../Images/image2.jpg";
    import image3 from "../Images/image3.jpg";
    import image4 from "../Images/image4.jpg";
    import image5 from "../Images/image5.jpg";
    import image6 from "../Images/image6.jpg";
    const Leftbar = () => {
    return (
        <div className="leftbar">
        <div className="NotificationsContainer">
            <div style={{ display: "flex", justifyContent: "space-around" }}>
            <p style={{ marginLeft: "-14px" }}>Notifiations</p>
            <p style={{ color: "#aaa", marginLeft: "40px" }}>See all</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", marginTop: -10 }}>
            <img src={`${image}`} className="notificationImg" alt="" />
            <p
                style={{
                marginLeft: "5px",
                color: "#aaa",
                fontSize: 13,
                textAlign: "start",
                width: "120px",
                }}
            >
                Moe Moe started to follow you
            </p>
            <img src={`${image1}`} className="followinguserimage" alt="" />
            </div>
            <div style={{ display: "flex", alignItems: "center", marginTop: -10 }}>
            <img src={`${image}`} className="notificationImg" alt="" />
            <p
                style={{
                marginLeft: "5px",
                color: "#aaa",
                fontSize: 13,
                textAlign: "start",
                width: "120px",
                }}
            >
                Suman started to follow you
            </p>
            <img src={`${image2}`} className="followinguserimage" alt="" />
            </div>
            <div style={{ display: "flex", alignItems: "center", marginTop: -10 }}>
            <img src={`${image2}`} className="notificationImg" alt="" />
            <p
                style={{
                marginLeft: "5px",
                color: "#aaa",
                fontSize: 13,
                textAlign: "start",
                width: "120px",
                }}
            >
                Madan like your post
            </p>
            <img src={`${image3}`} className="likeImage" alt="" />
            </div>
            <div style={{ display: "flex", alignItems: "center", marginTop: -10 }}>
            <img src={`${image}`} className="notificationImg" alt="" />
            <p
                style={{
                marginLeft: "5px",
                color: "#aaa",
                fontSize: 13,
                textAlign: "start",
                width: "120px",
                }}
            >
                Toe Toe started to follow you
            </p>
            <img src={`${image4}`} className="followinguserimage" alt="" />
            </div>
            <div style={{ display: "flex", alignItems: "center", marginTop: -10 }}>
            <img src={`${image6}`} className="notificationImg" alt="" />
            <p
                style={{
                marginLeft: "5px",
                color: "#aaa",
                fontSize: 13,
                textAlign: "start",
                width: "120px",
                }}
            >
                Moe Moe started to follow you
            </p>
            <img src={`${image5}`} className="followinguserimage" alt="" />
            </div>
            <div style={{ display: "flex", alignItems: "center", marginTop: -10 }}>
            <img src={`${image3}`} className="notificationImg" alt="" />
            <p
                style={{
                marginLeft: "5px",
                color: "#aaa",
                fontSize: 13,
                textAlign: "start",
                width: "120px",
                }}
            >
                Madan like your post
            </p>
            <img src={`${image6}`} className="likeImage" alt="" />
            </div>
            <div style={{ display: "flex", alignItems: "center", marginTop: -10 }}>
            <img src={`${image}`} className="notificationImg" alt="" />
            <p
                style={{
                marginLeft: "5px",
                color: "#aaa",
                fontSize: 13,
                textAlign: "start",
                width: "120px",
                }}
            >
                Madan like your post
            </p>
            <img src={`${image}`} className="likeImage" alt="" />
            </div>
            <div style={{ display: "flex", alignItems: "center", marginTop: -10 }}>
            <img src={`${image}`} className="notificationImg" alt="" />
            <p
                style={{
                marginLeft: "5px",
                color: "#aaa",
                fontSize: 13,
                textAlign: "start",
                width: "120px",
                }}
            >
                Madan like your post
            </p>
            <img src={`${image}`} className="likeImage" alt="" />
            </div>
        </div>

        {/* end of notifications */}

        <div className="NotificationsContainer">
            <div style={{ display: "flex", justifyContent: "space-around" }}>
            <p style={{ marginLeft: "-14px" }}>Explorers</p>
            <p style={{ color: "#aaa", marginLeft: "40px" }}>See all</p>
            </div>

            <div>
            <img src={`${image}`} className="explorerImage" alt="" />
            <img src={`${image1}`} className="explorerImage" alt="" />
            <img src={`${image2}`} className="explorerImage" alt="" />
            <img src={`${image3}`} className="explorerImage" alt="" />
            <img src={`${image4}`} className="explorerImage" alt="" />
            <img src={`${image5}`} className="explorerImage" alt="" />
            <img src={`${image6}`} className="explorerImage" alt="" />
            <img src={`${image}`} className="explorerImage" alt="" />
            </div>
        </div>
        </div>
    );
    };

    export default Leftbar;
