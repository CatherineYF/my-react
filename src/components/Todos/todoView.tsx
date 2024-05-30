interface TodoViewProps{
  todo: TodoViewStore
}
interface TodoViewStore {
  title: string;
  finished: boolean;
}
function TodoView ({todo}:TodoViewProps){
  return (<div style={{textDecoration:todo.finished?'line-through':'none'}}>
      {todo.title}
    </div>
)}

export default TodoView