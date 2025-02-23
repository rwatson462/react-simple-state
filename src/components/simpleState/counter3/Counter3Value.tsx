import {useStore} from "../../../lib/simple-state/useStore.ts";
import {counterStore} from "../counterStore.ts";

export function Counter3Value() {
  const counter3 = useStore(counterStore, state => state.counter3)

  return (
    <p>{counter3}</p>
  )
}
