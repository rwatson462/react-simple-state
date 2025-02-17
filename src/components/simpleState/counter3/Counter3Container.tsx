import {Counter3Value} from "./Counter3Value.tsx";
import {Counter3Buttons} from "./Counter3Buttons.tsx";

export function Counter3Container() {
  return (
    <div className={'space-y-4'}>
      <Counter3Value/>
      <Counter3Buttons/>
    </div>
  )
}
