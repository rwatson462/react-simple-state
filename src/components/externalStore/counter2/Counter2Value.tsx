import {useStore} from "../useStore.ts";

export function Counter2Value() {
  const {counter2} = useStore()

  return (
    <p>{counter2}</p>
  )
}
