import { Link } from 'react-router-dom';
import './login.css';

const login = () => {
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
               <p className="createAccountText">Login account</p>
               <input type="text" placeholder="Email" className="inputText" />
               <input
                  type="text"
                  placeholder="Password"
                  className="inputText"
               />
               <button className="btnForSignup">Login</button>
               <Link to={'/forgotPassword'}>
                  <p style={{ textAlign: 'start', marginLeft: '30.6%' }}>
                     Forgot Password?
                  </p>
               </Link>
               <Link to={'/signup'}>
                  <p style={{ textAlign: 'start', marginLeft: '30.6%' }}>
                     Create New Account?
                  </p>
               </Link>
            </div>
         </div>
      </div>
   );
};
export default login;
