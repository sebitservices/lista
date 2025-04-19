// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Inicializar la app de Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBq38wG3mdLrgSRRYTAaFpDxfwQLP0XEng",
  authDomain: "to-do-list-a6f8e.firebaseapp.com",
  projectId: "to-do-list-a6f8e",
  storageBucket: "to-do-list-a6f8e.appspot.com",
  messagingSenderId: "532656367615",
  appId: "1:532656367615:web:273f6a5db0bbb6d44be9ca"
});

// Recuperar una instancia de Firebase Messaging
const messaging = firebase.messaging();

// Manejar mensajes en segundo plano
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  // Personalizar la notificación
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/favicon.ico',
    badge: '/favicon.ico',
    data: payload.data,
    // Configuraciones adicionales
    vibrate: [200, 100, 200, 100, 200, 100, 200],
    actions: [
      {
        action: 'view',
        title: 'Ver tarea'
      }
    ]
  };

  // Mostrar la notificación
  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Manejar clics en la notificación
self.addEventListener('notificationclick', (event) => {
  console.log('[Service Worker] Notification click Received.');

  // Cerrar la notificación
  event.notification.close();

  // Si hay una acción específica (como "view")
  if (event.action === 'view' && event.notification.data && event.notification.data.url) {
    // Abrir la URL asociada a la notificación
    clients.openWindow(event.notification.data.url);
  } else {
    // De lo contrario, abrir la app
    clients.openWindow('/');
  }
}); 