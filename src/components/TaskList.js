import TaskService from '../services/TaskService';
import TaskListItems from './TaskListItems.vue';

export default {
  name: 'TaskList',
  props: {
    title: {
      type: String,
      default: 'Tarefas',
    },
  },
  components: {
    TaskListItems,
  },
  data() {
    return {
      task: '',
      taskOld: {},
      taskList: [],
    };
  },
  mounted() {
    this.getTasks();
  },
  methods: {
    async getTasks() {
      const lista = await TaskService.getTasks();
      if (lista) {
        this.taskList = lista;
      }
    },
    async addTask(task) {
      if (!task) {
        return;
      }
      var t1 = {
        description: task,
        dateCreated: new Date(),
        dateCompleted: null,
        completed: false,
      };
      t1 = await TaskService.createTask(t1);
      this.taskList.unshift(t1);
      this.task = '';
    },
    completeTask(task) {
      task.dateCompleted = new Date();
      task.completed = true;
      this.updateTask(task);
    },
    editTask(task) {
      if (task.completed) {
        return;
      }
      this.taskOld = Object.assign(this.taskOld, task);
      task.edit = true;
    },
    updateTask(task) {
      delete task.edit;
      TaskService.updateTask(task).then((response) => {
        var message = '';
        var icon = '';
        if (response.status === 200) {
          message = 'Updated successfully!';
          icon = 'success';
        } else {
          message = 'Something wrong!';
          icon = 'error';
        }

        this.$swal({
          title: message,
          icon: icon,
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
      });
    },
    cancelarEdicaoTask(task) {
      task = Object.assign(task, this.taskOld);
      task.edit = false;
    },
    deleteTask(task) {
      this.$swal({
        title: 'Are you sure to delete?',
        text: 'Wath out! This Task will be deleted!',
        icon: 'warning',
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel',
      }).then((result) => {
        if (result.isConfirmed) {
          var message = '';
          var icon = '';
          TaskService.deleteTask(task.id).then((response) => {
            if (response.status === 204) {
              message = 'Deleted successfully!';
              icon = 'success';
            } else {
              message = 'Something wrong!';
              icon = 'error';
            }

            this.$swal({
              title: message,
              icon: icon,
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
            });

            if (response.status === 204)
              this.taskList.splice(this.taskList.indexOf(task), 1);
          });
        }
      });
    },
  },
  computed: {
    tasks() {
      var list = this.taskList;
      const sorted = list.sort((n1, n2) => {
        if (n1.dateCompleted == n2.dateCompleted) {
          return 0;
        } else if (n1.dateCompleted == null) {
          return -1;
        } else if (n2.dateCompleted == null) {
          return 1;
        } else if (n1.dateCompleted < n2.dateCompleted) {
          return 1;
        } else if (n1.dateCompleted > n2.dateCompleted) {
          return -1;
        }
      });
      return sorted;
    },
  },
};
