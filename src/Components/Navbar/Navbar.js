//import React from 'react';
import './navbar.css';
import SearhIcon from '../Images/search.png';
import Notifications from '../Images/bell.png';
import Message from '../Images/message.png';
import ProfileImage from '../Images/profile.jpeg';
import { Link } from 'react-router-dom';

const Navbar = () => {
   return (
      <div className="mainNavbar">
         <div className="LogoContainer">
            <p>Social</p>
         </div>
         <div>
            <div className="searchInputContainer">
               <img src={`${SearhIcon}`} className="searchIcon" alt="" />
               <input
                  type="text"
                  className="searchInput"
                  placeholder="Search your friends"
                  name=""
                  id=""
               />
            </div>
         </div>
         <div className="IconsContainer">
            <img src={`${Notifications}`} className="Icons" alt="" />
            <img src={`${Message}`} className="Icons" alt="" />

            <Link to={'/Profile/thata_33434333323gddfd'}>
               <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                     src={`${ProfileImage}`}
                     className="ProfileImage"
                     alt=""
                  />
                  <p style={{ marginLeft: '5px' }}>Aung Aung</p>
               </div>
            </Link>
         </div>
      </div>
   );
};

export default Navbar;
