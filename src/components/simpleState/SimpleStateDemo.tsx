import {Counter1Container} from "./counter1/Counter1Container.tsx";
import {Counter2Container} from "./counter2/Counter2Container.tsx";
import {Counter3Container} from "./counter3/Counter3Container.tsx";

export function SimpleStateDemo() {
  return (
    <>
      <p>Demo with <strong>SimpleState</strong>.  Key points for this approach:</p>
      <ul>
        <li>No top-level component that re-renders with each change</li>
        <li>Selectors allow a component to subscribe to a piece of the global state, only re-rendering when their "slice" changes</li>
        <li>Components that need state are the only bits that re-render on change</li>
        <li>Current values can be accessed by calling <code>get</code> directly on the store, great for event handlers</li>
      </ul>
      <div className={'grid grid-cols-3 max-w-lg'}>
        <Counter1Container/>
        <Counter2Container/>
        <Counter3Container/>
      </div>
    </>
  )
}
