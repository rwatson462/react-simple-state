import {CounterButtons} from "../CounterButtons.tsx";
import {counterStore} from "../counterStore.ts";

export function Counter2Buttons() {
  function increment() {
    const prevValue = counterStore.get().counter2
    counterStore.set({counter2: prevValue + 1})
  }

  function decrement() {
    const prevValue = counterStore.get().counter2
    counterStore.set({counter2: prevValue - 1})
  }

  return (
    <CounterButtons increment={increment} decrement={decrement} />
  )
}
