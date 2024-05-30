import TodoViewStore from './TodoViewStore';
import { action, makeObservable, observable } from 'mobx';
class TodoListStore {
  todos = [];
  constructor(todos) {
    if(Array.isArray(todos)){
      this.todos = todos;
    }
    makeObservable(this,{
      todos:observable,
      addTodo:action
    },{
      autoBind:true
    })
  }
  addTodo(title){
    this.todos.push(new TodoViewStore({title}))
  }
}
export default TodoListStore;