import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './Pages/Profile/Profile';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/Profile/:id" element={<Profile />} />
               <Route path="/login" element={<Login />} />
               <Route path="/signup" element={<Register />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
