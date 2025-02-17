import {counterStore} from "../externalStore.ts";
import {Counter1Value} from "./Counter1Value.tsx";
import {CounterButtons} from "../CounterButtons.tsx";

export function Counter1Container() {
  return (
    <div className={'space-y-4'}>
      <Counter1Value/>
      <CounterButtons increment={counterStore.incrementCounter1} decrement={counterStore.decrementCounter1} />
    </div>
  )
}
