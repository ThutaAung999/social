//import React from 'react';
import './rightbar.css';
import ads from '../Images/ads.jpg';
import image2 from '../Images/image2.jpg';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Follow from './Follow';
import { useSelector } from 'react-redux';

const Rightbar = () => {
   const userDetails = useSelector((state) => state.user);
   let user = userDetails?.user;
   const userId = user?.user?._id;
   const [users, setUsers] = useState([]);
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

   return (
      <div className="rightbar">
         <div className="rightContainer">
            <div className="adsContainer">
               <img src={`${ads}`} className="adsimg" alt="" />
               <div>
                  <p
                     style={{
                        textAlign: 'start',
                        marginLeft: '10px',
                        marginTop: '-20px',
                     }}
                  >
                     CodeDemy
                  </p>
                  <p
                     style={{
                        textAlign: 'start',
                        marginLeft: '10px',
                        fontSize: '12px',
                        marginTop: '-16px',
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
                        textAlign: 'start',
                        marginLeft: '10px',
                        marginTop: '-20px',
                     }}
                  >
                     CodeDemy
                  </p>
                  <p
                     style={{
                        textAlign: 'start',
                        marginLeft: '10px',
                        fontSize: '12px',
                        marginTop: '-16px',
                     }}
                  >
                     Buy codedemy course
                  </p>
               </div>
            </div>
         </div>

         <div className="rightContainer2">
            <h3 style={{ textAlign: 'start', marginLeft: '10px' }}>
               Suggested for you
            </h3>

            {users.map((user) => {
               // console.log('User in rightbar', user);
               return <Follow key={user.id} userdetails={user} />;
            })}
         </div>
      </div>
   );
};

export default Rightbar;
