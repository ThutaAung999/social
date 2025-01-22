import './profileleftbar.css';
import image from '../Images/profile.jpeg';
//import image3 from '../Images/image3.jpg';
import { useEffect, useState } from 'react';
import axios from 'axios';
const ProfileLeftbar = () => {
   const [followingUser, setFollowingUser] = useState([]);

   useEffect(() => {
      const getFollowingUser = async () => {
         try {
            const res = await axios.get(
               'http://localhost:5000/api/post/following/677edae3231634cad19bcebf',
            );
            setFollowingUser(res.data);
         } catch (error) {
            console.log('error :', error);
         }
      };
      getFollowingUser();
   }, []);

   console.log('followingUser :', followingUser);

   const image =
      'https://images.pexels.com/photos/13004916/pexels-photo-13004916.jpeg?auto=compress&cs=tinysrgb&w=600';

   return (
      <div className="ProfileLeftbar">
         <div className="NotificationsContainer">
            <img src={`${image}`} className="ProfileImageCover" alt="" />

            <div
               style={{ display: 'flex', alignItems: 'center', marginTop: -30 }}
            >
               <img src={`${image}`} className="ProfilepageImage" alt="" />
               <div>
                  <p
                     style={{
                        marginLeft: '6px',
                        marginTop: '20px',
                        color: 'black',
                        textAlign: 'start',
                     }}
                  >
                     Aung Aung
                  </p>
                  <p
                     style={{
                        marginLeft: '6px',
                        color: 'black',
                        textAlign: 'start',
                        marginTop: '-16px',
                        fontSize: '11px',
                     }}
                  >
                     Web Developer
                  </p>
               </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
               <p style={{ color: 'black', marginLeft: 20, fontSize: 14 }}>
                  Profile Views
               </p>
               <p
                  style={{
                     color: 'black',
                     marginRight: 20,
                     fontSize: 12,
                     marginTop: 17,
                  }}
               >
                  100K
               </p>
            </div>
            {/*  <hr style={{ marginTop: -10 }} /> */}
            <div
               style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: -20,
               }}
            >
               <p style={{ color: 'black', marginLeft: 20, fontSize: 14 }}>
                  Followers
               </p>
               <p
                  style={{
                     color: 'black',
                     marginRight: 20,
                     fontSize: 12,
                     marginTop: 17,
                  }}
               >
                  4321
               </p>
            </div>
            {/*   <hr style={{ marginTop: -10 }} /> */}
            <div
               style={{
                  marginTop: -20,
               }}
            >
               <h5
                  style={{
                     color: 'black',
                     marginLeft: 10,
                     fontSize: 14,
                     marginRight: 30,
                     marginTop: 40,
                     textAlign: 'start',
                  }}
               >
                  User Info
               </h5>

               <p
                  style={{
                     color: 'black',
                     // marginRight: 8,
                     fontSize: 12,
                     marginTop: -20,
                     textAlign: 'start',
                     marginLeft: 10,
                  }}
               >
                  yber Security Foundation Course Cyber Security နဲ့ပတ်သက်ပြီး
                  အခုမှစလေ့လာမည့်သူတစ်ယေ
               </p>
            </div>
            <button
               style={{
                  width: '100%',
                  paddintTop: 7,
                  paddingBottom: 7,
                  backgroundColor: 'green',
                  color: 'white',
               }}
            >
               Edit Bio
            </button>
         </div>

         {/* end of notifications */}

         <div className="NotificationsContainer">
            <h3>Followings</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
               <p style={{ marginLeft: 10 }}>Friends</p>
               <p style={{ marginRight: 10, color: '#aaa' }}>See all</p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: 5 }}>
               {followingUser.map((item) => (
                  <div
                     key={item._id}
                     style={{ marginLeft: 4, cursor: 'pointer' }}
                  >
                     <img
                        src={`${item.profile}`}
                        className="friendImage"
                        alt=""
                     />
                     <p style={{ marginTop: -2 }}>{item.username}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default ProfileLeftbar;
