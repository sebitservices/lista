// Importar las funciones necesarias de Firebase
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Configuración de Firebase usando variables de entorno
const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY || "AIzaSyBq38wG3mdLrgSRRYTAaFpDxfwQLP0XEng",
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN || "to-do-list-a6f8e.firebaseapp.com",
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID || "to-do-list-a6f8e",
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET || "to-do-list-a6f8e.appspot.com",
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID || "532656367615",
  appId: process.env.VUE_APP_FIREBASE_APP_ID || "1:532656367615:web:273f6a5db0bbb6d44be9ca"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Función para registrar un usuario
export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user, error: null };
  } catch (error) {
    let errorMessage = "Error al registrar usuario";
    
    switch (error.code) {
      case 'auth/email-already-in-use':
        errorMessage = "Este correo electrónico ya está en uso.";
        break;
      case 'auth/invalid-email':
        errorMessage = "El correo electrónico no es válido.";
        break;
      case 'auth/weak-password':
        errorMessage = "La contraseña es demasiado débil. Debe tener al menos 6 caracteres.";
        break;
      default:
        errorMessage = error.message;
    }
    
    return { user: null, error: errorMessage };
  }
};

// Función para iniciar sesión
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user, error: null };
  } catch (error) {
    let errorMessage = "Error al iniciar sesión";
    
    switch (error.code) {
      case 'auth/invalid-email':
        errorMessage = "El correo electrónico no es válido.";
        break;
      case 'auth/user-disabled':
        errorMessage = "Esta cuenta ha sido deshabilitada.";
        break;
      case 'auth/user-not-found':
        errorMessage = "No existe un usuario con este correo electrónico.";
        break;
      case 'auth/wrong-password':
        errorMessage = "Contraseña incorrecta.";
        break;
      default:
        errorMessage = error.message;
    }
    
    return { user: null, error: errorMessage };
  }
};

// Función para cerrar sesión
export const logoutUser = async () => {
  try {
    await signOut(auth);
    return { error: null };
  } catch (error) {
    return { error: "Error al cerrar sesión" };
  }
};

// Exposición de auth para escuchar cambios en la autenticación
export { auth }; 