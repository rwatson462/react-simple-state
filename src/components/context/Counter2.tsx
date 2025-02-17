import {counterContext} from "./counterContext.ts";
import {useContext} from "react";
import {Button} from "../ui/Button.tsx";

export function Counter2() {
  const { values, actions } = useContext(counterContext)

  const value = values.counter2

  return (
    <div className={'space-y-4'}>
      <p>{value}</p>
      <p className={'space-x-2'}>
        <Button onClick={actions.decrementCounter2}>Dec</Button>
        <span>/</span>
        <Button onClick={actions.incrementCounter2}>Inc</Button>
      </p>
    </div>
  )
}
