import {useStore} from "../useStore.ts";

export function Counter1Value() {
  const {counter1} = useStore()

  return (
    <p>{counter1}</p>
  )
}
