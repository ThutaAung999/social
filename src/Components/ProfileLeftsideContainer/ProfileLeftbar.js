import './profileleftbar.css';
import image from '../Images/Profile.png';
import image1 from '../Images/image1.jpg';
import image2 from '../Images/image2.jpg';
import image3 from '../Images/image3.jpg';
import image4 from '../Images/image4.jpg';
import image5 from '../Images/image5.jpg';
import image6 from '../Images/image6.jpg';
const ProfileLeftbar = () => {
   return (
      <div className="ProfileLeftbar">
         <div className="NotificationsContainer">
            <img src={`${image}`} className="ProfileImageCover" alt="" />

            <div
               style={{ display: 'flex', alignItems: 'center', marginTop: -30 }}
            >
               <img src={`${image3}`} className="ProfilepageImage" alt="" />
               <div>
                  <p
                     style={{
                        marginLeft: '6px',
                        marginTop: '20px',
                        color: 'black',
                        textAlign: 'start',
                     }}
                  >
                     Suman
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
                  Friends
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
            <h3>Your fireneds</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
               <p style={{ marginLeft: 10 }}>Friends</p>
               <p style={{ marginRight: 10, color: '#aaa' }}>See all</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: 5 }}>
               <div style={{ marginLeft: 4 }}>
                  <img src={`${image1}`} className="friendImage" alt="" />
                  <p style={{ marginTop: -2 }}>Aung Aung</p>
               </div>
               <div style={{ marginLeft: 4 }}>
                  <img src={`${image2}`} className="friendImage" alt="" />
                  <p style={{ marginTop: -2 }}>Su Su</p>
               </div>
               <div style={{ marginLeft: 4 }}>
                  <img src={`${image3}`} className="friendImage" alt="" />
                  <p style={{ marginTop: -2 }}>Chaw Chaw </p>
               </div>
               <div style={{ marginLeft: 4 }}>
                  <img src={`${image4}`} className="friendImage" alt="" />
                  <p style={{ marginTop: -2 }}>Win Win</p>
               </div>
               <div style={{ marginLeft: 4 }}>
                  <img src={`${image5}`} className="friendImage" alt="" />
                  <p style={{ marginTop: -2 }}>Gold Spider</p>
               </div>
               ``{' '}
               <div style={{ marginLeft: 4 }}>
                  <img src={`${image6}`} className="friendImage" alt="" />
                  <p style={{ marginTop: -2 }}>Pwint Oo</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProfileLeftbar;
