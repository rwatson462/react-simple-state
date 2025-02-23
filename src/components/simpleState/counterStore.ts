import {createStore} from "../../lib/simple-state/createStore.ts";

export const counterStore = createStore<{
  counter1: number,
  counter2: number,
  counter3: number,
}>({
  counter1: 0,
  counter2: 0,
  counter3: 0,
})
