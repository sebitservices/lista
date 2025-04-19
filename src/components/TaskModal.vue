<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center p-4" v-if="show">
    <!-- Overlay sin efecto blur -->
    <div class="absolute inset-0 bg-black/60" @click="$emit('close')"></div>
    
    <!-- Modal -->
    <div :class="[
      'rounded-lg border shadow-xl w-full max-w-md relative transform transition-all animate-scale-up',
      darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    ]">
      <!-- Header -->
      <div :class="darkMode ? 'border-gray-700' : 'border-gray-200'" class="p-6 border-b flex items-center justify-between">
        <h3 :class="darkMode ? 'text-white' : 'text-gray-800'" class="text-xl font-bold">{{ isEdit ? 'Editar tarea' : 'Nueva tarea' }}</h3>
        <button 
          @click="$emit('close')" 
          :class="darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-400 hover:text-gray-700'"
          class="transition-colors focus:outline-none"
          aria-label="Cerrar"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Body -->
      <div class="p-6">
        <form @submit.prevent="handleSubmit">
          <div class="space-y-5">
            <!-- Título -->
            <div>
              <label for="task-title" :class="darkMode ? 'text-gray-300' : 'text-gray-700'" class="block text-sm font-medium mb-1">Título</label>
              <input 
                id="task-title" 
                v-model="taskForm.title" 
                type="text" 
                placeholder="Título de la tarea"
                :class="[
                  'w-full px-4 py-3 border rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all',
                  darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'
                ]"
                required
              />
            </div>
            
            <!-- Descripción -->
            <div>
              <label for="task-description" :class="darkMode ? 'text-gray-300' : 'text-gray-700'" class="block text-sm font-medium mb-1">Descripción</label>
              <textarea 
                id="task-description" 
                v-model="taskForm.description" 
                rows="3" 
                placeholder="Descripción detallada"
                :class="[
                  'w-full px-4 py-3 border rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none',
                  darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'
                ]"
              ></textarea>
            </div>
            
            <!-- Fecha -->
            <div>
              <label for="task-date" :class="darkMode ? 'text-gray-300' : 'text-gray-700'" class="block text-sm font-medium mb-1">Fecha límite</label>
              <input 
                id="task-date" 
                v-model="taskForm.dueDate" 
                type="date" 
                :class="[
                  'w-full px-4 py-3 border rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all',
                  darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'
                ]"
              />
            </div>

            <!-- Prioridad -->
            <div>
              <label :class="darkMode ? 'text-gray-300' : 'text-gray-700'" class="block text-sm font-medium mb-2">Prioridad</label>
              <div class="flex space-x-3">
                <template v-for="priority in priorities" :key="priority.value">
                  <button 
                    type="button"
                    @click="taskForm.priority = priority.value"
                    :class="[
                      'flex-1 py-2 px-3 rounded-lg border focus:outline-none transition-all',
                      taskForm.priority === priority.value 
                        ? priority.darkActiveClasses : priority.activeClasses
                    ]"
                  >
                    <div class="flex items-center justify-center">
                      <span :class="[priority.iconClass, 'w-4 h-4 mr-2']"></span>
                      {{ priority.label }}
                    </div>
                  </button>
                </template>
              </div>
            </div>

            <!-- Estado -->
            <div>
              <label for="task-status" :class="darkMode ? 'text-gray-300' : 'text-gray-700'" class="block text-sm font-medium mb-1">Estado</label>
              <div class="relative">
                <select 
                  id="task-status" 
                  v-model="taskForm.status"
                  :class="[
                    'appearance-none w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all',
                    darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'
                  ]"
                >
                  <option v-for="status in statuses" :key="status.value" :value="status.value">
                    {{ status.label }}
                  </option>
                </select>
                <div class="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                  <svg class="w-4 h-4" :class="darkMode ? 'text-gray-400' : 'text-gray-500'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Botones de acción -->
          <div class="mt-6 flex space-x-3">
            <button 
              type="button" 
              @click="$emit('close')"
              :class="darkMode ? 'border-gray-700 bg-gray-700 hover:bg-gray-600 text-gray-300' : 'border-gray-300 bg-gray-100 hover:bg-gray-200 text-gray-700'"
              class="w-1/2 py-3 px-4 border rounded-lg font-medium transition-all"
            >
              Cancelar
            </button>
            <button 
              type="submit" 
              class="w-1/2 py-3 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-all"
            >
              <span>{{ isEdit ? 'Actualizar' : 'Crear' }}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskModal',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    taskToEdit: {
      type: Object,
      default: null
    },
    darkMode: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      priorities: [
        { 
          label: 'Baja', 
          value: 'low', 
          iconClass: 'text-blue-600',
          activeClasses: 'border-blue-600 bg-blue-100 text-blue-800',
          darkActiveClasses: 'border-blue-500 bg-blue-900/50 text-blue-300'
        },
        { 
          label: 'Media', 
          value: 'medium', 
          iconClass: 'text-amber-600',
          activeClasses: 'border-amber-600 bg-amber-100 text-amber-800',
          darkActiveClasses: 'border-amber-500 bg-amber-900/50 text-amber-300'
        },
        { 
          label: 'Alta', 
          value: 'high', 
          iconClass: 'text-red-600',
          activeClasses: 'border-red-600 bg-red-100 text-red-800',
          darkActiveClasses: 'border-red-500 bg-red-900/50 text-red-300'
        }
      ],
      statuses: [
        { label: 'Pendiente', value: 'pending' },
        { label: 'En proceso', value: 'in-progress' },
        { label: 'Completada', value: 'completed' }
      ],
      taskForm: {
        title: '',
        description: '',
        dueDate: '',
        priority: 'medium',
        status: 'pending'
      }
    }
  },
  computed: {
    isEdit() {
      return !!this.taskToEdit;
    }
  },
  watch: {
    taskToEdit: {
      immediate: true,
      handler(task) {
        if (task) {
          this.taskForm = { ...task };
        } else {
          this.resetForm();
        }
      }
    }
  },
  methods: {
    resetForm() {
      this.taskForm = {
        title: '',
        description: '',
        dueDate: '',
        priority: 'medium',
        status: 'pending'
      };
    },
    handleSubmit() {
      // Ajustar la fecha para la zona horaria de Chile
      let adjustedDueDate = this.taskForm.dueDate;
      if (adjustedDueDate) {
        const date = new Date(adjustedDueDate);
        // Ajustar a la zona horaria de Chile (UTC-4)
        const chileanDate = new Date(date.getTime() + (date.getTimezoneOffset() * 60000) + (4 * 60 * 60000));
        adjustedDueDate = chileanDate.toISOString().split('T')[0];
      }

      const taskData = {
        ...this.taskForm,
        dueDate: adjustedDueDate,
        id: this.isEdit ? this.taskToEdit.id : Date.now().toString()
      };
      
      this.$emit('save', taskData);
      this.resetForm();
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
@keyframes scale-up {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-scale-up {
  animation: scale-up 0.2s ease-out;
}

/* Estilos para input de tipo fecha - modo claro */
.bg-white input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(0);
  opacity: 0.7;
  cursor: pointer;
}

/* Estilos para input de tipo fecha - modo oscuro */
.bg-gray-700 input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(1);
  opacity: 0.7;
  cursor: pointer;
}

/* Estilos para customizar el select - modo oscuro */
.bg-gray-700 select option {
  background-color: #374151;
  color: white;
}

/* Estilos para customizar el select - modo claro */
.bg-white select option {
  background-color: white;
  color: #1f2937;
}
</style>
