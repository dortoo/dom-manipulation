class TodoList {
  constructor() {
    this.todos = [];
  }

  addTodo() {
    this.todos.push('New todo');
    console.log(this.todos);
  }
}

const MyList = new TodoList();