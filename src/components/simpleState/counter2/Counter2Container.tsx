import {Counter2Value} from "./Counter2Value.tsx";
import {Counter2Buttons} from "./Counter2Buttons.tsx";

export function Counter2Container() {
  return (
    <div className={'space-y-4'}>
      <Counter2Value/>
      <Counter2Buttons/>
    </div>
  )
}
