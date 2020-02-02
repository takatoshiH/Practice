(function() {
  'use strict';

  var vm = new Vue({
    el: "#app",
    data: {
      newItem: "",
      todos: [{
        title: "task 1",
        isDone: false
      },
      {
        title: "task 2",
        isDone: false
        },
        {
          title: "task 3",
          isDone: true
        },
      ]
    },
    watch: {
      todos: {
        handler: function() {
          localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        deep: true
      }
    },
    mounted: function() {
      this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    },
    methods: {
      addItem: function () {
        var item = {
          title: this.newItem,
          isDone: false
        }
        this.todos.push(item);
        this.newItem = "";
      },
      deleteItem: function (index) {
        this.todos.splice(index, 1);        
      },
      purge: function () {
        this.todos = this.remaining;
      }
    },
    computed: {
      remaining: function() {
        return this.todos.filter(function(todo) {
          return !todo.isDone;
        });
      }
    }
  });
})();
