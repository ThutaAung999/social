import './post.css';
import profileImage from '../Images/Profile.png';
import LikeIcon from '../Images/like.png';
import CommentIcon from '../Images/speech-bubble.png';
import ShareIcon from '../Images/share.png';
import MoreOption from '../Images/more.png';
import { useEffect, useState } from 'react';
import anotherLikeIcon from '../Images/setLike.png';
import axios from 'axios';
const Post = (detail) => {
  // console.log('detail in post', detail);
   // console.log(detail.detail.title);
   const [count, setCount] = useState(0);
   const [Comments, setComments] = useState([]);
   const [Commentwriting, setCommentwriting] = useState('');

   const [show, setShow] = useState(false);

   const [user, setUser] = useState([]);
   useEffect(() => {
      const getUser = async () => {
         try {// post ကိုတင်တဲ့  user's  details ကို ယူတာ
            const res = await axios.get(
               `http://localhost:5000/api/user/post/user/details/${detail?.detail.user}`,
            );
            setUser(res.data);
           //  console.log('res.data', res.data);
         } catch (error) {
            console.log('Some error occurs :', error);
         }
      };
      getUser();
   }, []);

   //console.log('user in post', user);
   //console.log('Post : ', post);
   //console.log('Post Title : ', post?.post.title);

   const handleLike = async () => {
      // if (like == LikeIcon) {
      //    await fetch(`http://localhost:5000/api/post/${post._id}/like`, {
      //       method: 'PUT',
      //       headers: {
      //          'Content-Type': 'application/json',
      //          token: accessToken,
      //       },
      //    });
      //    setLike(anotherLikeIcon);
      //    setCount(count + 1);
      // } else {
      //    await fetch(`http://localhost:5000/api/post/${post._id}/like`, {
      //       method: 'PUT',
      //       headers: {
      //          'Content-Type': 'application/json',
      //          token: accessToken,
      //       },
      //    });
      //    setLike(LikeIcon);
      //    setCount(count - 1);
      // }
      //console.log(count);
   };

   const addComment = () => {
      //fake data
      const comment = {
         id: 'gdsdsdsdsd33343dfdfdff',
         username: 'Sumen',
         title: `${Commentwriting}`,
      };
      //setComments(Comments.concat(comment));
      setComments([...Comments, comment]);
      /* setComments((prevComments) => {
         return [...prevComments, comment];
      }); */
   };

   const handleComment = () => {
      if (Commentwriting.trim() === '') return; // Prevent empty comments
      addComment();
      setCommentwriting(''); // Clear the input field
   };

   //console.log(Comments);

   const handleshow = () => {
      if (show === false) {
         setShow(true);
      } else {
         setShow(false);
      }
   };

   //console.log('user :', user);
   return (
      <div className="postContainer">
         <div className="subPostContainer">
            <div>
               <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                     src={`${user.profile}`}
                     className="postImage"
                     alt="profile"
                  />

                  <div>
                     <p style={{ marginLeft: '5px', textAlign: 'start' }}>
                        {user?.username}
                     </p>
                     <p
                        style={{
                           fontSize: '12px',
                           textAlign: 'start',
                           marginLeft: '5px',
                           marginTop: '-13px',
                           color: '#aaa',
                        }}
                     >
                        following by Sumen
                     </p>
                  </div>

                  <img src={`${MoreOption}`} className="moreIcons" alt="" />
               </div>
               <p
                  style={{
                     textAlign: 'start',
                     width: '96%',
                     marginLeft: '10px',
                     marginTop: '0px',
                  }}
               >
                  {detail?.detail?.title}
               </p>
               <img
                  src={`${detail?.detail?.image}`}
                  className="postImages"
                  alt=""
               />
               <div style={{ display: 'flex' }}>
                  <div style={{ display: 'flex', marginLeft: '10px' }}>
                     <div
                        style={{
                           display: 'flex',
                           alignItems: 'center',
                           cursor: 'pointer',
                        }}
                     >
                        {/* <img
                           src={`${like}`}
                           className="iconsForPost"
                           alt=""
                           onClick={handleLike}
                        /> */}
                        <p style={{ marginLeft: '5px' }}>
                           {detail?.detail?.like?.length} Likes
                        </p>
                     </div>
                     <div
                        style={{
                           display: 'flex',
                           alignItems: 'center',
                           marginLeft: '20px',
                           cursor: 'pointer',
                        }}
                     >
                        <img
                           src={`${CommentIcon}`}
                           className="iconsForPost"
                           alt=""
                           onClick={handleshow}
                        />
                        <p style={{ marginLeft: '5px' }}>
                           {detail?.detail?.comments?.length} comments
                        </p>
                     </div>
                  </div>
                  <div
                     style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: 200,
                        cursor: 'pointer',
                     }}
                  >
                     <img
                        src={`${ShareIcon}`}
                        className="iconsForPost"
                        alt=""
                     />
                     <p style={{ marginLeft: '5px' }}> Share</p>
                  </div>
               </div>

               {show === true ? (
                  <div style={{ padding: '10px' }}>
                     <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                           src={`${profileImage}`}
                           className="postImage"
                           alt="profile"
                        />
                        {/*  <p style={{ marginLeft: '6px' }}>Sumen</p> */}
                        <input
                           type="text"
                           placeholder="Write a comment..."
                           className="commentInput"
                           value={Commentwriting}
                           onChange={(e) => setCommentwriting(e.target.value)}
                        />
                        <button
                           className="addCommentbtn"
                           onClick={handleComment}
                        >
                           Post
                        </button>
                     </div>
                     {Comments.map((comment) => (
                        <div key={comment.id} style={{ alignItems: 'center' }}>
                           <div
                              style={{ display: 'flex', alignItems: 'center' }}
                           >
                              <img
                                 src={`${profileImage}`}
                                 className="postImage"
                                 alt="profile"
                              />
                              <p
                                 style={{
                                    marginLeft: '6px',
                                    fontSize: 18,
                                    marginTop: 6,
                                 }}
                              >
                                 {comment.username}
                              </p>
                           </div>

                           <p
                              style={{
                                 marginLeft: '55px',
                                 textAlign: 'start',
                                 marginTop: -16,
                                 fontSize: 20,
                              }}
                           >
                              {comment.title}
                           </p>

                           <p
                              style={{
                                 marginLeft: '55px',
                                 textAlign: 'start',
                                 marginTop: -10,
                                 color: '#aaa',
                                 fontSize: 11,
                              }}
                           >
                              Reply
                           </p>
                        </div>
                     ))}
                  </div>
               ) : (
                  ''
               )}
            </div>
         </div>
      </div>
   );
};

export default Post;
