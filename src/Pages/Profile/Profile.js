//import { useSelector } from 'react-redux';
import Navbar from '../../Components/Navbar/Navbar';
import ProfileLeftbar from '../../Components/ProfileLeftsideContainer/ProfileLeftbar';
import ProfileMainPost from '../../Components/ProfileMainPostContainer/ProfileMainPost';
import ProfileRightbar from '../../Components/ProfileRightsideContainer/ProfileRightbar';
import './profile.css';
const Profile = () => {
   // const userDetails = useSelector((state) => state.user);
   // const user = userDetails.user;
   // console.log('user :', user);

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
