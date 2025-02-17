import {CounterButtons} from "../CounterButtons.tsx";
import {counterStore} from "../counterStore.ts";

export function Counter1Buttons() {
  function increment() {
    const store = counterStore.get()
    counterStore.set({counter1: store.counter1 + 1})
  }

  function decrement() {
    const store = counterStore.get()
    counterStore.set({counter1: store.counter1 - 1})
  }

  return (
    <CounterButtons increment={increment} decrement={decrement} />
  )
}
