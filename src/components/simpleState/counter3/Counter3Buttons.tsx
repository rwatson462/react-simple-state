import {CounterButtons} from "../CounterButtons.tsx";
import {counterStore} from "../counterStore.ts";

export function Counter3Buttons() {
  function increment() {
    const {counter3: prevValue} = counterStore.getSnapshot()
    counterStore.updateState({counter3: prevValue + 1})
  }

  function decrement() {
    const {counter3: prevValue} = counterStore.getSnapshot()
    counterStore.updateState({counter3: prevValue - 1})
  }

  return (
    <CounterButtons increment={increment} decrement={decrement} />
  )
}
