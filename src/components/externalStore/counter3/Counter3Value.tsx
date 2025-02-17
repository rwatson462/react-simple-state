import {useStore} from "../useStore.ts";

export function Counter3Value() {
  const {counter3} = useStore()

  return (
    <p>{counter3}</p>
  )
}
