import {useStore} from "../../../lib/simple-state/useStore.ts";
import {counterStore} from "../counterStore.ts";

export function Counter2Value() {
  const counter2 = useStore(counterStore, state => state.counter2)

  return (
    <p>{counter2}</p>
  )
}
