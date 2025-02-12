import axios from 'axios';
import { loginStart, loginSuccess, loginFailure, logout } from './userReducer';
import { loginAPI, signupAPI, verifyEmailAPI } from './apiService';

/* export const login = (user) => async (dispatch) => {
   dispatch(loginStart());
   try {
      const res = await loginAPI(user);
      dispatch(loginSuccess(res.data));
   } catch (error) {
      dispatch(loginFailure(error.response?.data?.message || 'Login failed'));
   }
};
 */

export const login = async (dispatch, user) => {
   dispatch(loginStart());
   try {
      const res = await loginAPI(user);
      dispatch(loginSuccess(res.data));
   } catch (error) {
      dispatch(loginFailure(error.response?.data?.message || 'Login failed'));
   }
};

export const verifyEmail = async (dispatch, user) => {
   //dispatch =send
   dispatch(loginStart()); //indicating an API request has started.
   //isFetching = true  လုပ်တာပါ
   try {
      const res = await verifyEmailAPI(user);
      dispatch(loginSuccess(res.data));
   } catch (error) {
      dispatch(loginFailure());
   }
};

export const signup = async (dispatch, user) => {
   dispatch(loginStart());
   try {
      const res = await signupAPI(user);
      console.log('res in signup for apiCall:', res);
      dispatch(loginSuccess(res.data));
   } catch (error) {
      dispatch(loginFailure());
   }
};
