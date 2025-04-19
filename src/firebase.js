// Importar las funciones necesarias de Firebase
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Configuración de Firebase
// IMPORTANTE: Si tienes problemas de 400 Bad Request, crea un nuevo proyecto en Firebase
// y reemplaza estas credenciales con las nuevas que obtengas

// Configuración local (solo para desarrollo)
/*
const firebaseConfig = {
  apiKey: "AIzaSyBq38wG3mdLrgSRRYTAaFpDxfwQLP0XEng",
  authDomain: "to-do-list-a6f8e.firebaseapp.com",
  projectId: "to-do-list-a6f8e",
  storageBucket: "to-do-list-a6f8e.appspot.com",
  messagingSenderId: "532656367615",
  appId: "1:532656367615:web:273f6a5db0bbb6d44be9ca"
};
*/

// Configuración para producción usando variables de entorno
const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID
};

// Clave pública VAPID (Voluntary Application Server Identification)
const vapidKey = "BMir8WmzhpmKoB6-QOvge8TdqDnjbklhILfewYPCeCStZmhqhToymlK7zKXcAlZsYX6LLf6k66rX07sySsLz_B4";

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const messaging = getMessaging(app);

// Función para solicitar permisos de notificación y obtener token FCM
export const requestNotificationPermission = async () => {
  try {
    // Comprobar si el navegador soporta notificaciones
    if (!('Notification' in window)) {
      console.error('Este navegador no soporta notificaciones de escritorio');
      return { token: null, error: 'Browser not supported' };
    }

    // Comprobar si ya tenemos permiso
    if (Notification.permission === 'granted') {
      // Ya tenemos permiso, solo necesitamos obtener el token
      const currentToken = await getToken(messaging, { vapidKey });
      if (currentToken) {
        console.log('Token actual:', currentToken);
        return { token: currentToken, error: null };
      }
    } 
    
    // Solicitar permiso
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      // Obtener token después de obtener permiso
      const currentToken = await getToken(messaging, { vapidKey });
      if (currentToken) {
        console.log('Nuevo token:', currentToken);
        localStorage.setItem('fcmToken', currentToken);
        return { token: currentToken, error: null };
      } else {
        console.error('No se pudo obtener el token');
        return { token: null, error: 'No token available' };
      }
    } else {
      console.error('Permiso denegado');
      return { token: null, error: 'Permission denied' };
    }
  } catch (error) {
    console.error('Error al solicitar permiso:', error);
    return { token: null, error: error.message };
  }
};

// Establecer manejador para mensajes en primer plano
export const setupMessageHandler = () => {
  onMessage(messaging, (payload) => {
    console.log('Mensaje recibido:', payload);
    
    // Crear notificación nativa del navegador
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: '/favicon.ico', // Usar el favicon como icono
      badge: '/favicon.ico',
      data: payload.data
    };
    
    new Notification(notificationTitle, notificationOptions);
  });
};

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
export { auth, messaging }; 