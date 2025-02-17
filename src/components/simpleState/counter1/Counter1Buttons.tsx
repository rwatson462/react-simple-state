import {CounterButtons} from "../CounterButtons.tsx";
import {counterStore} from "../counterStore.ts";

export function Counter1Buttons() {
  function increment() {
    const { counter1: prevValue } = counterStore.getSnapshot()
    counterStore.updateState({counter1: prevValue + 1})
  }

  function decrement() {
    const { counter1: prevValue } = counterStore.getSnapshot()
    counterStore.updateState({counter1: prevValue - 1})
  }

  return (
    <CounterButtons increment={increment} decrement={decrement} />
  )
}
