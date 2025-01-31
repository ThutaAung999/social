import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Profile from './Pages/Profile/Profile';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

import { useSelector } from 'react-redux';

function App() {
   const userDetails = useSelector((state) => state.user);
   const user = userDetails.user;
   // console.log('user :', user);
   return (
      <div className="App">
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/Profile/:id" element={<Profile />} />
               <Route
                  path="/login"
                  element={user !== null ? <Navigate to={'/'} /> : <Login />}
               />
               <Route
                  path="/signup"
                  element={user !== null ? <Navigate to={'/'} /> : <Register />}
               />
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
