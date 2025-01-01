import MainPost from '../../Components/MainPostContainer/MainPost';
import Navbar from '../../Components/Navbar/Navbar';
import ProfileLeftbar from '../../Components/ProfileLeftsideContainer/ProfileLeftbar';
import ProfileRightbar from '../../Components/ProfileRightsideContainer/ProfileRightbar';
import './profile.css';
const Profile = () => {
   return (
      <div className="ProfileContainer">
         <Navbar />
         <div className="subProfileContainer">
            <ProfileLeftbar />
            <MainPost />
            <ProfileRightbar />
         </div>
      </div>
   );
};

export default Profile;
