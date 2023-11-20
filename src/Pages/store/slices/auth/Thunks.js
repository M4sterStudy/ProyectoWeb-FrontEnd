import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"; 
import { auth } from "../../../../firebase/config";
import { register } from "./AuthSlice";

export const registerAuth = (email, password) => {
    return async (dispatch) => {
      try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        
        await updateProfile(auth.currentUser, {
          displayName: 'Jonathan',
          photoURL: ''
        });
  
        const { email: userEmail } = response.user;
        dispatch(register({ email: userEmail }));
      } catch (error) {
        console.error('Error during registration:', error.message);
        throw error; // Propaga el error para que pueda ser manejado en el componente
      }
    };
  };
