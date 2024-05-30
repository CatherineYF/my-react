import TodoViewStore from './TodoViewStore';
class TodoListStore {
  todos = [];
  constructor(todos) {
    if(Array.isArray(todos)){
      this.todos = todos;
    }
  }
  addTodo(title){
    this.todos.push(new TodoViewStore(title))
  }
}
export default TodoListStore;