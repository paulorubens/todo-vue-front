<template>
  <div class="card">
    <div class="card-header">
      <div class="input-group">
        <h5 class="col-md">
          {{ title }}
          <span class="badge bg-info">
            {{ taskList.filter((task) => task.completed === false).length }}
          </span>
        </h5>
        <div class="col-md text-end">
          <button class="btn btn-info" v-on:click="getTasks()">
            <span class="fa fa-refresh"></span>
          </button>
        </div>
      </div>
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
        v-on:cancelarEdicaoTask="cancelarEdicaoTask"
      ></TaskListItems>
    </div>
  </div>
</template>

<script src="./TaskList.js"></script>