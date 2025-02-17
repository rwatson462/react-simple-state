import {counterStore} from "../externalStore.ts";
import {Counter2Value} from "./Counter2Value.tsx";
import {CounterButtons} from "../CounterButtons.tsx";

export function Counter2Container() {
  return (
    <div className={'space-y-4'}>
      <Counter2Value/>
      <CounterButtons increment={counterStore.incrementCounter2} decrement={counterStore.decrementCounter2} />
    </div>
  )
}
