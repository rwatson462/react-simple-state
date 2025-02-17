import {Button} from "../ui/Button.tsx";

export function CounterButtons({increment, decrement}: { increment: () => void, decrement: () => void }) {
  return (
    <p className={'space-x-2'}>
      <Button onClick={decrement}>Dec</Button>
      <span>/</span>
      <Button onClick={increment}>Inc</Button>
    </p>
  )
}
