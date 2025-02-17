import {PropsWithChildren, useState} from "react";
import {CounterContext, counterContext} from "./counterContext";

export function CounterContextProvider({counter1, counter2, counter3, children}: PropsWithChildren<{ counter1: number, counter2: number, counter3: number }>) {
  const [counters, setCounters] = useState<{counter1: number, counter2: number, counter3: number}>({
    counter1, counter2, counter3
  });

  const value: CounterContext = {
    values: counters,
    actions: {
      incrementCounter1: () => setCounters({...counters, counter1: counters.counter1 + 1}),
      incrementCounter2: () => setCounters({...counters, counter2: counters.counter2 + 1}),
      incrementCounter3: () => setCounters({...counters, counter3: counters.counter3 + 1}),
      decrementCounter1: () => setCounters({...counters, counter1: counters.counter1 - 1}),
      decrementCounter2: () => setCounters({...counters, counter2: counters.counter2 - 1}),
      decrementCounter3: () => setCounters({...counters, counter3: counters.counter3 - 1}),
    }
  }

  return (
    <counterContext.Provider value={value}>{children}</counterContext.Provider>
  )
}
