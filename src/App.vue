<template>
  <div>
    <div id="slogan" class="text-center">
      <h1>ToDo List <span class="fa fa-check" /></h1>
    </div>
    <div>
      <div id="main" class="container" style="width: 50rem;">
        <div class="card">
          <div class="card-header">
            <h5>Tarefas
            <span class="badge bg-info">
              {{ tasks.filter(task => task.completed === false).length }}
            </span>
          </h5>
          </div>
          <div class="card-body">
            <div class="input-group">
              <input class="form-control" type="text" v-model="task" v-on:keyup.enter="addTask(task)" placeholder="Informe a próxima tarefa"/>
              <div class="input-group-append">
                <button class="btn btn-info" v-on:click="addTask(task)"><span class="fa fa-plus"></span></button>
              </div>
            </div>
            <br/>
            <ul class="list-group">
              <li class="list-group-item"
                v-for="task in tasks" v-bind:key="task"
                v-bind:class="{ 'text-decoration-line-through': task.completed }"
                v-on:dblclick="completeTask(task)">
                <div class="row">
                  <div class="col-md">
                    {{ task.description }}
                  </div>
                  <div class="col-md text-end">
                    <button class="btn btn-success" v-show="task.completed == false" v-on:click="completeTask(task)"><span class="fa fa-check"></span></button>
                    <button class="btn btn-info"><span class="fa fa-trash"></span></button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css"
import "font-awesome/css/font-awesome.css"

export default {
  name: 'App',
  data() {
    return {
      maxId: 3,
      task: '',
      tasks: [
      {
        'id': 2,
        'description': 'tarefa 2',
        'completed': false,
        'dateCompleted': '',
        'dateCreated': '20/11/2020'
      },
      {
        'id': 3,
        'description': 'tarefa 3',
        'completed': false,
        'dateCompleted': '',
        'dateCreated': '20/11/2020'
      },
      {
        'id': 1,
        'description': 'tarefa 1',
        'completed': true,
        'dateCompleted': '20/11/2020',
        'dateCreated': '20/11/2020'
      },
    ]
    }
  },
  methods: {
    ordenaTasks() {
      var sorted = this.tasks.sort((n1, n2) => {
        if ((n1.dateCompleted < n2.dateCompleted)) {
          return -1;
        }
        if (n1.dateCompleted == n2.dateCompleted) {
          return 0;
        }
        if (n1.dateCompleted > n2.dateCompleted) {
          return 1;
        }
      });
      this.tasks = sorted;
    },
    addTask(task) {
      if (!task) {
        return;
      }
      this.maxId++;
      var t1 = {
        'id': this.maxId,
        'description': task,
        'completed': false,
        'dateCompleted': '',
        'dateCreated': new Date().toLocaleDateString()
      }
      this.tasks.unshift(t1);
      this.task = '';
      this.ordenaTasks();
    },
    completeTask(task) {
      task.dateCompleted = new Date().toLocaleDateString();
      task.completed = true;
      this.ordenaTasks();
    }
  },
}
</script>

<style>
body {
  background-color: darkslategrey;
}
#slogan {
  margin-top: 30px;
  margin-bottom: 30px;
}
#main {
  background-color: #F1F1F1;
  padding-top: 30px;
  padding-bottom: 30px;
}
li {
  cursor: default;
}
</style>
