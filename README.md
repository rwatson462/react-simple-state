# Simple state

A (hopefully) simple global state management system.

## Demo (this repository)

1. Download the code (`git checkout`, or some other way of downloading)
2. Run `pnpm install`
3. Run `pnpm run dev`
4. Open your browser at the location given by pnpm (usually http://localhost:5173)
5. Open your browser dev tools and enable the React dev tools feature of "Highlight updates when components render."
6. Have a play and watch how the different start management types handle their rendering

## Installation

```bash
npm install simple-state
```

## Library usage


### Step 1: Define a store

I recommend setting a default value that contains all your keys alongside specifying the shape of the data to help
reduce null value exceptions and to help define the shape of objects contained within empty arrays


```tsx
import { createStore } from 'simple-state'

const carStore = createStore<{
  cars: [{
      make: 'Ford'|'Jaguar',
      model: string,
      engineSize: number,
      colour: string
  }]
}>({ cars: [] })
```


### Step 2: Use it

The second argument of `useStore` is a _selector function_.  This allows a portion of the whole state to be used by your
component and enables re-rendering only when that selection changes.

```tsx
import { useStore } from 'simple-state'

function CarList() {
  const cars = useStore(carStore, state => state.cars)

  return cars.map((car, index) => (
    <p>{ car.make } - { car.model }</p>
  ))
}
```


### Step 3: Update state inside a store

`createStore` returns `get` and `set` methods to update the state, you can use these directly and any components that
have selected part of the state you update will be re-rendered.  The `set` function accepts an object which is merged
with the current state object, allowing additions and partial updates to the state.

> Note: this only allows for updating and adding keys to the stored state, not deleting any root-level keys not directly
> updating deep-nested properties.

```tsx
function addCar() {
  carStore.set({ cars: [...cars, { make: 'Ford', model: 'Focus', engineSize: 1.6, colour: 'silver'}]})
}
```
