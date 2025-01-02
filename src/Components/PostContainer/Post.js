import './post.css';
import profileImage from '../Images/Profile.png';
import LikeIcon from '../Images/like.png';
import CommentIcon from '../Images/speech-bubble.png';
import ShareIcon from '../Images/share.png';
import MoreOption from '../Images/more.png';
import { useState } from 'react';
import anotherLikeIcon from '../Images/setLike.png';
const Post = () => {
   const [like, setLike] = useState(LikeIcon);
   const [count, setCount] = useState(10);
   const [Comments, setComments] = useState([]);
   const [Commentwriting, setCommentwriting] = useState('');

   const [show, setShow] = useState(false);

   const handleLike = () => {
      if (like === LikeIcon) {
         setLike(anotherLikeIcon);
         setCount(count + 1);
      } else {
         setLike(LikeIcon);
         setCount(count - 1);
      }
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

   console.log(Comments);

   const handleshow = () => {
      if (show === false) {
         setShow(true);
      } else {
         setShow(false);
      }
   };
   return (
      <div className="postContainer">
         <div className="subPostContainer">
            <div>
               <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                     src={`${profileImage}`}
                     className="postImage"
                     alt="profile"
                  />
                  <div>
                     <p style={{ marginLeft: '5px', textAlign: 'start' }}>
                        Sumen
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
                  Cyber Security Foundation Course Cyber Security နဲ့ပတ်သက်ပြီး
                  အခုမှစလေ့လာမည့်သူတစ်ယောက်ဖြစ်ပါက Creatigon ရဲ့
                  အခြေခံအကျဆုံးအတန်းဖြစ်သည့် Road to Cyber Security
                  ဆိုသည့်အတန်းကို တက်ရောက်နိုင်ပါသည်။ Cyber Security
                  အပိုင်းကိုစိတ်ဝင်စားသောသူများနှင့် ကွန်ပျူတာ အခြေခံရှိသည့်
                  ......
               </p>
               <img src={`${profileImage}`} className="postImages" alt="" />
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
                        <p style={{ marginLeft: '5px' }}> {count} Likes</p>``
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
                        <p style={{ marginLeft: '5px' }}> 100K Comments</p>
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
