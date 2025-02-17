import {counterContext} from "./counterContext.ts";
import {useContext} from "react";
import {Button} from "../ui/Button.tsx";

export function Counter1() {
  const { values, actions } = useContext(counterContext)

  const value = values.counter1

  return (
    <div className={'space-y-4'}>
      <p>{value}</p>
      <p className={'space-x-2'}>
        <Button onClick={actions.decrementCounter1}>Dec</Button>
        <span>/</span>
        <Button onClick={actions.incrementCounter1}>Inc</Button>
      </p>
    </div>
  )
}