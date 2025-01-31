import './mainPost.css';
import ContentPost from '../ContentPostContainer/ContentPost';
import Post from '../PostContainer/Post';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
const MainPost = () => {
   const userDetails = useSelector((state) => state.user);
   let user = userDetails.user;
   let id = user?.user?._id;

   const accessToken = user?.accessToken;
   const [post, setPost] = useState([]);

   useEffect(() => {
      const getPost = async () => {
         try {
            const response = await axios.get(
               `http://localhost:5000/api/user/flw/${id}`,
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
   // console.log('post in Mainpost :', post);

   return (
      <div className="mainPostContainer">
         <ContentPost />
         {post.map((item) => {
            // console.log('item in mainPost', item);
            return <Post key={item._id} post={item} />;
         })}
      </div>
   );
};

export default MainPost;
