import TodoView from "./todoView"
import { useState } from "react";
import { observer } from 'mobx-react-lite'
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
  let [title,setTitle] = useState("")
  function handleKeyUp(ev:React.KeyboardEvent<HTMLInputElement>){
    if(ev.key === 'Enter'){
      todoListStore.addTodo(ev.currentTarget.value)
      setTitle('')
    }
  }
  return (<div>
    <input placeholder="请输入待办todo" onKeyUp={handleKeyUp} value={title} onChange={ev=>setTitle(ev.target.value)}></input>
    {todoListStore.todos.map((todo,idx)=><TodoView key={idx} todo={todo}></TodoView>)}
  </div>
)}

export default observer(Todos)