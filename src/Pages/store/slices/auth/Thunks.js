import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../../firebase/config";
import { register, login } from "./AuthSlice";

export const registerAuth = (email, password, usuario) => {
  return async (dispatch) => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      
      await updateProfile(auth.currentUser, {
        displayName: usuario,
        photoURL: ''
      });

      const { email: userEmail } = response.user;
      dispatch(register({ email: userEmail, usuario }));
    } catch (error) {
      console.error('Error during registration:', error.message);
      throw error;
    }
  };
};

export const loginAuth = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      const { email: userEmail } = response.user;
      dispatch(login({ email: userEmail }));
    } catch (error) {
      console.error('Error during login:', error.message);
      throw error;
    }
  };
};
