import {createContext} from "react";

export interface CounterContext {
  values: {
    counter1: number;
    counter2: number;
    counter3: number;
  },
  actions: {
    incrementCounter1: () => void;
    decrementCounter1: () => void;

    incrementCounter2: () => void;
    decrementCounter2: () => void;

    incrementCounter3: () => void;
    decrementCounter3: () => void;
  }
}

export const counterContext = createContext<CounterContext>(undefined as unknown as CounterContext);
