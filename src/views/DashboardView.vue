<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
    <!-- Header -->
    <header class="bg-slate-800/50 backdrop-blur-md border-b border-white/10 sticky top-0 z-10">
      <div class="container mx-auto px-4 sm:px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <div class="flex items-center space-x-2">
              <div class="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-lg flex items-center justify-center shadow-sm">
                <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                </svg>
              </div>
              <span class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">TaskMaster</span>
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <button 
              @click="openNewTaskModal"
              class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-xl hover:opacity-90 transition-all"
            >
              <svg class="w-5 h-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
              </svg>
              Nueva Tarea
            </button>
            
            <div class="relative">
              <button class="w-10 h-10 rounded-full bg-white/10 overflow-hidden flex items-center justify-center hover:bg-white/20 transition-colors">
                <span class="text-lg font-medium">{{ userInitials }}</span>
              </button>
              <!-- Dropdown user menu podría ir aquí -->
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-4 sm:px-6 py-8">
      <!-- Dashboard Overview -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-sm">
          <div class="flex justify-between items-start">
            <div>
              <h3 class="text-gray-400 text-sm font-medium">Tareas pendientes</h3>
              <p class="text-3xl font-bold mt-1">{{ pendingTasksCount }}</p>
            </div>
            <div class="p-3 rounded-xl bg-yellow-500/10 text-yellow-500">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
          </div>
          <div class="mt-3 flex items-center text-sm">
            <span :class="pendingTasksChange >= 0 ? 'text-green-400' : 'text-red-400'">
              {{ pendingTasksChange >= 0 ? '+' : '' }}{{ pendingTasksChange }}%
            </span>
            <span class="ml-2 text-gray-400">desde ayer</span>
          </div>
        </div>

        <div class="bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-sm">
          <div class="flex justify-between items-start">
            <div>
              <h3 class="text-gray-400 text-sm font-medium">En progreso</h3>
              <p class="text-3xl font-bold mt-1">{{ inProgressTasksCount }}</p>
            </div>
            <div class="p-3 rounded-xl bg-blue-500/10 text-blue-500">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
              </svg>
            </div>
          </div>
          <div class="mt-3 flex items-center text-sm">
            <span :class="inProgressTasksChange >= 0 ? 'text-green-400' : 'text-red-400'">
              {{ inProgressTasksChange >= 0 ? '+' : '' }}{{ inProgressTasksChange }}%
            </span>
            <span class="ml-2 text-gray-400">desde ayer</span>
          </div>
        </div>

        <div class="bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-sm">
          <div class="flex justify-between items-start">
            <div>
              <h3 class="text-gray-400 text-sm font-medium">Completadas</h3>
              <p class="text-3xl font-bold mt-1">{{ completedTasksCount }}</p>
            </div>
            <div class="p-3 rounded-xl bg-green-500/10 text-green-500">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
          </div>
          <div class="mt-3 flex items-center text-sm">
            <span :class="completedTasksChange >= 0 ? 'text-green-400' : 'text-red-400'">
              {{ completedTasksChange >= 0 ? '+' : '' }}{{ completedTasksChange }}%
            </span>
            <span class="ml-2 text-gray-400">desde ayer</span>
          </div>
        </div>
      </div>

      <!-- Filters and Sorting -->
      <div class="flex flex-col md:flex-row md:items-center justify-between mb-6 space-y-4 md:space-y-0">
        <div class="flex items-center space-x-2">
          <h2 class="text-2xl font-bold">Mis tareas</h2>
          <span class="text-sm bg-white/10 text-gray-300 px-3 py-1 rounded-full">{{ tasks.length }}</span>
        </div>
        
        <div class="flex flex-wrap items-center gap-3">
          <div class="relative">
            <select 
              v-model="filters.priority" 
              class="appearance-none bg-slate-800/50 border border-white/10 rounded-xl py-2 pl-4 pr-10 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
            >
              <option value="">Todas las prioridades</option>
              <option value="high">Alta prioridad</option>
              <option value="medium">Media prioridad</option>
              <option value="low">Baja prioridad</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div class="relative">
            <select 
              v-model="filters.status" 
              class="appearance-none bg-slate-800/50 border border-white/10 rounded-xl py-2 pl-4 pr-10 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
            >
              <option value="">Todos los estados</option>
              <option value="pending">Pendiente</option>
              <option value="in-progress">En proceso</option>
              <option value="completed">Completada</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div class="relative">
            <select 
              v-model="sortBy" 
              class="appearance-none bg-slate-800/50 border border-white/10 rounded-xl py-2 pl-4 pr-10 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
            >
              <option value="dueDate">Fecha límite</option>
              <option value="priority">Prioridad</option>
              <option value="title">Título</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Task List Section -->
      <div class="bg-slate-800/30 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-sm">
        <!-- Empty state -->
        <div v-if="filteredTasks.length === 0" class="flex flex-col items-center justify-center p-12">
          <div class="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mb-4">
            <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
            </svg>
          </div>
          <h3 class="text-xl font-medium text-gray-300 mb-2">No hay tareas</h3>
          <p class="text-gray-400 text-center mb-4">No se encontraron tareas con los filtros actuales.</p>
          <button 
            @click="openNewTaskModal"
            class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-xl hover:opacity-90 transition-all"
          >
            <svg class="w-5 h-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
            </svg>
            Crear tarea
          </button>
        </div>
        
        <!-- Task list -->
        <div v-else class="divide-y divide-white/5">
          <div 
            v-for="task in filteredTasks" 
            :key="task.id" 
            class="p-4 sm:p-6 hover:bg-white/5 transition-colors"
          >
            <div class="flex items-start justify-between">
              <div class="flex items-start space-x-4">
                <!-- Checkbox para estado de completado -->
                <div class="pt-1">
                  <button 
                    @click="toggleTaskStatus(task)"
                    :class="[
                      'w-6 h-6 rounded-full border flex items-center justify-center transition-colors',
                      task.status === 'completed' 
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-gray-400 hover:border-purple-400'
                    ]"
                  >
                    <svg v-if="task.status === 'completed'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </button>
                </div>
                
                <!-- Task content -->
                <div class="flex-grow">
                  <div class="flex items-center space-x-3">
                    <h3 
                      :class="[
                        'font-medium transition-all',
                        task.status === 'completed' ? 'line-through text-gray-400' : 'text-white'
                      ]"
                    >
                      {{ task.title }}
                    </h3>
                    
                    <!-- Priority badge -->
                    <span 
                      :class="[
                        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
                        getPriorityClasses(task.priority)
                      ]"
                    >
                      {{ getPriorityLabel(task.priority) }}
                    </span>
                    
                    <!-- Status badge -->
                    <span 
                      :class="[
                        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
                        getStatusClasses(task.status)
                      ]"
                    >
                      {{ getStatusLabel(task.status) }}
                    </span>
                  </div>
                  
                  <p 
                    v-if="task.description" 
                    class="text-gray-400 mt-1"
                    :class="{'line-through opacity-70': task.status === 'completed'}"
                  >
                    {{ task.description }}
                  </p>
                  
                  <div class="mt-2 flex items-center space-x-4 text-sm text-gray-400">
                    <div v-if="task.dueDate" class="flex items-center">
                      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      <span :class="isTaskOverdue(task) ? 'text-red-400' : ''">
                        {{ formatDate(task.dueDate) }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Task actions -->
              <div class="flex items-center space-x-1">
                <button 
                  @click="editTask(task)"
                  class="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                  </svg>
                </button>
                
                <button 
                  @click="deleteTask(task.id)"
                  class="p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Task Modal -->
    <TaskModal 
      :show="showTaskModal" 
      :task-to-edit="editingTask" 
      @close="closeTaskModal" 
      @save="saveTask"
    />
  </div>
</template>

<script>
import { ref, computed, reactive, onMounted } from 'vue';
import TaskModal from '@/components/TaskModal.vue';

export default {
  name: 'DashboardView',
  components: {
    TaskModal
  },
  setup() {
    const user = ref({
      firstName: 'Usuario',
      lastName: 'Demo'
    });
    
    const tasks = ref([]);
    const showTaskModal = ref(false);
    const editingTask = ref(null);
    
    const filters = reactive({
      status: '',
      priority: ''
    });
    
    const sortBy = ref('dueDate');
    
    // Obtener las iniciales del usuario
    const userInitials = computed(() => {
      return `${user.value.firstName.charAt(0)}${user.value.lastName.charAt(0)}`;
    });
    
    // Tareas filtradas y ordenadas
    const filteredTasks = computed(() => {
      let result = [...tasks.value];
      
      // Aplicar filtros
      if (filters.status) {
        result = result.filter(task => task.status === filters.status);
      }
      
      if (filters.priority) {
        result = result.filter(task => task.priority === filters.priority);
      }
      
      // Ordenar
      switch (sortBy.value) {
        case 'dueDate':
          result.sort((a, b) => {
            if (!a.dueDate) return 1;
            if (!b.dueDate) return -1;
            return new Date(a.dueDate) - new Date(b.dueDate);
          });
          break;
        case 'priority':
          const priorityOrder = { high: 0, medium: 1, low: 2 };
          result.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
          break;
        case 'title':
          result.sort((a, b) => a.title.localeCompare(b.title));
          break;
      }
      
      return result;
    });
    
    // Estadísticas de tareas
    const pendingTasksCount = computed(() => tasks.value.filter(task => task.status === 'pending').length);
    const inProgressTasksCount = computed(() => tasks.value.filter(task => task.status === 'in-progress').length);
    const completedTasksCount = computed(() => tasks.value.filter(task => task.status === 'completed').length);
    
    // Cambios porcentuales ficticios (en una app real se calcularían con datos históricos)
    const pendingTasksChange = ref(5);
    const inProgressTasksChange = ref(-2);
    const completedTasksChange = ref(10);
    
    // Formatear fecha
    const formatDate = (dateString) => {
      if (!dateString) return '';
      
      const date = new Date(dateString);
      const today = new Date();
      const tomorrow = new Date();
      tomorrow.setDate(today.getDate() + 1);
      
      // Verificar si es hoy o mañana
      if (date.toDateString() === today.toDateString()) {
        return 'Hoy';
      } else if (date.toDateString() === tomorrow.toDateString()) {
        return 'Mañana';
      }
      
      // Formato DD/MM/YYYY
      return date.toLocaleDateString('es', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };
    
    // Verificar si la tarea está vencida
    const isTaskOverdue = (task) => {
      if (!task.dueDate || task.status === 'completed') return false;
      
      const dueDate = new Date(task.dueDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      return dueDate < today;
    };
    
    // Abrir modal para nueva tarea
    const openNewTaskModal = () => {
      editingTask.value = null;
      showTaskModal.value = true;
    };
    
    // Cerrar modal
    const closeTaskModal = () => {
      showTaskModal.value = false;
      editingTask.value = null;
    };
    
    // Editar tarea
    const editTask = (task) => {
      editingTask.value = { ...task };
      showTaskModal.value = true;
    };
    
    // Guardar tarea (nueva o editada)
    const saveTask = (taskData) => {
      const taskIndex = tasks.value.findIndex(t => t.id === taskData.id);
      
      if (taskIndex >= 0) {
        // Actualizar tarea existente
        tasks.value[taskIndex] = taskData;
      } else {
        // Añadir nueva tarea
        tasks.value.push(taskData);
      }
      
      // En un caso real, aquí se guardaría en una API o base de datos
      saveTasks();
    };
    
    // Eliminar tarea
    const deleteTask = (taskId) => {
      if (confirm('¿Estás seguro de que deseas eliminar esta tarea?')) {
        tasks.value = tasks.value.filter(task => task.id !== taskId);
        
        // En un caso real, aquí se eliminaría de la API o base de datos
        saveTasks();
      }
    };
    
    // Cambiar estado de tarea
    const toggleTaskStatus = (task) => {
      const taskIndex = tasks.value.findIndex(t => t.id === task.id);
      
      if (taskIndex >= 0) {
        if (tasks.value[taskIndex].status === 'completed') {
          tasks.value[taskIndex].status = 'pending';
        } else {
          tasks.value[taskIndex].status = 'completed';
        }
        
        // En un caso real, aquí se actualizaría en la API o base de datos
        saveTasks();
      }
    };
    
    // Guardar tareas en localStorage (simulando persistencia)
    const saveTasks = () => {
      localStorage.setItem('tasks', JSON.stringify(tasks.value));
    };
    
    // Cargar tareas desde localStorage
    const loadTasks = () => {
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks) {
        tasks.value = JSON.parse(savedTasks);
      } else {
        // Tareas de ejemplo
        tasks.value = [
          {
            id: '1',
            title: 'Completar informe de proyecto',
            description: 'Finalizar el informe trimestral para la reunión del lunes',
            dueDate: '2023-10-30',
            priority: 'high',
            status: 'in-progress'
          },
          {
            id: '2',
            title: 'Preparar presentación',
            description: 'Crear diapositivas para la reunión con el cliente',
            dueDate: '2023-11-05',
            priority: 'medium',
            status: 'pending'
          },
          {
            id: '3',
            title: 'Revisar correos',
            description: 'Responder a los correos pendientes',
            dueDate: '2023-10-28',
            priority: 'low',
            status: 'completed'
          }
        ];
        saveTasks();
      }
    };
    
    // Obtener clases CSS para los badges de prioridad
    const getPriorityClasses = (priority) => {
      switch (priority) {
        case 'high':
          return 'bg-red-500/20 text-red-400 border border-red-500/30';
        case 'medium':
          return 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30';
        case 'low':
          return 'bg-blue-500/20 text-blue-400 border border-blue-500/30';
        default:
          return 'bg-gray-500/20 text-gray-400 border border-gray-500/30';
      }
    };
    
    // Obtener etiqueta para prioridad
    const getPriorityLabel = (priority) => {
      switch (priority) {
        case 'high': return 'Alta';
        case 'medium': return 'Media';
        case 'low': return 'Baja';
        default: return 'Sin prioridad';
      }
    };
    
    // Obtener clases CSS para los badges de estado
    const getStatusClasses = (status) => {
      switch (status) {
        case 'pending':
          return 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30';
        case 'in-progress':
          return 'bg-blue-500/20 text-blue-400 border border-blue-500/30';
        case 'completed':
          return 'bg-green-500/20 text-green-400 border border-green-500/30';
        default:
          return 'bg-gray-500/20 text-gray-400 border border-gray-500/30';
      }
    };
    
    // Obtener etiqueta para estado
    const getStatusLabel = (status) => {
      switch (status) {
        case 'pending': return 'Pendiente';
        case 'in-progress': return 'En proceso';
        case 'completed': return 'Completada';
        default: return 'Sin estado';
      }
    };
    
    // Cargar tareas al montar el componente
    onMounted(() => {
      loadTasks();
    });
    
    return {
      user,
      userInitials,
      tasks,
      filteredTasks,
      filters,
      sortBy,
      pendingTasksCount,
      inProgressTasksCount,
      completedTasksCount,
      pendingTasksChange,
      inProgressTasksChange,
      completedTasksChange,
      showTaskModal,
      editingTask,
      formatDate,
      isTaskOverdue,
      openNewTaskModal,
      closeTaskModal,
      editTask,
      saveTask,
      deleteTask,
      toggleTaskStatus,
      getPriorityClasses,
      getPriorityLabel,
      getStatusClasses,
      getStatusLabel
    };
  }
}
</script>
