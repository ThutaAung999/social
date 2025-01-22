//import React from 'react';
import './rightbar.css';
import ads from '../Images/ads.jpg';
import image2 from '../Images/image2.jpg';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Follow from './Follow';

const Rightbar = () => {
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
   //users.map((user) => user.username).forEach((name) => console.log(name));

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

            {users.map((user) => (
               <Follow key={user.id} userDetails={user} />
            ))}
         </div>
      </div>
   );
};

export default Rightbar;
