import './home.css';
import Navbar from '../../Components/Navbar/Navbar';
import Leftbar from '../../Components/LeftsideContainer/Leftbar';
import MainPost from '../../Components/MainPostContainer/MainPost';
import Rightbar from '../../Components/RightsideContainer/Rightbar';
// import { useSelector } from 'react-redux';
const Home = () => {
   // const userDetails = useSelector((state) => state.user);
   // const user = userDetails.user;
   // console.log('user :', user);
   return (
      <div className="home">
         <Navbar />
         <div className="ComponentContainer">
            <Leftbar />
            <MainPost />
            <Rightbar />
         </div>
      </div>
   );
};

export default Home;
