import {Counter1Value} from "./Counter1Value.tsx";
import {Counter1Buttons} from "./Counter1Buttons.tsx";

export function Counter1Container() {
  return (
    <div className={'space-y-4'}>
      <Counter1Value/>
      <Counter1Buttons/>
    </div>
  )
}
