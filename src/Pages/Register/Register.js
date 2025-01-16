import { Link } from 'react-router-dom';
import './signup.css';
const register = () => {
   return (
      <div className="mainConatinerForSignup">
         <div className="subMainContainer">
            <div style={{ flex: 1, marginLeft: 150, marginBottom: '170px' }}>
               <p className="logoText">
                  Soc<span className="part">ial</span>
               </p>
               <p className="introText">
                  Connect with your
                  <span className="part"> family and friends</span>{' '}
               </p>
            </div>
            <div style={{ flex: 3 }}>
               <p className="createAccountText">Create New account</p>
               <input
                  type="text"
                  placeholder="Username"
                  className="inputText"
               />
               <input
                  type="text"
                  placeholder="Phone Number"
                  className="inputText"
               />
               <input type="text" placeholder="Email" className="inputText" />
               <input
                  type="text"
                  placeholder="Password"
                  className="inputText"
               />
               <button className="btnForSignup">Sign Up</button>
               <Link to={'/login'}>
                  <p style={{ textAlign: 'start', marginLeft: '30.6%' }}>
                     Already have an account?
                  </p>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default register;
