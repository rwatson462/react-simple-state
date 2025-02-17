import {counterStore} from "../externalStore.ts";
import {Counter3Value} from "./Counter3Value.tsx";
import {CounterButtons} from "../CounterButtons.tsx";

export function Counter3Container() {
  return (
    <div className={'space-y-4'}>
      <Counter3Value/>
      <CounterButtons increment={counterStore.incrementCounter3} decrement={counterStore.decrementCounter3} />
    </div>
  )
}
