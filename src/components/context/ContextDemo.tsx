import {CounterContextProvider} from "./CounterContextProvider.tsx";
import {Counter1} from "./Counter1.tsx";
import {Counter2} from "./Counter2.tsx";
import {Counter3} from "./Counter3.tsx";

export function ContextDemo() {
  return (
    <CounterContextProvider counter1={0} counter2={0} counter3={0}>
      <p>Demo with Context and Provider.  Key points with this approach:</p>
      <ul className={'list-disc ml-4'}>
        <li>All state and mutators must be provided through the context</li>
        <li>The provider re-renders on each state update which cascades through its children</li>
      </ul>
      <div className={'grid grid-cols-3 max-w-lg'}>
        <Counter1/>
        <Counter2/>
        <Counter3/>
      </div>
    </CounterContextProvider>
  )
}
