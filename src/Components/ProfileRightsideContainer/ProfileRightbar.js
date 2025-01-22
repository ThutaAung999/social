import './profilerightbar.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Follow from '../RightsideContainer/Follow';
const ProfileRightbar = () => {
   //below code is for followers list
   const [followerUser, setFollowerUser] = useState([]);
   useEffect(() => {
      const getFollowerUser = async () => {
         try {
            const res = await axios.get(
               'http://localhost:5000/api/post/followers/677edae3231634cad19bcebf',
            );
            setFollowerUser(res.data);
         } catch (error) {
            console.log('error :', error);
         }
      };
      getFollowerUser();
   }, []);

   console.log('followerUser :', followerUser);

   //================================

   //Below  code is for  suggested for you  list

   const [users, setUsers] = useState([]);
   const userId = '677edae3231634cad19bcebf';

   useEffect(() => {
      const getUser = async () => {
         try {
            const res = await axios.get(
               `http://localhost:5000/api/user/all/user/${userId}`,
            );
            setUsers(res.data);
            // console.log('res.data', res.data);
         } catch (error) {
            console.log('Some error occurs :', error);
         }
      };
      getUser();
   }, []);

   //console.log('users in rightbar :', users);

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
               <Follow key={user.id} userDetails={user} />
            ))}
         </div>
      </div>
   );
};

export default ProfileRightbar;
