import './mainPost.css';
import ContentPost from '../ContentPostContainer/ContentPost';
import Post from '../PostContainer/Post';
const MainPost = () => {
   return (
      <div className="mainPostContainer">
         <ContentPost />
         <Post />
         <Post />
      </div>
   );
};

export default MainPost;
