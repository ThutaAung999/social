import './profilerightbar.css';
//import ads from '../Images/ads.jpg';
import image1 from '../Images/image1.jpg';
import image2 from '../Images/image2.jpg';
import image3 from '../Images/image3.jpg';
import image4 from '../Images/image4.jpg';
import image5 from '../Images/image5.jpg';
import image6 from '../Images/image6.jpg';
import image7 from '../Images/image1.jpg';

import addFriends from '../Images/add-user.png';
const ProfileRightbar = () => {
   return (
      <div className="ProfileRightbar">
         <div className="ProfilerightContainer">
            <h3>Friend Requests</h3>
            <div>
               <div
                  style={{
                     display: 'flex',
                     alignItems: 'center',
                     marginLeft: '10px',
                     marginTop: '10px',
                     cursor: 'pointer',
                  }}
               >
                  <img src={`${image2}`} className="friendsImage" alt="" />
                  <p style={{ textAlign: 'start', marginLeft: '10px' }}>
                     Maw want to make you friend
                  </p>
               </div>
               <div
                  style={{
                     display: 'flex',
                     alignItems: 'center',
                     marginLeft: '10px',
                     marginTop: '10px',
                     cursor: 'pointer',
                  }}
               >
                  <img src={`${image3}`} className="friendsImage" alt="" />
                  <p style={{ textAlign: 'start', marginLeft: '10px' }}>
                     Sider want to make you friend
                  </p>
               </div>
               <div
                  style={{
                     display: 'flex',
                     alignItems: 'center',
                     marginLeft: '10px',
                     marginTop: '10px',
                     cursor: 'pointer',
                  }}
               >
                  <img src={`${image1}`} className="friendsImage" alt="" />
                  <p style={{ textAlign: 'start', marginLeft: '10px' }}>
                     Joe want to make you friend
                  </p>
               </div>
            </div>
         </div>

         <div className="rightContainer2">
            <h3 style={{ textAlign: 'start', marginLeft: '10px' }}>
               {' '}
               Suggested for you
            </h3>
            <div style={{ marginTop: '-10px' }}>
               <div
                  style={{
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'space-between',
                  }}
               >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                     <img src={`${image2}`} className="profileImage" alt="" />
                     <div>
                        <p style={{ marginLeft: '10px', textAlign: 'start' }}>
                           Suman
                        </p>
                        <p
                           style={{
                              marginLeft: '10px',
                              textAlign: 'start',
                              marginTop: '-16px',
                              fontSize: 11,
                              color: '#aaa',
                           }}
                        >
                           Suggested for you
                        </p>
                     </div>
                  </div>
                  <div
                     style={{
                        backgroundColor: '#aaa',
                        padding: '10px',
                        marginRight: 13,
                        borderRadius: '50%',
                        cursor: 'pointer',
                     }}
                  >
                     <img className="addfriend" src={`${addFriends}`} alt="" />
                  </div>
               </div>
            </div>

            <div style={{ marginTop: '-10px' }}>
               <div
                  style={{
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'space-between',
                  }}
               >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                     <img src={`${image5}`} className="profileImage" alt="" />
                     <div>
                        <p style={{ marginLeft: '10px', textAlign: 'start' }}>
                           Zaw Zaw
                        </p>
                        <p
                           style={{
                              marginLeft: '10px',
                              textAlign: 'start',
                              marginTop: '-16px',
                              fontSize: 11,
                              color: '#aaa',
                           }}
                        >
                           Followed by Suman
                        </p>
                     </div>
                  </div>
                  <div
                     style={{
                        backgroundColor: '#aaa',
                        padding: '10px',
                        marginRight: 13,
                        borderRadius: '50%',
                        cursor: 'pointer',
                     }}
                  >
                     <img className="addfriend" src={`${addFriends}`} alt="" />
                  </div>
               </div>
            </div>

            <div style={{ marginTop: '-10px' }}>
               <div
                  style={{
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'space-between',
                  }}
               >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                     <img src={`${image4}`} className="profileImage" alt="" />
                     <div>
                        <p style={{ marginLeft: '10px', textAlign: 'start' }}>
                           Myo Thander
                        </p>
                        <p
                           style={{
                              marginLeft: '10px',
                              textAlign: 'start',
                              marginTop: '-16px',
                              fontSize: 11,
                              color: '#aaa',
                           }}
                        >
                           Followed by Suman
                        </p>
                     </div>
                  </div>
                  <div
                     style={{
                        backgroundColor: '#aaa',
                        padding: '10px',
                        marginRight: 13,
                        borderRadius: '50%',
                        cursor: 'pointer',
                     }}
                  >
                     <img className="addfriend" src={`${addFriends}`} alt="" />
                  </div>
               </div>
            </div>

            <div style={{ marginTop: '-10px' }}>
               <div
                  style={{
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'space-between',
                  }}
               >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                     <img src={`${image6}`} className="profileImage" alt="" />
                     <div>
                        <p style={{ marginLeft: '10px', textAlign: 'start' }}>
                           Phyu Pyar
                        </p>
                        <p
                           style={{
                              marginLeft: '10px',
                              textAlign: 'start',
                              marginTop: '-16px',
                              fontSize: 11,
                              color: '#aaa',
                           }}
                        >
                           Followed by Suman
                        </p>
                     </div>
                  </div>
                  <div
                     style={{
                        backgroundColor: '#aaa',
                        padding: '10px',
                        marginRight: 13,
                        borderRadius: '50%',
                        cursor: 'pointer',
                     }}
                  >
                     <img className="addfriend" src={`${addFriends}`} alt="" />
                  </div>
               </div>
            </div>

            <div style={{ marginTop: '-10px' }}>
               <div
                  style={{
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'space-between',
                  }}
               >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                     <img src={`${image7}`} className="profileImage" alt="" />
                     <div>
                        <p style={{ marginLeft: '10px', textAlign: 'start' }}>
                           Ei Ei
                        </p>
                        <p
                           style={{
                              marginLeft: '10px',
                              textAlign: 'start',
                              marginTop: '-16px',
                              fontSize: 11,
                              color: '#aaa',
                           }}
                        >
                           Followed by Suman
                        </p>
                     </div>
                  </div>
                  <div
                     style={{
                        backgroundColor: '#aaa',
                        padding: '10px',
                        marginRight: 13,
                        borderRadius: '50%',
                        cursor: 'pointer',
                     }}
                  >
                     <img className="addfriend" src={`${addFriends}`} alt="" />
                  </div>
               </div>
            </div>

            <div style={{ marginTop: '-10px' }}>
               <div
                  style={{
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'space-between',
                  }}
               >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                     <img src={`${image3}`} className="profileImage" alt="" />
                     <div>
                        <p style={{ marginLeft: '10px', textAlign: 'start' }}>
                           Chit Chit
                        </p>
                        <p
                           style={{
                              marginLeft: '10px',
                              textAlign: 'start',
                              marginTop: '-16px',
                              fontSize: 11,
                              color: '#aaa',
                           }}
                        >
                           Followed by Suman
                        </p>
                     </div>
                  </div>
                  <div
                     style={{
                        backgroundColor: '#aaa',
                        padding: '10px',
                        marginRight: 13,
                        borderRadius: '50%',
                        cursor: 'pointer',
                     }}
                  >
                     <img className="addfriend" src={`${addFriends}`} alt="" />
                  </div>
               </div>
            </div>

            <div style={{ marginTop: '-10px' }}>
               <div
                  style={{
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'space-between',
                  }}
               >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                     <img src={`${image1}`} className="profileImage" alt="" />
                     <div>
                        <p style={{ marginLeft: '10px', textAlign: 'start' }}>
                           Toe Toe
                        </p>
                        <p
                           style={{
                              marginLeft: '10px',
                              textAlign: 'start',
                              marginTop: '-16px',
                              fontSize: 11,
                              color: '#aaa',
                           }}
                        >
                           Followed by Suman
                        </p>
                     </div>
                  </div>
                  <div
                     style={{
                        backgroundColor: '#aaa',
                        padding: '10px',
                        marginRight: 13,
                        borderRadius: '50%',
                        cursor: 'pointer',
                     }}
                  >
                     <img className="addfriend" src={`${addFriends}`} alt="" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProfileRightbar;
