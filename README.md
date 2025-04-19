# To-Do List Application

Una aplicación de gestión de tareas desarrollada con Vue.js y Firebase.

## Configuración del proyecto

```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run serve

# Compilar para producción
npm run build

# Linting
npm run lint
```

## Despliegue en Vercel

Este proyecto está configurado para ser desplegado en Vercel. Sigue estos pasos:

1. Crea una cuenta en [Vercel](https://vercel.com) si aún no tienes una
2. Conecta tu repositorio de GitHub, GitLab o Bitbucket
3. Configura las siguientes variables de entorno en la configuración del proyecto:
   - `VUE_APP_FIREBASE_API_KEY`
   - `VUE_APP_FIREBASE_AUTH_DOMAIN`
   - `VUE_APP_FIREBASE_PROJECT_ID`
   - `VUE_APP_FIREBASE_STORAGE_BUCKET`
   - `VUE_APP_FIREBASE_MESSAGING_SENDER_ID`
   - `VUE_APP_FIREBASE_APP_ID`
4. Despliega tu proyecto

Vercel detectará automáticamente que es un proyecto Vue y usará la configuración del archivo `vercel.json`.

## Características

- Autenticación de usuarios con Firebase
- Crear, editar y eliminar tareas
- Marcar tareas como completadas
- Modo oscuro
- Estadísticas de progreso
- Diseño responsive con Tailwind CSS
