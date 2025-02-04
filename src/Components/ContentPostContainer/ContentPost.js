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

   const accessToken = user?.accessToken;

   const profileImage = user?.user?.profile;
   const [file, setFile] = useState(null);
   const [file2, setFile2] = useState(null);
   const [title, setTile] = useState('');
   const [imagePre, setImagePre] = useState(null);
   const [VideoPre, setVideoPre] = useState(null);

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
                  fetch('http://localhost:5000/api/post/user/post', {
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
         fetch('http://localhost:5000/api/post/user/post', {
            method: 'POST',
            headers: { 'Content-Type': 'application/JSON', token: accessToken },
            body: JSON.stringify({ title: title, video: '', image: '' }),
         }).then((data) => {
            alert('Your Post was upload successfully');
            window.location.reload(true);
         });
      }
   };

   console.log('file?.name :', file?.name);
   console.log('file2?.name :', file2?.name);

   return (
      <div>
         <div className="ContentUploadContainer">
            <div style={{ display: 'flex', alignItems: 'center', padding: 10 }}>
               <img src={`${profileImage}`} className="profileimage" alt="" />
               <input
                  type="text"
                  className="contentWritingpart"
                  placeholder="Write your real thought....."
                  onChange={(e) => setTile(e.target.value)}
               />
            </div>
            <div style={{ marginLeft: '10px' }}>
               {imagePre !== null ? (
                  <img
                     src={imagePre}
                     style={{
                        width: '410px',
                        height: '420px',
                        objectFit: 'cover',
                        borderRadius: '10px',
                     }}
                     alt=""
                  />
               ) : VideoPre !== null ? (
                  <video
                     className="PostImages"
                     width="500"
                     height="500"
                     controls
                  >
                     <source src={VideoPre} type="video/mp4" />
                  </video>
               ) : (
                  ''
               )}
               <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
               >
                  <div>
                     <label htmlFor="file">
                        <img src={`${imageIcon}`} className="icons" alt="" />
                        <input
                           type="file"
                           name="file"
                           id="file"
                           style={{ display: 'none' }}
                           onChange={(e) => {
                              const selectedFile = e.target.files[0];
                              if (selectedFile) {
                                 setFile(selectedFile);
                                 setImagePre(URL.createObjectURL(selectedFile));
                              }
                           }}
                        />
                     </label>
                     <img src={`${emojiIcon}`} className="icons" alt="" />
                     <label htmlFor="file2">
                        <img src={`${videoIcon}`} className="icons" alt="" />
                        <input
                           type="file"
                           name="file2"
                           id="file2"
                           style={{ display: 'none' }}
                           onChange={(e) => {
                              const selectedFile = e.target.files[0];
                              if (selectedFile) {
                                 setFile2(selectedFile);
                                 setVideoPre(URL.createObjectURL(selectedFile));
                              }
                           }}
                        />
                     </label>
                  </div>
                  <button
                     style={{
                        height: '30px',
                        marginRight: '12px',
                        marginTop: '40px',
                        paddingLeft: '20px',
                        paddingRight: '20px',
                        paddingTop: 6,
                        paddingBottom: 6,
                        border: 'none',
                        backgroundColor: 'black',
                        color: 'white',
                        borderRadius: '5px',
                        cursor: 'pointer',
                     }}
                     onClick={handlePost}
                  >
                     Post
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};
export default ContentPost;
