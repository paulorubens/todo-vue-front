<template>
  <div class="card">
    <div class="card-header">
      <h5>
        {{ title }}
        <span class="badge bg-info">
          {{ taskList.filter((task) => task.completed === false).length }}
        </span>
      </h5>
    </div>
    <div class="card-body">
      <div class="input-group">
        <input
          class="form-control"
          type="text"
          v-model="task"
          v-on:keyup.enter="addTask(task)"
          placeholder="Informe a próxima tarefa"
        />
        <div class="input-group-append">
          <button class="btn btn-info" v-on:click="addTask(task)">
            <span class="fa fa-plus"></span>
          </button>
        </div>
      </div>
      <br />
      <TaskListItems
        v-bind:tasks="tasks"
        v-on:completeTask="completeTask"
        v-on:editTask="editTask"
        v-on:updateTask="updateTask"
        v-on:deleteTask="deleteTask"
      ></TaskListItems>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import TaskListItems from "./TaskListItems.vue";

export default {
  name: "TaskList",
  props: ["title"],
  components: {
    TaskListItems,
  },
  data() {
    return {
      maxId: 3,
      task: "",
      taskList: [
        {
          id: 1,
          description: "tarefa 1",
          dateCreated: "20/11/2020",
          dateCompleted: "20/11/2020",
          completed: true,
          edit: false,
        },
        {
          id: 2,
          description: "tarefa 2",
          dateCreated: "20/11/2020",
          dateCompleted: "",
          completed: false,
          edit: false,
        },
        {
          id: 3,
          description: "tarefa 3",
          dateCreated: "20/11/2020",
          dateCompleted: "",
          completed: false,
          edit: false,
        },
      ],
    };
  },
  methods: {
    addTask(task) {
      if (!task) {
        return;
      }
      this.maxId++;
      var t1 = {
        id: this.maxId,
        description: task,
        dateCreated: new Date().toLocaleDateString(),
        dateCompleted: "",
        completed: false,
      };
      this.taskList.unshift(t1);
      this.task = "";
    },
    completeTask(task) {
      task.dateCompleted = new Date().toLocaleDateString();
      task.completed = true;
    },
    editTask(task) {
      if (task.completed) {
        return;
      }
      task.edit = true;
    },
    updateTask(task) {
      task.edit = false;
    },
    deleteTask(task) {
      this.taskList.splice(this.taskList.indexOf(task), 1);
    },
  },
  computed: {
    tasks() {
      var list = this.taskList;
      const sorted = list.sort((n1, n2) => {
        if (n1.dateCompleted < n2.dateCompleted) {
          return -1;
        }
        if (n1.dateCompleted == n2.dateCompleted) {
          return 0;
        }
        if (n1.dateCompleted > n2.dateCompleted) {
          return 1;
        }
      });
      return sorted;
    },
  },
};
</script>

<style>
li {
  cursor: default;
}
</style>