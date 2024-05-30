import Counter from './components/Counter';
import CounterStore from './stores/CounterStore';

import Todos from './components/Todos';
import './App.css';
import TodoListStore from './stores/todoStore/TodoListStore';
import TodoViewStore from './stores/todoStore/TodoViewStore';
const counterStore = new CounterStore()
const todoListStore = new TodoListStore([
  new TodoViewStore({
    title:'测试'
  }),
    new TodoViewStore({
      title:'222',
      finished:true
    })
  ])
function App() {
  return (
    <div className="App">
      <Counter counterStore={counterStore}></Counter>
      <Todos todoListStore={todoListStore}></Todos>
    </div>
  );
}

export default App;
