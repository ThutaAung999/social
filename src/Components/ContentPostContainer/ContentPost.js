import './contentpost.css';
//import profileImage from '../Images/profile.jpeg';
import imageIcon from '../Images/gallery.png';
import emojiIcon from '../Images/cat-face.png';
import videoIcon from '../Images/video.png';
import { useSelector } from 'react-redux';
import app from '../../firebase';
import {
   getStorage,
   ref,
   uploadBytesResumable,
   getDownloadURL,
} from 'firebase/storage';
import { useState } from 'react';

const ContentPost = () => {
   const userDetails = useSelector((state) => state.user);
   let user = userDetails.user;
   let id = user?.user?._id;
   // console.log('id in mainPost:', id);

   const accessToken = user.accessToken;

   const profileImage = user?.user?.profile;
   const [file, setFile] = useState(null);
   const [file2, setFile2] = useState(null);
   const [title, setTile] = useState('');
   const [imagePre, setImagePre] = useState(null);
   const [VideoPre, setVideoPre] = useState(null);

   console.log('file?.name :', file?.name);
   console.log('file2?.name :', file2?.name);

   const handlePost = (e) => {
      e.preventDefault(); // brower refresh  ကို ဖယ်ဖို့  အဓိကသုံး

      if (file !== null) {
         const fileName = new Date().getTime() + file?.name;

         const storage = getStorage(app);
         const storageRef = ref(storage, fileName);

         const uploadTask = uploadBytesResumable(storageRef, file);

         uploadTask.on(
            'state_changed',
            (snapshot) => {
               // Observe state change events such as progress, pause, and resume
               // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
               const progress =
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
               console.log('Upload is ' + progress + '% done');
               switch (snapshot.state) {
                  case 'paused':
                     console.log('Upload is paused');
                     break;
                  case 'running':
                     console.log('Upload is running');
                     break;
               }
            },
            (error) => {
               // Handle unsuccessful uploads
            },
            () => {
               // Handle successful uploads on complete
               // For instance, get the download URL: https://firebasestorage.googleapis.com/...
               getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                  // console.log('File available at', downloadURL);
                  fetch('http://localhost:5000/api/post/user/post', {
                     method: 'POST',
                     headers: {
                        'Content-Type': 'application/JSON',
                        token: accessToken,
                     },
                     body: JSON.stringify({
                        title: title,
                        image: downloadURL,
                        video: '',
                     }),
                  }).then((data) => {
                     alert('Your Post was upload successfully');
                     window.location.reload(true);
                  });
               });
            },
         );
      } else if (file2 !== null) {
         const fileName = new Date().getTime() + file2?.name;

         const storage = getStorage(app);
         const storageRef = ref(storage, fileName);

         const uploadTask = uploadBytesResumable(storageRef, file2);

         uploadTask.on(
            'state_changed',
            (snapshot) => {
               // Observe state change events such as progress, pause, and resume
               // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
               const progress =
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
               console.log('Upload is ' + progress + '% done');
               switch (snapshot.state) {
                  case 'paused':
                     console.log('Upload is paused');
                     break;
                  case 'running':
                     console.log('Upload is running');
                     break;
               }
            },
            (error) => {
               // Handle unsuccessful uploads
            },
            () => {
               // Handle successful uploads on complete
               // For instance, get the download URL: https://firebasestorage.googleapis.com/...
               getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                  //console.log('Video available at', downloadURL);
                  fetch(`http://localhost:5000/api/post/user/post`, {
                     method: 'POST',
                     headers: {
                        'Content-Type': 'application/JSON',
                        token: accessToken,
                     },
                     body: JSON.stringify({
                        title: title,
                        video: downloadURL,
                        image: '',
                     }),
                  }).then((data) => {
                     alert('Your Post was upload successfully');
                     window.location.reload(true);
                  });
               });
            },
         );
      } else {
         fetch(`http://localhost:5000/api/post/user/post`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/JSON', token: accessToken },
            body: JSON.stringify({ title: title, video: '', image: '' }),
         }).then((data) => {
            alert('Your Post was upload successfully');
            window.location.reload(true);
         });
      }
   };
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
                  onChange={(e) => setTile(e.target.value)}
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
                  <label htmlFor="file">
                     <img src={`${imageIcon}`} className="icon" alt="" />
                     <input
                        type="file"
                        id="file"
                        style={{ display: 'none' }}
                        onChange={(e) => [
                           //we need only one image
                           setFile(e.target.files[0]),
                           // setImagePre(URL.createObjectURL(e.target.files[0])),
                        ]}
                     />
                  </label>
                  <img src={`${emojiIcon}`} className="icon" alt="" />
                  <label htmlFor="file2">
                     <img src={`${videoIcon}`} className="icon" alt="" />
                     <input
                        type="file"
                        id="file2"
                        style={{ display: 'none' }}
                        onChange={(e) => [
                           //we need only one video
                           setFile2(e.target.files[0]),
                        ]}
                     />
                  </label>
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
                  onClick={handlePost}
               >
                  Post
               </button>
            </div>
         </div>
      </div>
   );
};

export default ContentPost;
