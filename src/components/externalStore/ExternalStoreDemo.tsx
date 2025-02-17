import {Counter1Container} from "./counter1/Counter1Container.tsx";
import {Counter2Container} from "./counter2/Counter2Container.tsx";
import {Counter3Container} from "./counter3/Counter3Container.tsx";

export function ExternalStoreDemo() {
  return (
    <>
      <p>Demo with useSyncExternalStore.  Key points for this approach:</p>
      <ul>
        <li>No top-level component that re-renders with each change</li>
        <li>Mutators are imported just like normal javascript functions and have no effect on rendering</li>
        <li>Components that need state are the only bits that re-render on change</li>
      </ul>
      <div className={'grid grid-cols-3 max-w-lg'}>
        <Counter1Container/>
        <Counter2Container/>
        <Counter3Container/>
      </div>
    </>
  )
}
