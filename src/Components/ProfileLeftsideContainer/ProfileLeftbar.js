import './profileleftbar.css';
import image from '../Images/profile.jpeg';
//import image3 from '../Images/image3.jpg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
const ProfileLeftbar = () => {
   let location = useLocation();
   let id = location.pathname.split('/')[2];
 
   const userDetails = useSelector((state) => state.user);
   const user = userDetails.user;
   const accessToken = user?.accessToken;

   const [follow, setUnFollow] = useState([
      user?.user?.following.includes(id) ? 'UnFollow' : 'Follow',
   ]);

   const [users, setuser] = useState([]);
   useEffect(() => {
      const getuser = async () => {
         try {
            const res = await axios.get(
               `http://localhost:5000/api/user/post/user/details/${id}`,
            );
            setuser(res.data);
         } catch (error) {
            console.log({ message: 'Some error occured', error: error });
         }
      };
      getuser();
   }, []);

   const followersCounter = users?.followers?.length;
   const followingCounter = users?.following?.length;

   const [followingUser, setFollowingUser] = useState([]);
   useEffect(() => {
      const getFollowingUser = async () => {
         try {
            const res = await axios.get(
               `http://localhost:5000/api/post/following/${id}`,
            );
            setFollowingUser(res.data);
         } catch (error) {
            console.log('error :', error);
         }
      };
      getFollowingUser();
   }, []);

   const handleFollow = async () => {
      if (follow === 'Follow') {
         console.log('follow :', follow);
         await fetch(`http://localhost:5000/api/user/following/${id}`, {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json',
               token: accessToken,
            },
            body: JSON.stringify({ user: `${user?.user?._id}` }),
         });
         setUnFollow('UnFollow');
      } else {
         await fetch(`http://localhost:5000/api/user/following/${id}`, {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json',
               token: accessToken,
            },
            body: JSON.stringify({ user: `${user?.user?._id}` }),
         });
         setUnFollow('Follow');
      }
   };

   console.log('followingUser :', followingUser);

   return (
      <div className="ProfileLeftbar">
         <div className="NotificationsContainer">
            <img src={`${image}`} className="ProfileImageCover" alt="" />

            <div
               style={{ display: 'flex', alignItems: 'center', marginTop: -30 }}
            >
               <img
                  src={`${users?.profile}`}
                  className="ProfilepageImage"
                  alt=""
               />
               <div>
                  <p
                     style={{
                        marginLeft: '6px',
                        marginTop: '20px',
                        color: 'black',
                        textAlign: 'start',
                     }}
                  >
                     {users?.username}
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
                  Followings
               </p>
               <p
                  style={{
                     color: 'black',
                     marginRight: 20,
                     fontSize: 12,
                     marginTop: 17,
                  }}
               >
                  {followingCounter}
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
                  {followersCounter}
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
            {/* our logged in user  is not the same as the user who is being followed */}
            {/* user?.user?.id!==id က မတူရင်  Follow  လူပ်,  တူရင်  Edit Bio*/}
            {user?.user?._id !== id ? (
               <div onClick={handleFollow}>
                  <button
                     style={{
                        width: '100%',
                        paddintTop: 7,
                        paddingBottom: 7,
                        border: 'none',
                        backgroundColor: 'green',
                        color: 'white',
                     }}
                  >
                     {follow}
                  </button>
               </div>
            ) : (
               <div>
                  <button
                     style={{
                        width: '100%',
                        paddingTop: 7,
                        paddingBottom: 7,
                        border: 'none',
                        backgroundColor: 'green',
                        color: 'white',
                     }}
                  >
                     Edit Bio
                  </button>
               </div>
            )}
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
                  <Link to={`/Profile/${item._id}`} key={item._id}>
                     <div
                        style={{ marginLeft: 4, cursor: 'pointer' }}
                        key={item._id}
                     >
                        <img
                           src={`${item.profile}`}
                           className="friendImage"
                           alt=""
                        />
                        <p style={{ marginTop: -2 }}>{item.username}</p>
                     </div>
                  </Link>
               ))}
            </div>
         </div>
      </div>
   );
};

export default ProfileLeftbar;
