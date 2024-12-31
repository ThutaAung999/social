import React from 'react';
import './home.css';
import Navbar from '../../Components/Navbar/Navbar';
import Leftbar from '../../Components/LeftsideContainer/Leftbar';
import MainPost from '../../Components/MainPostContainer/MainPost';
import Rightbar from '../../Components/RightsideContainer/Rightbar';
const Home = () => {
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
