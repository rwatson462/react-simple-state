import {useStore} from "../useStore.ts";
import {counterStore} from "../counterStore.ts";

export function Counter1Value() {
  const counter1 = useStore(counterStore, (state) => state.counter1)

  return (
    <p>{counter1}</p>
  )
}
