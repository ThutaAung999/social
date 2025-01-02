// import MainPost from '../../Components/MainPostContainer/MainPost';
import Navbar from '../../Components/Navbar/Navbar';
import ProfileLeftbar from '../../Components/ProfileLeftsideContainer/ProfileLeftbar';
import ProfileMainPost from '../../Components/ProfileMainPostContainer/ProfileMainPost';
import ProfileRightbar from '../../Components/ProfileRightsideContainer/ProfileRightbar';
import './profile.css';
const Profile = () => {
   return (
      <div className="ProfileContainer">
         <Navbar />
         <div className="subProfileContainer">
            <ProfileLeftbar />
            <ProfileMainPost />
            <ProfileRightbar />
         </div>
      </div>
   );
};

export default Profile;
