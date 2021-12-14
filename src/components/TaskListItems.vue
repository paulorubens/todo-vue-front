<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item"
        v-for="task in tasks" v-bind:key="task"
        v-on:dblclick="editTask(task)">
        <div class="row" v-if="!task.edit"
          v-bind:class="{ 'text-decoration-line-through': task.completed }">
          <div class="col-md">
            {{ task.description }}
          </div>
          <div class="col-md text-end">
            <button class="btn btn-success" v-show="task.completed == false" v-on:click="completeTask(task)"><span class="fa fa-check"></span></button>
            <button class="btn btn-info"><span class="fa fa-trash" v-on:click="deleteTask(task)"></span></button>
          </div>
        </div>
        <div class="input-group" v-if="task.edit">
          <input class="form-control" type="text" v-on:keyup.enter="updateTask(task)" v-on:keyup.esc="cancelarEdicaoTask(task)" v-model="task.description"/>
          <div class="input-group-append">
            <button class="btn btn-info" v-on:click="updateTask(task)"><span class="fa fa-check"></span></button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TaskListItems',
  props: ["tasks"],
  methods: {
    completeTask(task) {
      this.$emit("completeTask", task);
    },
    editTask(task) {
      this.$emit("editTask", task);
    },
    updateTask(task) {
      this.$emit("updateTask", task);
    },
    deleteTask(task) {
      this.$emit("deleteTask", task);
    },
    cancelarEdicaoTask(task) {
      this.$emit("cancelarEdicaoTask", task);
    }
  }
};
</script>

<style>
li {
  cursor: default;
}
</style>