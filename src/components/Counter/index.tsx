import { observer } from 'mobx-react-lite'
interface CounterStore {
  count: number;
  increment: React.MouseEventHandler<HTMLButtonElement>;
  reset: React.MouseEventHandler<HTMLButtonElement>;
}
interface CounterProps{
  counterStore: CounterStore;
}
function Counter({counterStore}:CounterProps){
  return (
  <div>
    <p className="paragraph">{counterStore.count}</p>
    <button onClick={counterStore.increment}>加一</button>
    <button onClick={counterStore.reset}>重置</button>
  </div>
  
)}

export default observer(Counter)