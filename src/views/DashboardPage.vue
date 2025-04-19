<template>

  <div class="font-sans min-h-screen" :class="isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-800'">
    <!-- Navbar / Header -->
    <header class="sticky top-0 z-50" :class="isDarkMode ? 'bg-gray-800 shadow-md border-b border-gray-700' : 'bg-white shadow-md'">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 md:h-20">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
              </svg>
            </div>
            <h1 class="text-2xl font-bold" :class="isDarkMode ? 'text-white' : 'text-gray-800'">TaskMaster</h1>
          </div>

          <!-- Perfil y opciones -->
          <div class="flex items-center gap-3">
            <div class="hidden md:flex items-center mr-3">
              <div v-if="user" class="relative flex items-center gap-3 px-3 py-2 rounded-lg" :class="isDarkMode ? 'bg-gray-700' : 'bg-gray-100'">
                <div class="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium text-sm">
                  {{ getUserInitials() }}
                </div>
                <span class="font-medium" :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">{{ user.email }}</span>
              </div>
            </div>
            
            <!-- Theme Toggle Switch (nueva ubicación) -->
            <button 
              @click="setDarkMode(!isDarkMode)" 
              class="p-2 rounded-full"
              :class="isDarkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-700'"
              aria-label="Cambiar tema"
            >
              <svg v-if="isDarkMode" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1S11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"></path>
              </svg>
              <svg v-else class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"></path>
              </svg>
            </button>
            
            <button 
              @click="logout" 
              class="flex items-center gap-2 px-4 py-2 rounded-lg transition-all" 
              :class="isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span class="hidden sm:inline">Cerrar sesión</span>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Dashboard Content -->
    <main class="relative z-10 py-6 md:py-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Stats Cards -->
        <section class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div :class="[
            'shadow-sm border rounded-lg p-5 flex flex-col hover:shadow-md transition-all',
            isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          ]">
            <div class="flex items-center justify-between">
              <h3 :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'" class="font-medium">Tareas pendientes</h3>
              <div class="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                <svg class="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <p :class="isDarkMode ? 'text-white' : 'text-gray-800'" class="text-3xl font-bold mt-2">{{ pendingTasks.length }}</p>
            <p :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'" class="text-sm mt-1">
              <span v-if="pendingTasks.length > 0">Actualizado hace {{ getTimeSinceUpdate(pendingTasksLastUpdated) }}</span>
              <span v-else>No hay tareas pendientes</span>
            </p>
          </div>

          <div :class="[
            'shadow-sm border rounded-lg p-5 flex flex-col hover:shadow-md transition-all',
            isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          ]">
            <div class="flex items-center justify-between">
              <h3 :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'" class="font-medium">Tareas completadas</h3>
              <div class="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <p :class="isDarkMode ? 'text-white' : 'text-gray-800'" class="text-3xl font-bold mt-2">{{ completedTasks.length }}</p>
            <p :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'" class="text-sm mt-1">
              <span v-if="completedTasks.length > 0">Actualizado hace {{ getTimeSinceUpdate(completedTasksLastUpdated) }}</span>
              <span v-else>No hay tareas completadas</span>
            </p>
          </div>

          <div :class="[
            'shadow-sm border rounded-lg p-5 flex flex-col hover:shadow-md transition-all',
            isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          ]">
            <div class="flex items-center justify-between">
              <h3 :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'" class="font-medium">Progreso diario</h3>
              <div class="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div class="flex items-center mt-2">
              <p :class="isDarkMode ? 'text-white' : 'text-gray-800'" class="text-3xl font-bold">{{ dailyProgress }}%</p>
              <span v-if="tasks.length > 0 && progressChange > 0" class="ml-2 text-sm px-2 py-0.5 rounded bg-blue-100 text-blue-700">+{{ progressChange }}%</span>
            </div>
            <div :class="isDarkMode ? 'bg-gray-700' : 'bg-gray-200'" class="mt-3 rounded-full h-2 overflow-hidden">
              <div :style="`width: ${dailyProgress}%`" class="h-full bg-blue-600 rounded-full"></div>
            </div>
            <p v-if="tasks.length === 0" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'" class="text-sm mt-2">Añade tareas para ver tu progreso</p>
          </div>
        </section>

        <!-- Main Content Area -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Task List -->
          <div :class="[
            'lg:col-span-2 shadow-sm border rounded-lg overflow-hidden',
            isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          ]">
            <div :class="isDarkMode ? 'border-gray-700' : 'border-gray-200'" class="flex items-center justify-between p-5 border-b">
              <h2 :class="isDarkMode ? 'text-white' : 'text-gray-800'" class="text-xl font-bold">Mis tareas</h2>
              <button
                @click="openNewTaskModal()"
                class="flex items-center gap-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-all"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span>Nueva tarea</span>
              </button>
            </div>
            
            <!-- Add Task Form -->
            <div v-if="showAddTaskForm" :class="isDarkMode ? 'bg-gray-700 border-gray-700' : 'bg-gray-50 border-gray-200'" class="p-5 border-b">
              <h3 :class="isDarkMode ? 'text-white' : 'text-gray-800'" class="text-lg font-medium mb-3">Agregar nueva tarea</h3>
              <div class="space-y-3">
                <div>
                  <label for="task-title" :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'" class="block text-sm font-medium mb-1">Título</label>
                  <input 
                    id="task-title" 
                    v-model="newTask.title" 
                    type="text" 
                    :class="[
                      'w-full px-4 py-2.5 border rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
                      isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'
                    ]"
                    placeholder="Escribe el título de la tarea"
                  />
                </div>
                <div>
                  <label for="task-description" :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'" class="block text-sm font-medium mb-1">Descripción</label>
                  <textarea 
                    id="task-description" 
                    v-model="newTask.description" 
                    rows="2" 
                    :class="[
                      'w-full px-4 py-2.5 border rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
                      isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'
                    ]"
                    placeholder="Describe brevemente la tarea"
                  ></textarea>
                </div>
                <div class="flex gap-2 pt-2">
                  <button 
                    @click="addTask" 
                    class="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-all"
                  >
                    Guardar tarea
                  </button>
                  <button 
                    @click="showAddTaskForm = false" 
                    :class="isDarkMode ? 'bg-gray-700 border-gray-600 hover:bg-gray-600 text-gray-300' : 'bg-gray-200 hover:bg-gray-300 border-gray-300 text-gray-700'"
                    class="px-4 py-2 rounded-lg border transition-all"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
            
            <!-- Task List -->
            <div class="p-5">
              <div class="mb-4 flex justify-between items-center">
                <div class="flex items-center gap-2">
                  <button 
                    @click="filter = 'all'" 
                    :class="{
                      'bg-blue-100 text-blue-700': filter === 'all' && !isDarkMode,
                      'bg-gray-100 text-gray-700': filter !== 'all' && !isDarkMode,
                      'bg-blue-900 text-blue-300': filter === 'all' && isDarkMode,
                      'bg-gray-700 text-gray-300': filter !== 'all' && isDarkMode
                    }"
                    class="px-3 py-1 rounded-lg text-sm hover:bg-opacity-90 transition-all"
                  >
                    Todas
                  </button>
                  <button 
                    @click="filter = 'pending'" 
                    :class="{
                      'bg-blue-100 text-blue-700': filter === 'pending' && !isDarkMode,
                      'bg-gray-100 text-gray-700': filter !== 'pending' && !isDarkMode,
                      'bg-blue-900 text-blue-300': filter === 'pending' && isDarkMode,
                      'bg-gray-700 text-gray-300': filter !== 'pending' && isDarkMode
                    }"
                    class="px-3 py-1 rounded-lg text-sm hover:bg-opacity-90 transition-all"
                  >
                    Pendientes
                  </button>
                  <button 
                    @click="filter = 'completed'" 
                    :class="{
                      'bg-blue-100 text-blue-700': filter === 'completed' && !isDarkMode,
                      'bg-gray-100 text-gray-700': filter !== 'completed' && !isDarkMode,
                      'bg-blue-900 text-blue-300': filter === 'completed' && isDarkMode,
                      'bg-gray-700 text-gray-300': filter !== 'completed' && isDarkMode
                    }"
                    class="px-3 py-1 rounded-lg text-sm hover:bg-opacity-90 transition-all"
                  >
                    Completadas
                  </button>
                </div>
                <div :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'" class="text-sm">{{ filteredTasks.length }} tareas</div>
              </div>
              
              <div v-if="filteredTasks.length === 0" class="py-6 text-center">
                <svg :class="isDarkMode ? 'text-gray-600' : 'text-gray-400'" class="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                <p :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">No hay tareas para mostrar</p>
                <button 
                  @click="openNewTaskModal()" 
                  class="mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm transition-all"
                >
                  Agregar una tarea
                </button>
              </div>
              
              <div v-else class="space-y-3">
                <div 
                  v-for="(task, index) in filteredTasks" 
                  :key="index"
                  :class="[
                    'p-4 rounded-lg border transition-all',
                    isDarkMode ? 'border-gray-700 bg-gray-800 hover:bg-gray-700' : 'border-gray-200 bg-white hover:shadow-md'
                  ]"
                >
                  <div class="flex justify-between">
                    <div class="flex items-start gap-3">
                      <div>
                        <button 
                          @click="toggleTask(task)"
                          class="mt-1 w-5 h-5 rounded-full border flex items-center justify-center transition-all"
                          :class="task.completed ? 'bg-blue-600 border-blue-600' : isDarkMode ? 'border-gray-600' : 'border-gray-400'"
                        >
                          <svg v-if="task.completed" class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                          </svg>
                        </button>
                      </div>
                      <div>
                        <div class="flex items-center gap-2">
                          <h4 
                            class="font-medium transition-all" 
                            :class="{ 
                              'line-through': task.completed,
                              'text-gray-400': task.completed && !isDarkMode,
                              'text-gray-500': task.completed && isDarkMode,
                              'text-gray-800': !task.completed && !isDarkMode,
                              'text-white': !task.completed && isDarkMode
                            }"
                          >
                            {{ task.title }}
                          </h4>
                        </div>
                        <p :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="text-sm mt-1">{{ task.description }}</p>
                        <div :class="isDarkMode ? 'text-gray-500' : 'text-gray-500'" class="mt-2 text-xs">{{ task.date }}</div>
                      </div>
                    </div>
                    <div class="flex">
                      <button 
                        @click="deleteTask(index)"
                        class="text-gray-400 hover:text-red-600 transition-colors mr-2"
                      >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                      <button 
                        @click="openEditTaskModal(task)"
                        class="text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar / Activity -->
          <div :class="[
            'shadow-sm border rounded-lg overflow-hidden',
            isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          ]">
            <div :class="isDarkMode ? 'border-gray-700' : 'border-gray-200'" class="p-5 border-b">
              <h2 :class="isDarkMode ? 'text-white' : 'text-gray-800'" class="text-xl font-bold">Resumen</h2>
            </div>
            
            <!-- Calendar and Date -->
            <div :class="isDarkMode ? 'border-gray-700' : 'border-gray-200'" class="p-5 border-b">
              <div class="flex justify-between items-center mb-3">
                <h3 :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'" class="font-medium">{{ getCurrentDate() }}</h3>
                <div :class="isDarkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-600'" class="text-sm px-2 py-1 rounded-lg">{{ getCurrentDay() }}</div>
              </div>
              
              <!-- Próxima tarea -->
              <div class="mt-4">
                <h4 :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="text-sm mb-2">Próxima tarea</h4>
                <div v-if="pendingTasks.length > 0" :class="isDarkMode ? 'bg-gray-700 border-gray-700' : 'bg-gray-50 border-gray-200'" class="p-3 rounded-lg border">
                  <div class="flex items-start gap-3">
                    <div class="mt-1 w-5 h-5 rounded-full border" :class="isDarkMode ? 'border-gray-600' : 'border-gray-400'"></div>
                    <div>
                      <p :class="isDarkMode ? 'text-white' : 'text-gray-800'" class="font-medium">{{ pendingTasks[0].title }}</p>
                      <p :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="text-sm mt-1">{{ pendingTasks[0].description.substring(0, 40) + (pendingTasks[0].description.length > 40 ? '...' : '') }}</p>
                    </div>
                  </div>
                </div>
                <div v-else :class="[
                  'p-3 rounded-lg border-dashed border text-center',
                  isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'
                ]">
                  <p :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'" class="text-sm">¡Buen trabajo! No hay tareas pendientes</p>
                </div>
              </div>
            </div>
            
            <!-- Progress Summary -->
            <div class="p-5">
              <h3 :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'" class="font-medium mb-3">Productividad semanal</h3>
              <div class="flex justify-between items-end h-32 mt-2">
                <div v-for="day in weekDays" :key="day.name" class="flex flex-col items-center gap-1 w-full">
                  <div class="h-full w-full px-1 flex items-end">
                    <div 
                      :style="`height: ${day.value}%`" 
                      class="w-full rounded-t-md bg-blue-600"
                    ></div>
                  </div>
                  <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'" class="text-xs">{{ day.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    
    <!-- Footer -->
    <footer :class="isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'" class="border-t py-6 relative z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'" class="text-sm">© 2023 TaskMaster. Todos los derechos reservados.</p>
          <div class="flex gap-4 mt-3 md:mt-0">
            <a href="#" :class="isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-600'" class="transition-colors">
              Ayuda
            </a>
            <a href="#" :class="isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-600'" class="transition-colors">
              Privacidad
            </a>
            <a href="#" :class="isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-600'" class="transition-colors">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>

    <!-- Task Modal Component -->
    <TaskModal 
      :show="showTaskModal" 
      :task-to-edit="currentTask" 
      :dark-mode="isDarkMode"
      @close="closeModal" 
      @save="saveTask"
    />
  </div>
