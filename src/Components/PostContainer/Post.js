import './post.css';
import profileImage from '../Images/Profile.png';
import LikeIcon from '../Images/like.png';
import CommentIcon from '../Images/speech-bubble.png';
import ShareIcon from '../Images/share.png';
import MoreOption from '../Images/more.png';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import anotherLikeIcon from '../Images/setLike.png';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Post = ({ post }) => {
   // console.log('post in post  (post.post)', post);
   const userDetails = useSelector((state) => state.user);
   let loggedInUser = userDetails.user;

   //loggedInUser ရဲ့ id ကိုပဲထုတ်ယူတာ,
   // post ကို like လုပ်ပြီးသားလား မလုပ်သေးဘူးလားဆုံးဖြတ်ဖို့သုံး
   let userId = loggedInUser?.user?._id;
   const accessToken = loggedInUser?.accessToken;

   //postတင်တဲ့userရဲ့ id,username,profile,like,followers,followings..စတဲ့ အသေးစိတ်တွေကိုယူပြီး render လုပ်ဖို့သုံး
   const id = post?.user?._id || post?.user;

   const [user, setUser] = useState([]);

   useEffect(() => {
      const getUser = async () => {
         try {
            const res = await axios.get(
               `http://localhost:5000/api/user/post/user/details/${id}`,
            );
            setUser(res.data);
         } catch (error) {
            console.log('Some error occurs :', error);
         }
      };
      getUser();
   }, []);

   const [like, setLike] = useState([
      post?.like?.includes(userId) ? anotherLikeIcon : LikeIcon,
   ]);
   const [count, setCount] = useState(post?.like?.length);
   const [comments, setComments] = useState(post?.comments ?? []);
   const [commentwriting, setCommentwriting] = useState('');
   const [show, setShow] = useState(false);

   const handleLike = async () => {
      if (like == LikeIcon) {
         await fetch(`http://localhost:5000/api/post/${post?._id}/like`, {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json',
               token: accessToken,
            },
         });
         setLike(anotherLikeIcon);
         setCount(count + 1);
      } else {
         await fetch(`http://localhost:5000/api/post/${post?._id}/like`, {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json',
               token: accessToken,
            },
         });
         setLike(LikeIcon);
         setCount(count - 1);
      }
      //console.log(count);
   };

   const addComment = async () => {
      const comment = {
         postid: `${post?._id}`,
         username: `${loggedInUser?.user?.username}`,
         comment: `${commentwriting}`,
         profile: `${loggedInUser?.user?.profile}`,
      };
      await fetch('http://localhost:5000/api/post/comment/post', {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/Json',
            token: accessToken,
         },
         body: JSON.stringify(comment),
      });
      setComments(comments.concat(comment));
   };

   const handleComment = () => {
      if (commentwriting.trim() === '') return; // Prevent empty comments
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
                  {user?.profile == '' ? (
                     <img
                        src={`${profileImage}`}
                        className="postImage"
                        alt="profile"
                     />
                  ) : (
                     <img
                        src={`${user?.profile}`}
                        className="postImage"
                        alt="profile"
                     />
                  )}

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
                        following by....{/* {user?.username} */}
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
                  {post?.title}
               </p>
               <img src={`${post?.image}`} className="postImages" alt="" />
               <div style={{ display: 'flex' }}>
                  <div style={{ display: 'flex', marginLeft: '10px' }}>
                     <div
                        style={{
                           display: 'flex',
                           alignItems: 'center',
                           cursor: 'pointer',
                        }}
                     >
                        <img
                           src={`${like}`}
                           className="iconsForPost"
                           alt=""
                           onClick={handleLike}
                        />
                        <p style={{ marginLeft: '5px' }}> {count} Likes</p>
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
                           {comments?.length} comments
                        </p>
                     </div>
                  </div>
                  <div
                     key={comments?._id}
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
                           src={`${loggedInUser?.user?.profile}`}
                           className="postImage"
                           alt="profile"
                        />
                        <input
                           type="text"
                           placeholder="Write a comment..."
                           className="commentInput"
                           value={commentwriting}
                           onChange={(e) => setCommentwriting(e.target.value)}
                        />
                        <button
                           className="addCommentbtn"
                           onClick={handleComment}
                        >
                           Post
                        </button>
                     </div>

                     {Array.isArray(comments) &&
                        comments.map((comment) => (
                           <div
                              key={comment?._id}
                              style={{ alignItems: 'center' }}
                           >
                              <div
                                 style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                 }}
                              >
                                 <img
                                    src={`${comment?.profile}`}
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
                                    {comment?.username}
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
                                 {comment?.comment}
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
Post.propTypes = {
   post: PropTypes.object.isRequired,
};

export default Post;
