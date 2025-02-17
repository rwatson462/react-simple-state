import {CounterButtons} from "../CounterButtons.tsx";
import {counterStore} from "../counterStore.ts";

export function Counter2Buttons() {
  function increment() {
    const { counter2: prevValue } = counterStore.getSnapshot()
    counterStore.updateState({counter2: prevValue + 1})
  }

  function decrement() {
    const { counter2: prevValue } = counterStore.getSnapshot()
    counterStore.updateState({counter2: prevValue - 1})
  }

  return (
    <CounterButtons increment={increment} decrement={decrement} />
  )
}
