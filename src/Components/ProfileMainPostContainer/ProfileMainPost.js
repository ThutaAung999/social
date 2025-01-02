import './profilemainPost.css';
import ContentPost from '../ContentPostContainer/ContentPost';
import Post from '../PostContainer/Post';
import CoverImage from '../Images/Profile.png';

const ProfileMainPost = () => {
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
         <Post />

         <Post />
      </div>
   );
};

export default ProfileMainPost;
