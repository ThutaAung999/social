import './mainPost.css';
import ContentPost from '../ContentPostContainer/ContentPost';
import Post from '../PostContainer/Post';
import { useEffect, useState } from 'react';
import axios from 'axios';
const MainPost = () => {
   const accessToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2VkYWUzMjMxNjM0Y2FkMTliY2ViZiIsInVzZXJuYW1lIjoiYXVuZ2F1bmciLCJpYXQiOjE3MzcwOTYyOTV9.jUW6464Tyh5J9Pf3mKXnaPPnEK0D_sQNIKFxEnFvKlE';
   const [post, setPost] = useState([]);

   useEffect(() => {
      const getPost = async () => {
         try {
            const response = await axios.get(
               'http://localhost:5000/api/user/flw/677edae3231634cad19bcebf',
               {
                  headers: {
                     token: accessToken,
                  },
               },
            );
            setPost(response.data);
         } catch (error) {
            console.log(error);
         }
      };
      getPost();
   }, []);
   //console.log(post);

   return (
      <div className="mainPostContainer">
         <ContentPost />
         {post.map((item) => (
            <Post key={item._id} post={item} />
         ))}
      </div>
   );
};

export default MainPost;
