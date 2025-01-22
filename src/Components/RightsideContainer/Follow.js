import { useState } from 'react';
import addFriends from '../Images/add-user.png';
import UserToFollow from '../Images/afterFollowImg.png';
import PropTypes from 'prop-types';

const Follow = ({ userDetails }) => {
   const accessToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2VkYWUzMjMxNjM0Y2FkMTliY2ViZiIsInVzZXJuYW1lIjoiYXVuZ2F1bmciLCJpYXQiOjE3MzcwOTYyOTV9.jUW6464Tyh5J9Pf3mKXnaPPnEK0D_sQNIKFxEnFvKlE';
   const [follow, setFollow] = useState(addFriends);
   const handleFollow = async (e) => {
      // e   is   id
      // console.log(e);
      const user = '677edae3231634cad19bcebf'; //aung aung'id
      console.log('user:', user);
      await fetch(
         `http://localhost:5000/api/user/following/${userDetails._id}`,
         {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json',
               token: accessToken,
            },
            body: JSON.stringify({ user }),
         },
      );

      setFollow(UserToFollow);
   };
   // console.log('userDetails in follow', userDetails);
   return (
      <div
         key={userDetails._id}
         style={{ marginTop: '-10px' }}
         id={userDetails._id}
      >
         <div
            style={{
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'space-between',
            }}
         >
            <div style={{ display: 'flex', alignItems: 'center' }}>
               <img
                  src={`${userDetails.profile}`}
                  className="profileImage"
                  alt=""
               />
               <div>
                  <p style={{ marginLeft: '10px', textAlign: 'start' }}>
                     {userDetails.username}
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
               onClick={(e) => handleFollow(userDetails._id)}
            >
               <img className="addfriend" src={`${follow}`} alt="" />
            </div>
         </div>
      </div>
   );
};
//Thanks to Copilot for this code
Follow.propTypes = {
   userDetails: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      profile: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
   }).isRequired,
};

export default Follow;
