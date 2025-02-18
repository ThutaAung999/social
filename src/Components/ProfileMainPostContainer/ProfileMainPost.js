import './profilemainPost.css';
import ContentPost from '../ContentPostContainer/ContentPost';
import CoverImage from '../Images/profile.jpeg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Post from '../ProfilePostContainer/Post';
import { useLocation } from 'react-router-dom';

const ProfileMainPost = () => {
   let location = useLocation();
   let userId = location.pathname.split('/')[2];
   const [post, setPost] = useState([]);
   useEffect(() => {
      const getPost = async () => {
         try {
            const res = await axios.get(
               `http://localhost:5000/api/post/get/post/${userId}`,
            );
            setPost(res.data);
         } catch (error) {
            console.log('error :', error);
         }
      };
      getPost();
   }, []);

   // console.log('post in ProfileMainPost :', post);

   return (
      <div className="profileMainPostContainer">
         <div>
            <img src={`${CoverImage}`} className="profileCoverImage" alt="" />
            <h2
               style={{
                  marginTop: -43,
                  color: 'white',
                  textAlign: 'start',
                  marginLeft: 35,
               }}
            >
               Your Profile
            </h2>
         </div>
         <ContentPost />
         {post.map((item) => (
            <Post key={item._id} detail={item} />
         ))}
      </div>
   );
};

export default ProfileMainPost;
