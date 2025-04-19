<template>
  <div class="font-sans min-h-screen">
    <!-- Decorative Background -->
    <div class="fixed inset-0 bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 z-0">
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div class="absolute top-10 left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div class="absolute top-[40%] right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div class="absolute bottom-10 left-1/3 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <!-- Partículas flotantes decorativas -->
        <div class="absolute inset-0 overflow-hidden">
          <div class="particle bg-white/10 rounded-full animate-float"></div>
          <div class="particle bg-white/10 rounded-full animate-float animation-delay-1000"></div>
          <div class="particle bg-white/10 rounded-full animate-float animation-delay-2000"></div>
          <div class="particle bg-white/10 rounded-full animate-float animation-delay-3000"></div>
          <div class="particle bg-white/10 rounded-full animate-float animation-delay-4000"></div>
          <div class="particle bg-white/10 rounded-full animate-float animation-delay-5000"></div>
        </div>
      </div>
    </div>

    <!-- Auth Container - Mejorada la posición y tamaño -->
    <div class="relative z-10 flex items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div class="w-full max-w-md">
        <!-- Logo and Title - Mejorado con animación sutil -->
        <div class="text-center">
          <div class="flex items-center justify-center gap-2 mb-8 animate-fadeIn">
            <div class="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-lg flex items-center justify-center shadow-glow relative overflow-hidden group">
              <div class="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <svg class="w-8 h-8 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
              </svg>
            </div>
            <span class="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 animate-gradient">TaskMaster</span>
          </div>
        </div>

        <!-- Auth Form Card - Mejorada la apariencia con mejor glassmorphism -->
        <div class="relative backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-3xl shadow-2xl overflow-hidden transition-all animate-slideUp">
          <!-- Background effects - Mejorados con gradientes más suaves -->
          <div class="absolute top-0 right-0 -mt-4 -mr-4 w-40 h-40 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mix-blend-multiply filter blur-2xl opacity-10"></div>
          <div class="absolute bottom-0 left-0 -mb-4 -ml-4 w-40 h-40 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-full mix-blend-multiply filter blur-2xl opacity-10"></div>
          
          <!-- Form Container with Transition -->
          <div class="relative z-10">
            <!-- Auth Tabs - Mejorado el diseño y efectos -->
            <div class="flex mb-8 border-b border-white/10">
              <button 
                @click="isLogin = true" 
                class="pb-3 px-5 text-lg font-medium relative transition-all duration-300"
                :class="isLogin ? 'text-white' : 'text-gray-400 hover:text-gray-300'"
              >
                Iniciar sesión
                <div v-if="isLogin" class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transform transition-all duration-300 animate-pulse-subtle"></div>
              </button>
              <button 
                @click="isLogin = false" 
                class="pb-3 px-5 text-lg font-medium relative transition-all duration-300"
                :class="!isLogin ? 'text-white' : 'text-gray-400 hover:text-gray-300'"
              >
                Registrarse
                <div v-if="!isLogin" class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transform transition-all duration-300 animate-pulse-subtle"></div>
              </button>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-white mb-6 text-center transition-all duration-300 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {{ isLogin ? 'Bienvenido de nuevo' : 'Crea tu cuenta' }}
              </h2>
              
              <!-- Mensaje de error o éxito -->
              <div v-if="errorMessage || successMessage" class="mb-4">
                <div v-if="errorMessage" class="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-200 text-sm">
                  {{ errorMessage }}
                </div>
                <div v-if="successMessage" class="p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-200 text-sm">
                  {{ successMessage }}
                </div>
              </div>
              
              <!-- Login Form - Mejorado -->
              <transition
                enter-active-class="transition-all duration-500 ease-out"
                enter-from-class="opacity-0 transform rotateY-90"
                enter-to-class="opacity-100 transform rotateY-0"
                leave-active-class="transition-all duration-500 ease-in absolute w-full"
                leave-from-class="opacity-100 transform rotateY-0"
                leave-to-class="opacity-0 transform rotateY-90"
              >
                <form v-if="isLogin" @submit.prevent="handleLogin" class="space-y-6">
                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-300 mb-1">Email</label>
                    <div class="mt-1 relative group">
                      <input 
                        id="email" 
                        v-model="loginForm.email"
                        name="email" 
                        type="email" 
                        required
                        class="appearance-none block w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all group-hover:border-white/30 shadow-inner shadow-white/5 focus:scale-[1.01]"
                        placeholder="ejemplo@correo.com">
                      <div class="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <svg class="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div class="flex justify-between items-center mb-1">
                      <label for="password" class="block text-sm font-medium text-gray-300">Contraseña</label>
                      <div class="text-sm">
                        <a href="#" class="font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 hover:opacity-80 transition-opacity">
                          ¿Olvidaste tu contraseña?
                        </a>
                      </div>
                    </div>
                    <div class="mt-1 relative group">
                      <input 
                        id="password" 
                        v-model="loginForm.password"
                        :type="showPassword ? 'text' : 'password'" 
                        name="password" 
                        required
                        autocomplete="current-password"
                        class="appearance-none block w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all group-hover:border-white/30 shadow-inner shadow-white/5 focus:scale-[1.01]"
                        placeholder="********">
                      <button type="button" @click="showPassword = !showPassword" class="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <svg v-if="!showPassword" class="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                        </svg>
                        <svg v-else class="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div class="flex items-center">
                    <input 
                      id="remember-me" 
                      v-model="loginForm.rememberMe"
                      name="remember-me" 
                      type="checkbox"
                      class="h-4 w-4 bg-white/5 border-white/10 rounded text-purple-600 focus:ring-purple-500/50 transition-colors cursor-pointer">
                    <label for="remember-me" class="ml-2 block text-sm text-gray-300 cursor-pointer">Recordarme</label>
                  </div>

                  <div>
                    <button 
                      type="submit" 
                      class="group relative w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl text-white font-medium focus:outline-none transition-all overflow-hidden hover:shadow-glow"
                      :disabled="loading"
                    >
                      <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-300 group-hover:scale-105"></div>
                      <span class="relative z-10 flex items-center">
                        <span v-if="!loading">Iniciar sesión</span>
                        <span v-else>Cargando...</span>
                        <svg v-if="!loading" class="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                        </svg>
                      </span>
                    </button>
                  </div>
                </form>
              </transition>

              <!-- Register Form - Mejorado -->
              <transition
                enter-active-class="transition-all duration-500 ease-out"
                enter-from-class="opacity-0 transform rotateY-90"
                enter-to-class="opacity-100 transform rotateY-0"
                leave-active-class="transition-all duration-500 ease-in absolute w-full"
                leave-from-class="opacity-100 transform rotateY-0"
                leave-to-class="opacity-0 transform rotateY-90"
              >
                <form v-if="!isLogin" @submit.prevent="handleRegister" class="space-y-5">
                  <div class="grid grid-cols-2 gap-4">
                    <div class="group">
                      <label for="first-name" class="block text-sm font-medium text-gray-300 mb-1">Nombre</label>
                      <div class="mt-1">
                        <input 
                          id="first-name" 
                          v-model="registerForm.firstName"
                          name="first-name" 
                          type="text" 
                          required
                          class="appearance-none block w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all group-hover:border-white/30 shadow-inner shadow-white/5 focus:scale-[1.01]"
                          placeholder="Juan">
                      </div>
                    </div>
                    
                    <div class="group">
                      <label for="last-name" class="block text-sm font-medium text-gray-300 mb-1">Apellido</label>
                      <div class="mt-1">
                        <input 
                          id="last-name" 
                          v-model="registerForm.lastName"
                          name="last-name" 
                          type="text" 
                          required
                          class="appearance-none block w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all group-hover:border-white/30 shadow-inner shadow-white/5 focus:scale-[1.01]"
                          placeholder="Pérez">
                      </div>
                    </div>
                  </div>

                  <div>
                    <label for="register-email" class="block text-sm font-medium text-gray-300 mb-1">Email</label>
                    <div class="mt-1 relative group">
                      <input 
                        id="register-email" 
                        v-model="registerForm.email"
                        name="email" 
                        type="email" 
                        required
                        class="appearance-none block w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all group-hover:border-white/30 shadow-inner shadow-white/5 focus:scale-[1.01]"
                        placeholder="ejemplo@correo.com">
                      <div class="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <svg class="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label for="register-password" class="block text-sm font-medium text-gray-300 mb-1">Contraseña</label>
                    <div class="mt-1 relative group">
                      <input 
                        id="register-password" 
                        v-model="registerForm.password"
                        :type="showRegisterPassword ? 'text' : 'password'" 
                        name="password" 
                        required
                        autocomplete="new-password"
                        class="appearance-none block w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all group-hover:border-white/30 shadow-inner shadow-white/5 focus:scale-[1.01]"
                        placeholder="********">
                      <button type="button" @click="showRegisterPassword = !showRegisterPassword" class="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <svg v-if="!showRegisterPassword" class="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                        </svg>
                        <svg v-else class="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
                        </svg>
                      </button>
                    </div>
                    <!-- Indicador de fortaleza de contraseña -->
                    <div class="mt-1 flex space-x-1">
                      <div class="h-1 w-1/4 rounded transition-all duration-300" :class="{'bg-red-500': showRegisterPassword, 'bg-white/20': !showRegisterPassword}"></div>
                      <div class="h-1 w-1/4 rounded transition-all duration-300" :class="{'bg-yellow-500': showRegisterPassword, 'bg-white/20': !showRegisterPassword}"></div>
                      <div class="h-1 w-1/4 rounded transition-all duration-300" :class="{'bg-green-500': showRegisterPassword, 'bg-white/20': !showRegisterPassword}"></div>
                      <div class="h-1 w-1/4 rounded transition-all duration-300" :class="{'bg-green-500': showRegisterPassword, 'bg-white/20': !showRegisterPassword}"></div>
                    </div>
                    <p class="text-xs text-gray-400 mt-1">Usa 8+ caracteres con letras y números</p>
                  </div>

                  <div>
                    <label for="confirm-password" class="block text-sm font-medium text-gray-300 mb-1">Confirmar Contraseña</label>
                    <div class="mt-1 relative group">
                      <input 
                        id="confirm-password" 
                        v-model="registerForm.confirmPassword"
                        :type="showConfirmPassword ? 'text' : 'password'" 
                        name="confirm-password" 
                        required
                        autocomplete="new-password"
                        class="appearance-none block w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all group-hover:border-white/30 shadow-inner shadow-white/5 focus:scale-[1.01]"
                        placeholder="********">
                      <button type="button" @click="showConfirmPassword = !showConfirmPassword" class="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <svg v-if="!showConfirmPassword" class="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                        </svg>
                        <svg v-else class="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div class="flex items-center mt-2">
                    <input 
                      id="terms" 
                      v-model="registerForm.acceptTerms"
                      name="terms" 
                      type="checkbox" 
                      required
                      class="h-4 w-4 bg-white/5 border-white/10 rounded text-purple-600 focus:ring-purple-500/50 transition-colors cursor-pointer">
                    <label for="terms" class="ml-2 block text-sm text-gray-300">
                      Acepto los <a href="#" class="font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 hover:opacity-80 transition-opacity">Términos</a> y 
                      <a href="#" class="font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 hover:opacity-80 transition-opacity">Políticas</a>
                    </label>
                  </div>

                  <div class="pt-2">
                    <button 
                      type="submit" 
                      class="group relative w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl text-white font-medium focus:outline-none transition-all overflow-hidden hover:shadow-glow"
                      :disabled="loading"
                    >
                      <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-300 group-hover:scale-105"></div>
                      <span class="relative z-10 flex items-center">
                        <span v-if="!loading">Crear cuenta</span>
                        <span v-else>Registrando...</span>
                        <svg v-if="!loading" class="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                        </svg>
                      </span>
                    </button>
                  </div>
                </form>
              </transition>
            </div>
          </div>
        </div>

        <!-- Return to home - Mejorado con animación -->
        <div class="text-center mt-6 animate-fadeIn">
          <router-link to="/" class="inline-flex items-center px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm text-gray-300 hover:text-white transition-colors group">
            <svg class="w-4 h-4 mr-1.5 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            Volver a la página principal
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { registerUser, loginUser, auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default {
  name: 'AuthPage',
  setup() {
    const router = useRouter();
    const isLogin = ref(true);
    const showPassword = ref(false);
    const showRegisterPassword = ref(false);
    const showConfirmPassword = ref(false);
    
    // Datos del formulario
    const loginForm = ref({
      email: '',
      password: '',
      rememberMe: false
    });
    
    const registerForm = ref({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false
    });
    
    // Estado de errores y carga
    const loading = ref(false);
    const errorMessage = ref('');
    const successMessage = ref('');
    
    onMounted(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // El usuario ya está autenticado, redirigir al dashboard
          router.push('/dashboard');
        }
      });
      
      // Limpiar el listener cuando se desmonta el componente
      return () => unsubscribe();
    });
    
    const handleLogin = async () => {
      errorMessage.value = '';
      successMessage.value = '';
      
      // Validación básica
      if (!loginForm.value.email || !loginForm.value.password) {
        errorMessage.value = 'Por favor, completa todos los campos';
        return;
      }
      
      loading.value = true;
      try {
        const { user, error } = await loginUser(loginForm.value.email, loginForm.value.password);
        
        if (error) {
          errorMessage.value = error;
        } else if (user) {
          successMessage.value = '¡Inicio de sesión exitoso!';
          // Redirigir al dashboard tras inicio de sesión exitoso
          setTimeout(() => router.push('/dashboard'), 1000);
        }
      } catch (err) {
        errorMessage.value = 'Error al iniciar sesión: ' + err.message;
      } finally {
        loading.value = false;
      }
    };
    
    const handleRegister = async () => {
      errorMessage.value = '';
      successMessage.value = '';
      
      // Validación básica
      if (!registerForm.value.firstName || !registerForm.value.lastName || 
          !registerForm.value.email || !registerForm.value.password) {
        errorMessage.value = 'Por favor, completa todos los campos obligatorios';
        return;
      }
      
      if (registerForm.value.password !== registerForm.value.confirmPassword) {
        errorMessage.value = 'Las contraseñas no coinciden';
        return;
      }
      
      if (!registerForm.value.acceptTerms) {
        errorMessage.value = 'Debes aceptar los términos y condiciones';
        return;
      }
      
      loading.value = true;
      try {
        const { user, error } = await registerUser(registerForm.value.email, registerForm.value.password);
        
        if (error) {
          errorMessage.value = error;
        } else if (user) {
          successMessage.value = '¡Registro exitoso! Redirigiendo...';
          // Redirigir al dashboard tras registro exitoso
          setTimeout(() => router.push('/dashboard'), 1000);
        }
      } catch (err) {
        errorMessage.value = 'Error al registrar: ' + err.message;
      } finally {
        loading.value = false;
      }
    };
    
    return {
      isLogin,
      showPassword,
      showRegisterPassword,
      showConfirmPassword,
      loginForm,
      registerForm,
      loading,
      errorMessage,
      successMessage,
      handleLogin,
      handleRegister
    };
  }
}
</script>

