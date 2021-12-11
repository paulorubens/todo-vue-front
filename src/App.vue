<template>
  <div>
    <div id="slogan" class="text-center">
      <h1>ToDo List <span class="fa fa-check" /></h1>
    </div>
    <div>
      <div id="main" class="container" style="width: 50rem">
        <TaskList title="Tarefas"></TaskList>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import TaskList from "./components/TaskList.vue";

export default {
  name: "App",
  components: {
    TaskList,
  }
};
</script>

<style>
body {
  background-color: darkslategrey;
}
#slogan {
  color: #f1f1f1;
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
