import './profilerightbar.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Follow from '../RightsideContainer/Follow';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
const ProfileRightbar = () => {
   // extract  user id from url(http://localhost:3000/Profile/677f6c244e16c0761acd0ca3)
   let location = useLocation();
   const id = location.pathname.split('/')[2];

   const userDetails = useSelector((state) => state.user);
   const user = userDetails.user;

   const idForSuggest = user?.user?._id;

   //below code is for followers list
   const [followerUser, setFollowerUser] = useState([]);
   useEffect(() => {
      const getFollowerUser = async () => {
         try {
            const res = await axios.get(
               `http://localhost:5000/api/post/followers/${id}`,
            );
            setFollowerUser(res.data);
         } catch (error) {
            console.log('error :', error);
         }
      };
      getFollowerUser();
   }, []);

   //================================

   //Below  code is for  suggested for you  list

   const [users, setUsers] = useState([]);
   useEffect(() => {
      const getUser = async () => {
         try {
            const res = await axios.get(
               `http://localhost:5000/api/user/all/user/${idForSuggest}`,
            );
            setUsers(res.data);
            // console.log('res.data', res.data);
         } catch (error) {
            console.log('Some error occurs :', error);
         }
      };
      getUser();
   }, []);

   return (
      <div className="ProfileRightbar">
         <div className="ProfilerightContainer">
            <h3>Followers</h3>
            <div>
               {followerUser.map((item) => (
                  <div
                     key={item._id}
                     style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: '10px',
                        marginTop: '10px',
                        cursor: 'pointer',
                     }}
                  >
                     <img
                        src={`${item.profile}`}
                        className="friendsImage"
                        alt=""
                     />
                     <p style={{ textAlign: 'start', marginLeft: '10px' }}>
                        {item.username}
                     </p>
                  </div>
               ))}
            </div>
         </div>

         <div className="rightContainer2">
            <h3 style={{ textAlign: 'start', marginLeft: '10px' }}>
               Suggested for you
            </h3>
            {users.map((user) => (
               <Follow key={user.id} userdetails={user} />
            ))}
         </div>
      </div>
   );
};

export default ProfileRightbar;
