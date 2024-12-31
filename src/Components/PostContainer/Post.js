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

   const handleLike = () => {
      if (like === LikeIcon) {
         setLike(anotherLikeIcon);
         setCount(count + 1);
      } else {
         setLike(LikeIcon);
         setCount(count - 1);
      }
      console.log(count);
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
                  မည်သူမဆို တက်ရောက်နိုင်သော အတန်းလည်းဖြစ်ပါသည်။ Cyber Security
                  မှာပါဝင်တဲ့အဓိက လုပ်ဆောင်နေသော
                  နည်းပညာအကြောင်းများကိုသင်ကြားရှင်းလင်းပေးမည်ဖြစ်ပြီး
                  နည်းမှန်လမ်းမှန်ဖြင့် အချိန်တိုအတွင်း ဝါသနာပါသည့်
                  အသက်မွေးလမ်းကြောင်းတစ်ခုကို နားလည်သဘောပေါက်နိုင်စေရန်
                  ရည်ရွယ်ပါသည်။ မှန်ကန်သောလမ်းကြောင်းတစ်ခုကို သေချာနားလည်မှသာ
                  နည်းလမ်းမှန်ရွေးချယ်နိုင်သည် ဖြစ်သည့်အတွက် Cyber Security
                  Foundation Class ကိုဖွင့်လှစ်လိုက်ပါသည်။ Videos Lessons
                  ဖြင့်သင်ကြားပေးသော အတန်းဖြစ်သည့်အတွက်လည်း
                  အဆင်ပြေသည့်အချိန်တွင်လေ့လာနိုင်ပါသည်။ စိတ်ဝင်စားပါက
                  အသေးစိတ်ကို Messenger ကတဆင့်မေးမြန်းနိုင်ပါသည်။
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
            </div>
         </div>
      </div>
   );
};

export default Post;
