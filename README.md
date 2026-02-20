# zeno-state

A simple global state management library for React. Built on React's `useSyncExternalStore`, zeno-state provides a lightweight solution for managing global state with fine-grained re-rendering control through selector functions.

## Installation

```bash
npm install zeno-state
```

## Usage

### 1. Create a store

Define your store with an initial state. It's recommended to include all keys in the initial state to help with type inference and avoid null values.


```tsx
import { createStore } from 'zeno-state'

const carStore = createStore<{
  cars: [{
      make: 'Ford'|'Jaguar',
      model: string,
      engineSize: number,
      colour: string
  }]
}>({ cars: [] })
```


### 2. Use the store in components

The `useStore` hook takes two arguments: the store and a selector function. The selector function allows you to subscribe to specific parts of the state, ensuring components only re-render when their selected slice changes.

```tsx
import { useStore } from 'zeno-state'

function CarList() {
  const cars = useStore(carStore, state => state.cars)

  return cars.map((car, index) => (
    <p>{ car.make } - { car.model }</p>
  ))
}
```


### 3. Update the store

The `createStore` function returns `get` and `set` methods. Use `set` to update the state - it accepts a partial state object that gets shallow-merged with the current state. Any components subscribed to the updated slice will automatically re-render.

**Note:** The `set` method uses shallow merging, so nested objects need to be explicitly spread for updates.

```tsx
function addCar() {
  const currentCars = carStore.get().cars
  carStore.set({
    cars: [...currentCars, {
      make: 'Ford',
      model: 'Focus',
      engineSize: 1.6,
      colour: 'silver'
    }]
  })
}
```

## Features

- **Lightweight** - Minimal API surface with just `createStore` and `useStore`
- **Fine-grained updates** - Selector functions ensure components only re-render when their selected state changes
- **TypeScript support** - Full type safety with TypeScript
- **React 18/19 compatible** - Built on React's `useSyncExternalStore` hook

## License

MIT
