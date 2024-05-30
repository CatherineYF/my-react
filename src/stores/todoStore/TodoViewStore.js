class TodoViewStore {
  title = '';
  finished = false;
  constructor(todo){
    this.title = todo.title;
    this.finished = todo.finished || false;
  }
}

export default TodoViewStore;