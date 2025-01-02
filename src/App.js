import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './Pages/Profile/Profile';
import Home from './Pages/Home/Home';
function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/Profile/:id" element={<Profile />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
