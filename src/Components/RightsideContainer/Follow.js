import { useState } from 'react';
import addFriends from '../Images/add-user.png';
import UserToFollow from '../Images/afterFollowImg.png';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Follow = ({ userdetails }) => {
   const userDetails = useSelector((state) => state.user);
   const user = userDetails?.user;
   const id = user?.user?._id;
   const accessToken = user?.accessToken;
   const [follow, setFollow] = useState(addFriends);

   const handleFollow = async (e) => {
      await fetch(
         `http://localhost:5000/api/user/following/${userdetails?._id}`,
         {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json',
               token: accessToken,
            },
            body: JSON.stringify({ user: `${id}` }),
         },
      );
      setFollow(UserToFollow);
   };
   // console.log('userDetails in follow', userDetails);
   return (
      <div
         key={userdetails?._id}
         style={{ marginTop: '-10px' }}
         id={userdetails?._id}
      >
         <div
            style={{
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'space-between',
            }}
         >
            <Link to={`/Profile/${userdetails._id}`}>
               <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                     src={`${userdetails?.profile}`}
                     className="profileImage"
                     alt=""
                  />
                  <div>
                     <p style={{ marginLeft: '10px', textAlign: 'start' }}>
                        {userdetails?.username}
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
            </Link>
            <div
               style={{
                  backgroundColor: '#aaa',
                  padding: '10px',
                  marginRight: 13,
                  borderRadius: '50%',
                  cursor: 'pointer',
               }}
               onClick={(e) => handleFollow(userdetails?._id)}
            >
               <img className="addfriend" src={`${follow}`} alt="" />
            </div>
         </div>
      </div>
   );
};
//Thanks to Copilot for this code
Follow.propTypes = {
   userdetails: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      profile: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
   }).isRequired,
};

export default Follow;