<style scoped>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes pulse-subtle {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}

@keyframes float {
  0% { transform: translateY(0) translateX(0); opacity: 0; }
  50% { opacity: 0.6; }
  100% { transform: translateY(-100px) translateX(20px); opacity: 0; }
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  top: 100%;
  animation-duration: 15s;
  animation-timing-function: ease-in;
  animation-iteration-count: infinite;
}

.particle:nth-child(1) { left: 10%; animation-delay: 0s; }
.particle:nth-child(2) { left: 30%; animation-delay: 2s; }
.particle:nth-child(3) { left: 50%; animation-delay: 4s; }
.particle:nth-child(4) { left: 70%; animation-delay: 6s; }
.particle:nth-child(5) { left: 90%; animation-delay: 8s; }
.particle:nth-child(6) { left: 20%; animation-delay: 10s; }

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-3000 {
  animation-delay: 3s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.animation-delay-5000 {
  animation-delay: 5s;
}

.animate-fadeIn {
  animation: fadeIn 1s ease-out;
}

.animate-slideUp {
  animation: slideUp 0.8s ease-out;
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 8s ease infinite;
}

.animate-gradient-slow {
  background-size: 300% 300%;
  animation: gradient 12s ease infinite;
}

.animate-pulse-subtle {
  animation: pulse-subtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.shadow-glow {
  box-shadow: 0 0 20px 0 rgba(139, 92, 246, 0.1);
}

.group:hover input {
  border-color: rgba(255, 255, 255, 0.3);
}

/* Efectos de hover mejorados */
input:focus, button:focus {
  transition: all 0.3s ease;
  outline-color: rgba(139, 92, 246, 0.5);
}

input[type="checkbox"]:checked {
  background-color: rgba(139, 92, 246, 0.8);
  border-color: rgba(139, 92, 246, 0.5);
}

.social-button {
  transform: translateY(0);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.social-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

/* Agregar estilos para la transición 3D */
.rotateY-90 {
  transform: rotateY(90deg);
}

.rotateY-0 {
  transform: rotateY(0deg);
}

.relative {
  transform-style: preserve-3d;
  perspective: 1000px;
}

/* Estilos para mejorar la visibilidad de texto en los campos */
input {
  color: white !important; /* Asegurar que el texto sea blanco puro */
  caret-color: white !important; /* Asegurar que el cursor sea visible */
  font-weight: 500 !important; /* Texto ligeramente más grueso */
  text-shadow: 0 0 1px rgba(255, 255, 255, 0.3) !important; /* Sombra sutil para mejorar legibilidad */
  background-color: rgba(255, 255, 255, 0.1) !important; /* Fondo ligeramente visible siempre */
}

input::placeholder {
  color: rgba(156, 163, 175, 0.6) !important; /* Placeholder más oscuro para diferenciar */
  opacity: 0.7 !important; /* Asegurar opacidad reducida */
}

/* Estilo específico para cuando el campo está enfocado */
input:focus {
  background-color: rgba(255, 255, 255, 0.15) !important; /* Fondo ligeramente más claro cuando está enfocado */
  border-color: rgba(139, 92, 246, 0.6) !important; /* Borde púrpura más visible */
  box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.25) !important; /* Añadir sombra al borde para destacar */
}

/* Estilo cuando está activo pero no enfocado */
input:not(:placeholder-shown) {
  border-color: rgba(255, 255, 255, 0.3) !important; /* Borde más visible cuando tiene contenido */
}
</style>