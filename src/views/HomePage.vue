<template>
  <div class="font-sans">
    <!-- Decorative Background -->
    <div class="fixed inset-0 bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 z-0">
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div class="absolute top-10 left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div class="absolute top-[40%] right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div class="absolute bottom-10 left-1/3 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
    </div>

    <!-- Navbar -->
    <nav class="relative z-50 bg-white/10 backdrop-blur-lg border-b border-white/10">
      <div class="max-w-7xl mx-auto px-6 md:px-12">
        <div class="flex items-center justify-between h-20">
          <div class="flex items-center gap-2">
            <div class="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-lg flex items-center justify-center shadow-glow">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
              </svg>
            </div>
            <span class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">TaskMaster</span>
          </div>
          <div class="hidden md:flex items-center gap-8">
            <a href="#features" class="text-gray-200 hover:text-white transition-colors">Características</a>
            <a href="#benefits" class="text-gray-200 hover:text-white transition-colors">Beneficios</a>
            <router-link to="/auth" class="relative overflow-hidden rounded-xl group">
              <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-300 group-hover:scale-105"></div>
              <span class="relative flex items-center gap-2 px-6 py-3 bg-purple-900/50 backdrop-blur-sm rounded-xl text-white font-medium border border-white/10 group-hover:border-white/20 transition-all">
                <span>Iniciar Sesión</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </router-link>
          </div>
          
          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button @click="toggleMobileMenu" class="text-white p-2 focus:outline-none">
              <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        </div>

      <!-- Mobile menu, show/hide based on menu state -->
      <div v-if="isMobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 bg-white/10 backdrop-blur-lg border-b border-white/10">
          <a href="#features" @click="toggleMobileMenu" class="block py-3 px-4 text-white hover:bg-white/10 rounded-lg">Características</a>
          <a href="#benefits" @click="toggleMobileMenu" class="block py-3 px-4 text-white hover:bg-white/10 rounded-lg">Beneficios</a>
          <div class="p-4">
            <router-link to="/auth" @click="toggleMobileMenu" class="relative overflow-hidden rounded-xl group w-full">
              <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
              <span class="relative flex items-center justify-center gap-2 px-6 py-3 bg-purple-900/50 backdrop-blur-sm rounded-xl text-white font-medium border border-white/10">
                <span>Iniciar Sesión</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative z-10 pt-28 md:pt-32 pb-12 md:pb-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div class="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
          <div class="flex-1 text-center lg:text-left">
            <div class="mb-6 inline-flex px-4 py-2 backdrop-blur-xl bg-white/5 rounded-full border border-white/10">
              <span class="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">✨ Simplifica tu productividad</span>
            </div>
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 md:mb-8">
              Organiza tus tareas con <span class="relative">
                <span class="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">elegancia y precisión</span>
                <span class="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></span>
              </span>
            </h1>
            <p class="text-base md:text-xl text-gray-300 mb-8 md:mb-10 max-w-2xl mx-auto lg:mx-0">
              Nuestra plataforma combina un diseño intuitivo con funcionalidades potentes para optimizar tu flujo de trabajo y elevar tu productividad.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center lg:justify-start">
              <button class="relative overflow-hidden rounded-xl group transform transition hover:scale-105">
                <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-300 group-hover:scale-105"></div>
                <span class="relative flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-purple-900/30 backdrop-blur-sm rounded-xl text-white font-medium border border-white/10 group-hover:border-white/20 transition-all">
                  <span>Comenzar ahora</span>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
              <button class="group px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-gray-300 font-medium border border-white/10 hover:border-white/30 backdrop-blur-sm bg-white/5 transition-all transform hover:scale-105">
                <span class="flex items-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Ver demostración</span>
                </span>
              </button>
            </div>
          </div>
          <div class="flex-1 relative mt-12 lg:mt-0">
            <div class="relative z-10">
              <div class="absolute inset-0 scale-[0.8] translate-x-8 translate-y-8 rounded-3xl bg-gradient-to-r from-purple-600/30 to-blue-600/30 blur-xl"></div>
              <div class="bg-white/10 backdrop-blur-xl p-1 border border-white/20 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.01] hover:shadow-purple-500/10">
                <img src="@/assets/primera.webp" alt="Dashboard" class="w-full h-auto rounded-2xl"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="relative z-10 py-16 md:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div class="text-center mb-12 md:mb-20">
          <h2 class="inline-block text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 relative">
            <span>Características Premium</span>
            <div class="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
          </h2>
          <p class="text-base md:text-xl text-gray-300 max-w-3xl mx-auto">
            Herramientas potentes diseñadas para maximizar tu productividad
          </p>
    </div>

        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <div class="group relative backdrop-blur-xl bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl overflow-hidden transition-all hover:shadow-glow hover:border-white/20 hover:scale-[1.02]">
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="relative">
              <div class="w-14 h-14 md:w-16 md:h-16 backdrop-blur-xl bg-white/10 rounded-2xl mb-6 md:mb-8 p-3 md:p-4 border border-white/10 shadow-glow text-white">
                <svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                </svg>
              </div>
              <h3 class="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Organización Inteligente</h3>
              <p class="text-gray-300">Sistema avanzado que aprende de tus hábitos para ofrecerte una experiencia personalizada que maximiza tu eficiencia.</p>
            </div>
          </div>

          <div class="group relative backdrop-blur-xl bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl overflow-hidden transition-all hover:shadow-glow hover:border-white/20 hover:scale-[1.02]">
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="relative">
              <div class="w-14 h-14 md:w-16 md:h-16 backdrop-blur-xl bg-white/10 rounded-2xl mb-6 md:mb-8 p-3 md:p-4 border border-white/10 shadow-glow text-white">
                <svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 class="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Automatización Avanzada</h3>
              <p class="text-gray-300">Deja que nuestro sistema maneje las tareas repetitivas mientras te concentras en lo que realmente importa.</p>
            </div>
          </div>

          <div class="group relative backdrop-blur-xl bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl overflow-hidden transition-all hover:shadow-glow hover:border-white/20 hover:scale-[1.02] sm:col-span-2 md:col-span-1">
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="relative">
              <div class="w-14 h-14 md:w-16 md:h-16 backdrop-blur-xl bg-white/10 rounded-2xl mb-6 md:mb-8 p-3 md:p-4 border border-white/10 shadow-glow text-white">
                <svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
              </div>
              <h3 class="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Colaboración sin Fricciones</h3>
              <p class="text-gray-300">Trabaja con tu equipo en tiempo real con sincronización instantánea y comunicación fluida.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section id="benefits" class="relative z-10 py-16 md:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div class="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
          <div class="w-full md:w-1/2 order-2 md:order-1">
            <div class="relative">
              <div class="absolute scale-[0.9] translate-x-6 translate-y-6 -rotate-6 rounded-3xl bg-gradient-to-r from-purple-600/30 to-blue-600/30 blur-xl"></div>
              <div class="bg-white/5 backdrop-blur-xl p-1 border border-white/20 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.01] hover:shadow-purple-500/10">
                <img src="@/assets/primera.webp" alt="Analytics Dashboard" class="w-full h-auto rounded-2xl"/>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 order-1 md:order-2">
            <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 md:mb-8 relative inline-block">
              <span>Beneficios que transforman</span>
              <div class="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            </h2>
            <div class="space-y-6 md:space-y-8">
              <div class="flex gap-4">
                <div class="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-2xl backdrop-blur-xl bg-white/10 p-2 md:p-3 border border-white/10 shadow-glow text-white">
                  <svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg md:text-xl font-bold text-white mb-2">Productividad Optimizada</h3>
                  <p class="text-gray-300">Aumenta tu rendimiento hasta un 200% con nuestro sistema de organización inteligente.</p>
                </div>
              </div>
              
              <div class="flex gap-4">
                <div class="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-2xl backdrop-blur-xl bg-white/10 p-2 md:p-3 border border-white/10 shadow-glow text-white">
                  <svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg md:text-xl font-bold text-white mb-2">Seguridad de Nivel Militar</h3>
                  <p class="text-gray-300">Tus datos están protegidos con cifrado de extremo a extremo y autenticación multifactor.</p>
                </div>
              </div>
              
              <div class="flex gap-4">
                <div class="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-2xl backdrop-blur-xl bg-white/10 p-2 md:p-3 border border-white/10 shadow-glow text-white">
                  <svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                  </svg>
                </div>
            <div>
                  <h3 class="text-lg md:text-xl font-bold text-white mb-2">Sincronización Total</h3>
                  <p class="text-gray-300">Accede a tus tareas desde cualquier dispositivo con sincronización instantánea y sin interrupciones.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative z-10 py-16 md:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div class="relative backdrop-blur-xl bg-white/5 border border-white/10 p-6 md:p-12 rounded-3xl overflow-hidden">
          <div class="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div class="absolute bottom-0 left-0 -mb-12 -ml-12 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          
          <div class="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-10">
            <div class="md:max-w-xl">
              <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">¿Listo para transformar tu productividad?</h2>
              <p class="text-lg md:text-xl text-gray-300">Únete a miles de profesionales que ya han optimizado su flujo de trabajo.</p>
            </div>
            <div class="flex">
              <button class="relative overflow-hidden rounded-xl group transform transition hover:scale-105 w-full md:w-auto">
                <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-300 group-hover:scale-105"></div>
                <span class="relative flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-purple-900/30 backdrop-blur-sm rounded-xl text-white font-medium border border-white/10 group-hover:border-white/20 transition-all">
                  <span>Comenzar gratis</span>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
      </button>
    </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="relative z-10 pt-16 md:pt-20 pb-8 md:pb-10 border-t border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="flex items-center gap-2 mb-6 md:mb-0">
            <div class="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-lg flex items-center justify-center shadow-glow">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
              </svg>
            </div>
            <span class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">TaskMaster</span>
          </div>
          <p class="text-gray-400 text-sm">© 2024 TaskMaster. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      isMobileMenuOpen: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    }
  }
}
</script> 

<style>
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

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.shadow-glow {
  box-shadow: 0 0 20px 0 rgba(139, 92, 246, 0.1);
}
</style> 