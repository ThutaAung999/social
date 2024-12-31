import './contentpost.css';
import profileImage from '../Images/Profile.png';
import imageIcon from '../Images/gallery.png';
import emojiIcon from '../Images/cat-face.png';
import videoIcon from '../Images/video.png';

const ContentPost = () => {
   return (
      <div>
         <div className="ContentUploadContainer">
            <div
               style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '10px',
               }}
            >
               <img
                  src={`${profileImage}`}
                  className="profileImage"
                  alt="profile"
               />
               <input
                  type="text"
                  className="contentWritingpart"
                  placeholder="Write your real thougt......."
               />
            </div>

            <div
               style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
               }}
            >
               <div
                  style={{
                     display: 'flex',
                     marginLeft: '5px',
                     alignItems: 'center',
                     gap: '10px',
                  }}
               >
                  <img src={`${imageIcon}`} className="icon" alt="" />
                  <img src={`${emojiIcon}`} className="icon" alt="" />
                  <img src={`${videoIcon}`} className="icon" alt="" />
               </div>
               <button
                  className="postButton"
                  style={{
                     backgroundColor: 'black',
                     color: 'white',
                     border: 'none',
                     borderRadius: '5px',
                     cursour: 'pointer',
                  }}
               >
                  Post
               </button>
            </div>
         </div>
      </div>
   );
};

export default ContentPost;
