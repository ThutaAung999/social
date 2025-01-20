//import React from 'react';
import './leftbar.css';
import image from '../Images/Profile.png';
import image1 from '../Images/image1.jpg';
import image2 from '../Images/image2.jpg';
import image3 from '../Images/image3.jpg';
import image4 from '../Images/image4.jpg';
import image5 from '../Images/image5.jpg';
import image6 from '../Images/image6.jpg';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Leftbar = () => {
   const accessToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2VkYWUzMjMxNjM0Y2FkMTliY2ViZiIsInVzZXJuYW1lIjoiYXVuZ2F1bmciLCJpYXQiOjE3MzcwOTYyOTV9.jUW6464Tyh5J9Pf3mKXnaPPnEK0D_sQNIKFxEnFvKlE';
   const [post, setPost] = useState([]);

   useEffect(() => {
      const getPost = async () => {
         try {
            const response = await axios.get(
               'http://localhost:5000/api/user/flw/677edae3231634cad19bcebf',
               {
                  headers: {
                     token: accessToken,
                  },
               },
            );
            setPost(response.data);
         } catch (error) {
            console.log(error);
         }
      };
      getPost();
   }, []);
   // console.log('Post in LeftSidebar:', post);

   return (
      <div className="leftbar">
         <div className="NotificationsContainer">
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
               <p style={{ marginLeft: '-14px' }}>Notifiations</p>
               <p style={{ color: '#aaa', marginLeft: '40px' }}>See all</p>
            </div>
            <div
               style={{ display: 'flex', alignItems: 'center', marginTop: -10 }}
            >
               <img src={`${image}`} className="notificationImg" alt="" />
               <p
                  style={{
                     marginLeft: '5px',
                     color: '#aaa',
                     fontSize: 13,
                     textAlign: 'start',
                     width: '120px',
                  }}
               >
                  Moe Moe started to follow you
               </p>
               <img src={`${image1}`} className="followinguserimage" alt="" />
            </div>
            <div
               style={{ display: 'flex', alignItems: 'center', marginTop: -10 }}
            >
               <img src={`${image}`} className="notificationImg" alt="" />
               <p
                  style={{
                     marginLeft: '5px',
                     color: '#aaa',
                     fontSize: 13,
                     textAlign: 'start',
                     width: '120px',
                  }}
               >
                  Suman started to follow you
               </p>
               <img src={`${image2}`} className="followinguserimage" alt="" />
            </div>
            <div
               style={{ display: 'flex', alignItems: 'center', marginTop: -10 }}
            >
               <img src={`${image2}`} className="notificationImg" alt="" />
               <p
                  style={{
                     marginLeft: '5px',
                     color: '#aaa',
                     fontSize: 13,
                     textAlign: 'start',
                     width: '120px',
                  }}
               >
                  Madan like your post
               </p>
               <img src={`${image3}`} className="likeImage" alt="" />
            </div>
            <div
               style={{ display: 'flex', alignItems: 'center', marginTop: -10 }}
            >
               <img src={`${image}`} className="notificationImg" alt="" />
               <p
                  style={{
                     marginLeft: '5px',
                     color: '#aaa',
                     fontSize: 13,
                     textAlign: 'start',
                     width: '120px',
                  }}
               >
                  Toe Toe started to follow you
               </p>
               <img src={`${image4}`} className="followinguserimage" alt="" />
            </div>
            <div
               style={{ display: 'flex', alignItems: 'center', marginTop: -10 }}
            >
               <img src={`${image6}`} className="notificationImg" alt="" />
               <p
                  style={{
                     marginLeft: '5px',
                     color: '#aaa',
                     fontSize: 13,
                     textAlign: 'start',
                     width: '120px',
                  }}
               >
                  Moe Moe started to follow you
               </p>
               <img src={`${image5}`} className="followinguserimage" alt="" />
            </div>
            <div
               style={{ display: 'flex', alignItems: 'center', marginTop: -10 }}
            >
               <img src={`${image3}`} className="notificationImg" alt="" />
               <p
                  style={{
                     marginLeft: '5px',
                     color: '#aaa',
                     fontSize: 13,
                     textAlign: 'start',
                     width: '120px',
                  }}
               >
                  Madan like your post
               </p>
               <img src={`${image6}`} className="likeImage" alt="" />
            </div>
            <div
               style={{ display: 'flex', alignItems: 'center', marginTop: -10 }}
            >
               <img src={`${image}`} className="notificationImg" alt="" />
               <p
                  style={{
                     marginLeft: '5px',
                     color: '#aaa',
                     fontSize: 13,
                     textAlign: 'start',
                     width: '120px',
                  }}
               >
                  Madan like your post
               </p>
               <img src={`${image}`} className="likeImage" alt="" />
            </div>
            <div
               style={{ display: 'flex', alignItems: 'center', marginTop: -10 }}
            >
               <img src={`${image}`} className="notificationImg" alt="" />
               <p
                  style={{
                     marginLeft: '5px',
                     color: '#aaa',
                     fontSize: 13,
                     textAlign: 'start',
                     width: '120px',
                  }}
               >
                  Madan like your post
               </p>
               <img src={`${image}`} className="likeImage" alt="" />
            </div>
         </div>

         {/* end of notifications */}

         <div className="NotificationsContainer">
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
               <p style={{ marginLeft: '-14px' }}>Explorers</p>
               <p style={{ color: '#aaa', marginLeft: '40px' }}>See all</p>
            </div>

            <div>
               {post.map((item) => (
                  <img
                     key={item._id}
                     src={`${item.image}`}
                     className="explorerImage"
                     alt=""
                  />
               ))}
               {/* <img src={`${image}`} className="explorerImage" alt="" />
               <img src={`${image1}`} className="explorerImage" alt="" />
               <img src={`${image2}`} className="explorerImage" alt="" />
               <img src={`${image3}`} className="explorerImage" alt="" />
               <img src={`${image4}`} className="explorerImage" alt="" />
               <img src={`${image5}`} className="explorerImage" alt="" />
               <img src={`${image6}`} className="explorerImage" alt="" />
               <img src={`${image}`} className="explorerImage" alt="" /> */}
            </div>
         </div>
      </div>
   );
};

export default Leftbar;