</template>

<script>
import { ref, computed, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { auth, logoutUser } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, addDoc, doc, updateDoc, deleteDoc, getDocs, query, orderBy } from 'firebase/firestore';
import TaskModal from '../components/TaskModal.vue';

export default {
  name: 'DashboardPage',
  components: {
    TaskModal
  },
  setup() {
    const router = useRouter();
    const user = ref(null);
    const loading = ref(true);
    const showAddTaskForm = ref(false);
    const filter = ref('all');
    const showTaskModal = ref(false);
    const currentTask = ref(null);
    
    // Inicializar modo oscuro desde localStorage o preferencia del sistema
    const isDarkMode = ref(false);
    
    // Persiste el modo en localStorage
    const setDarkMode = (value) => {
      isDarkMode.value = value;
      localStorage.setItem('darkMode', value ? 'true' : 'false');
    };
    
    // Verifica la preferencia del sistema
    const checkSystemPreference = () => {
      const userPreference = localStorage.getItem('darkMode');
      if (userPreference !== null) {
        // Si hay una preferencia guardada, úsala
        isDarkMode.value = userPreference === 'true';
      } else {
        // Si no hay preferencia, verifica la del sistema
        isDarkMode.value = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
    };
    
    // Escucha cambios en la preferencia del sistema
    const listenForThemeChanges = () => {
      if (window.matchMedia) {
        const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        if (colorSchemeQuery.addEventListener) {
          colorSchemeQuery.addEventListener('change', (e) => {
            // Solo actualiza si no hay preferencia guardada
            if (localStorage.getItem('darkMode') === null) {
              isDarkMode.value = e.matches;
            }
          });
        }
      }
    };

    // Firebase db
    const db = getFirestore();
    
    // Timestamp para la última actualización de tareas pendientes y completadas
    const pendingTasksLastUpdated = ref(Date.now());
    const completedTasksLastUpdated = ref(Date.now());

    // Mock data for tasks
    const tasks = ref([]);

    // New task model
    const newTask = ref({
      title: '',
      description: '',
      completed: false,
      date: formatDate(new Date()),
      dueDate: '',
      priority: 'medium',
      status: 'pending',
      lastUpdated: Date.now() // Timestamp para la última actualización
    });
    
    // Historial de progreso para calcular el cambio
    const progressHistory = ref([0]);
    
    // Week days for chart
    const weekDays = ref([
      { name: 'L', value: 40 },
      { name: 'M', value: 65 },
      { name: 'X', value: 35 },
      { name: 'J', value: 85 },
      { name: 'V', value: 55 },
      { name: 'S', value: 25 },
      { name: 'D', value: 10 }
    ]);
    
    // Guardar una tarea en Firebase
    const saveTaskToFirebase = async (task) => {
      try {
        if (!user.value) {
          console.log('No hay usuario autenticado, no se guarda en Firebase');
          return;
        }
        
        console.log('Intentando guardar tarea en Firebase:', task);
        
        // Verificar si es una tarea con ID de Firestore (los IDs de Firestore comienzan con letras o números, no con 'temp_')
        if (task.id && !task.id.startsWith('temp_')) {
          // Actualizar tarea existente
          console.log('Actualizando tarea existente:', task.id);
          const taskRef = doc(db, 'users', user.value.uid, 'tasks', task.id);
          await updateDoc(taskRef, {
            title: task.title,
            description: task.description,
            completed: task.completed,
            status: task.status,
            priority: task.priority,
            dueDate: task.dueDate,
            date: task.date,
            lastUpdated: task.lastUpdated
          });
          console.log('Tarea actualizada correctamente');
        } else {
          // Nueva tarea
          console.log('Creando nueva tarea en Firebase');
          const newTaskRef = await addDoc(collection(db, 'users', user.value.uid, 'tasks'), {
            title: task.title,
            description: task.description,
            completed: task.completed,
            status: task.status,
            priority: task.priority,
            dueDate: task.dueDate,
            date: task.date,
            lastUpdated: task.lastUpdated,
            createdAt: Date.now()
          });
          
          // Actualizar el ID de la tarea con el de Firestore
          console.log('Tarea creada con ID de Firestore:', newTaskRef.id);
          const taskIndex = tasks.value.findIndex(t => t.id === task.id);
          if (taskIndex !== -1) {
            tasks.value[taskIndex].id = newTaskRef.id;
          }
        }
      } catch (error) {
        console.error('Error al guardar tarea en Firebase:', error);
      }
    };
    
    // Eliminar una tarea de Firebase
    const deleteTaskFromFirebase = async (taskId) => {
      try {
        if (!user.value) {
          console.log('No hay usuario autenticado, no se elimina de Firebase');
          return;
        }
        
        console.log('Eliminando tarea de Firebase:', taskId);
        await deleteDoc(doc(db, 'users', user.value.uid, 'tasks', taskId));
        console.log('Tarea eliminada correctamente');
      } catch (error) {
        console.error('Error al eliminar tarea de Firebase:', error);
      }
    };
    
    // Cargar tareas desde Firebase
    const loadTasksFromFirebase = async () => {
      try {
        if (!user.value) {
          console.log('No hay usuario autenticado, no se cargan tareas');
          return;
        }
        
        console.log('Cargando tareas desde Firebase para usuario:', user.value.uid);
        const q = query(
          collection(db, 'users', user.value.uid, 'tasks'),
          orderBy('lastUpdated', 'desc')
        );
        
        const querySnapshot = await getDocs(q);
        const loadedTasks = [];
        
        querySnapshot.forEach((doc) => {
          const taskData = doc.data();
          loadedTasks.push({
            id: doc.id,
            title: taskData.title,
            description: taskData.description,
            completed: taskData.completed,
            status: taskData.status || (taskData.completed ? 'completed' : 'pending'),
            priority: taskData.priority || 'medium',
            dueDate: taskData.dueDate || '',
            date: taskData.date,
            lastUpdated: taskData.lastUpdated
          });
        });
        
        console.log('Tareas cargadas desde Firebase:', loadedTasks.length);
        
        // Actualizar las tareas locales
        tasks.value = loadedTasks;
        
        // Actualizar los timestamps
        if (loadedTasks.length > 0) {
          const pendingTasks = loadedTasks.filter(t => !t.completed);
          const completedTasks = loadedTasks.filter(t => t.completed);
          
          if (pendingTasks.length > 0) {
            pendingTasksLastUpdated.value = Math.max(...pendingTasks.map(t => t.lastUpdated));
          }
          
          if (completedTasks.length > 0) {
            completedTasksLastUpdated.value = Math.max(...completedTasks.map(t => t.lastUpdated));
          }
        }
      } catch (error) {
        console.error('Error al cargar tareas desde Firebase:', error);
      }
    };
    
    // Compute filtered tasks
    const filteredTasks = computed(() => {
      if (filter.value === 'all') return tasks.value;
      if (filter.value === 'pending') return pendingTasks.value;
      if (filter.value === 'completed') return completedTasks.value;
      return tasks.value;
    });

    // Compute completed tasks
    const completedTasks = computed(() => {
      return tasks.value.filter(task => task.completed || task.status === 'completed');
    });

    // Compute pending tasks
    const pendingTasks = computed(() => {
      return tasks.value.filter(task => !task.completed && task.status !== 'completed');
    });

    // Compute daily progress
    const dailyProgress = computed(() => {
      if (tasks.value.length === 0) return 0;
      return Math.round((completedTasks.value.length / tasks.value.length) * 100);
    });
    
    // Vigilar cambios en el progreso para actualizar el historial
    watch(dailyProgress, (newProgress) => {
      const lastProgress = progressHistory.value[progressHistory.value.length - 1];
      if (newProgress !== lastProgress) {
        progressHistory.value.push(newProgress);
        // Limitar historial a últimos 10 valores
        if (progressHistory.value.length > 10) {
          progressHistory.value.shift();
        }
      }
    });
    
    // Calcular cambio de progreso
    const progressChange = computed(() => {
      if (progressHistory.value.length < 2) return 0;
      const current = progressHistory.value[progressHistory.value.length - 1];
      const previous = progressHistory.value[progressHistory.value.length - 2];
      const change = current - previous;
      return change > 0 ? change : 0; // Solo mostrar cambios positivos
    });

    // Toggle task completed status
    const toggleTask = (task) => {
      task.completed = !task.completed;
      // También actualizar el estado si se está usando
      if (task.status) {
        task.status = task.completed ? 'completed' : 'pending';
      }
      
      // Actualizar el timestamp
      task.lastUpdated = Date.now();
      
      // Actualizar timestamps de las listas de tareas
      if (task.completed) {
        completedTasksLastUpdated.value = Date.now();
      } else {
        pendingTasksLastUpdated.value = Date.now();
      }
      
      // Guardar la tarea actualizada en Firebase
      saveTaskToFirebase(task);
    };

    // Abrir modal para nueva tarea
    const openNewTaskModal = () => {
      currentTask.value = null;
      showTaskModal.value = true;
    };

    // Abrir modal para editar tarea
    const openEditTaskModal = (task) => {
      currentTask.value = task;
      showTaskModal.value = true;
    };

    // Cerrar modal
    const closeModal = () => {
      showTaskModal.value = false;
      currentTask.value = null;
    };

    // Guardar tarea (nueva o editada)
    const saveTask = (taskData) => {
      if (currentTask.value) {
        // Actualizar tarea existente
        const index = tasks.value.findIndex(t => t.id === taskData.id);
        if (index !== -1) {
          // Preservar algunos campos que pueden no estar en el modal
          taskData.completed = taskData.status === 'completed';
          taskData.date = tasks.value[index].date;
          taskData.lastUpdated = Date.now();
          
          // Actualizar los timestamps según el estado
          if (taskData.completed) {
            completedTasksLastUpdated.value = Date.now();
          } else {
            pendingTasksLastUpdated.value = Date.now();
          }
          
          tasks.value[index] = taskData;
          
          // Guardar en Firebase
          saveTaskToFirebase(taskData);
        }
      } else {
        // Añadir nueva tarea
        const newTaskData = {
          ...taskData,
          completed: taskData.status === 'completed',
          date: formatDate(new Date()),
          lastUpdated: Date.now(),
          id: `temp_${Date.now()}` // ID temporal con prefijo
        };
        
        // Actualizar timestamps
        if (newTaskData.completed) {
          completedTasksLastUpdated.value = Date.now();
        } else {
          pendingTasksLastUpdated.value = Date.now();
        }
        
        tasks.value.unshift(newTaskData);
        
        // Guardar en Firebase
        saveTaskToFirebase(newTaskData);
      }
    };

    // Add new task from form (usando el formulario inline, no el modal)
    const addTask = () => {
      if (!newTask.value.title) return;
      
      const newTaskData = {
        ...newTask.value,
        id: `temp_${Date.now()}`, // ID temporal con prefijo
        date: formatDate(new Date()),
        lastUpdated: Date.now()
      };
      
      tasks.value.unshift(newTaskData);
      
      // Guardar en Firebase
      saveTaskToFirebase(newTaskData);
      
      // Reset form
      newTask.value = {
        title: '',
        description: '',
        completed: false,
        date: formatDate(new Date()),
        dueDate: '',
        priority: 'medium',
        status: 'pending'
      };
      
      showAddTaskForm.value = false;
    };

    // Delete task
    const deleteTask = (index) => {
      const taskIndex = tasks.value.indexOf(filteredTasks.value[index]);
      if (taskIndex !== -1) {
        const taskToDelete = tasks.value[taskIndex];
        const taskId = taskToDelete.id;
        
        // Actualizar timestamp según la tarea que se elimina
        if (taskToDelete.completed) {
          completedTasksLastUpdated.value = Date.now();
        } else {
          pendingTasksLastUpdated.value = Date.now();
        }
        
        // Eliminar de la lista local
        tasks.value.splice(taskIndex, 1);
        
        // Eliminar de Firebase
        deleteTaskFromFirebase(taskId);
      }
    };

    // Get user initials for avatar
    const getUserInitials = () => {
      if (!user.value || !user.value.email) return 'U';
      const email = user.value.email;
      return email.charAt(0).toUpperCase();
    };

    // Format date
    function formatDate(date) {
      const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
      const day = date.getDate();
      const month = months[date.getMonth()];
      const year = date.getFullYear();
      return `${day} ${month}, ${year}`;
    }

    // Get current date
    const getCurrentDate = () => {
      const date = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString('es-ES', options);
    };

    // Get current day
    const getCurrentDay = () => {
      const date = new Date();
      const day = date.getDate();
      return `Día ${day}`;
    };

    // Función para calcular el tiempo transcurrido desde una actualización
    const getTimeSinceUpdate = (timestamp) => {
      const now = Date.now();
      const diffInMinutes = Math.floor((now - timestamp) / 60000);
      
      if (diffInMinutes < 1) return 'menos de un minuto';
      if (diffInMinutes === 1) return '1 minuto';
      if (diffInMinutes < 60) return `${diffInMinutes} minutos`;
      
      const diffInHours = Math.floor(diffInMinutes / 60);
      if (diffInHours === 1) return '1 hora';
      if (diffInHours < 24) return `${diffInHours} horas`;
      
      const diffInDays = Math.floor(diffInHours / 24);
      if (diffInDays === 1) return '1 día';
      return `${diffInDays} días`;
    };

    onMounted(() => {
      // Verificar preferencia de tema
      checkSystemPreference();
      listenForThemeChanges();
      
      // Listener de Firebase Authentication
      const unsubscribe = onAuthStateChanged(auth, (userData) => {
        loading.value = false;
        if (userData) {
          // Usuario autenticado
          console.log('Usuario autenticado:', userData.email);
          user.value = userData;
          
          // Cargar tareas del usuario
          loadTasksFromFirebase();
        } else {
          // No hay usuario autenticado, redirigir a login
          console.log('No hay usuario autenticado, redirigiendo a login');
          router.push('/auth');
        }
      });
      
      // Limpiar el listener cuando se desmonta el componente
      return () => unsubscribe();
    });

    const logout = async () => {
      try {
        await logoutUser();
        router.push('/auth');
      } catch (error) {
        console.error('Error al cerrar sesión:', error);
      }
    };

    return {
      user,
      loading,
      logout,
      tasks,
      newTask,
      weekDays,
      showAddTaskForm,
      filter,
      filteredTasks,
      completedTasks,
      pendingTasks,
      dailyProgress,
      progressChange,
      toggleTask,
      addTask,
      deleteTask,
      getUserInitials,
      formatDate,
      getCurrentDate,
      getCurrentDay,
      getTimeSinceUpdate,
      showTaskModal,
      currentTask,
      openNewTaskModal,
      openEditTaskModal,
      closeModal,
      saveTask,
      pendingTasksLastUpdated,
      completedTasksLastUpdated,
      isDarkMode,
      setDarkMode
    };
  }
};
</script>

<style scoped>
/* Ya no necesitamos las animaciones de blob */
</style> 