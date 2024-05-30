import TodoView from "./todoView"
interface TodoViewStore {
  title: string;
  finished: boolean;
}
interface TodoListStore {
  todos: TodoViewStore[],
  addTodo: Function,
}
interface TodosProps{
  todoListStore: TodoListStore;
}
function Todos({todoListStore}:TodosProps){
  function handleKeyUp(ev:React.KeyboardEvent<HTMLInputElement>){
    if(ev.keyCode === 13){
      todoListStore.addTodo(ev.currentTarget.value)
    }
  }
  return (<div>
    <input placeholder="请输入待办todo" onKeyUp={handleKeyUp}></input>
    {todoListStore.todos.map(todo=><TodoView todo={todo}></TodoView>)}
  </div>
)}

export default Todos