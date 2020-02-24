import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      tasks: [
        {name: "Shopping", isDone: false},
        {name: "Housework", isDone: true},
        {name: "Dog-Walking", isDone: false}
      ],
      newTask: ""
    },
    methods: {
      saveNewTask: function() {
        this.tasks.push({
          name: this.newTask,
          isDone: false
        });
        this.newTask =""
      },
      doTask: function(index){
        this.tasks[index].isDone = true;
      }
    }
  });
});
