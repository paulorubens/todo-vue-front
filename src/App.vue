<template>
  <div>
    <div id="slogan" class="text-center">
      <h1>ToDo List <span class="fa fa-check" /></h1>
    </div>
    <div id="main">
      <div class="container">
        <h5>Tarefas
          <span class="badge bg-info">
            {{ tarefas.filter(tarefa => tarefa.completed === false).length }}
          </span>
        </h5>
        <div class="card">
          <div class="card-body">
            <input class="form-control" type="text" placeholder="Informe a próxima tarefa">
            <br />
            <ul class="list-group">
              <li class="list-group-item"
                v-for="tarefa in tarefas" v-bind:key="tarefa"
                v-bind:class="{ 'text-decoration-line-through': tarefa.completed }">
                {{ tarefa.description }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

export default {
  name: 'App',
  data() {
    return {
      tarefas: [
      {
        'description': 'tarefa 2',
        'completed': false
      },
      {
        'description': 'tarefa 3',
        'completed': false
      },
      {
        'description': 'tarefa 1',
        'completed': true
      },
    ]
    }
  },
}
</script>

<style>
#slogan {
  margin-top: 30px;
  margin-bottom: 30px;
}
#main {
  background-color: #F1F1F1;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
