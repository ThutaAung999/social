//import React from 'react';
import './navbar.css';
import SearhIcon from '../Images/search.png';
import Notifications from '../Images/bell.png';
import Message from '../Images/message.png';
//import ProfileImage from '../Images/profile.jpeg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../ReduxContainer/userReducer';

const Navbar = () => {
   const userDetails = useSelector((state) => state.user);
   const user = userDetails.user;
   const id = user?.user?._id;
   const dispatch = useDispatch();
   const handleLogout = () => {
      dispatch(logout());
   };
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

            <Link to={`/Profile/${id}`}>
               <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                     src={`${user?.user?.profile}`}
                     className="ProfileImage"
                     alt=""
                  />
                  <p style={{ marginLeft: '5px' }}>{user?.user?.username}</p>
               </div>
            </Link>
         </div>
         <div
            style={{
               marginRight: '30px',
               marginLeft: '20px',
               cursor: 'pointer',
            }}
            onClick={handleLogout}
         >
            <p>Logout</p>
         </div>
      </div>
   );
};

export default Navbar;
