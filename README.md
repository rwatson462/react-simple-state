# Simple state

A (hopefully) simple global state management system.

## Demo (this repository)

1. Download the code (`git checkout`, or some other way of downloading)
2. Run `pnpm install`
3. Run `pnpm run dev`
4. Open your browser at the location given by pnpm (usually `http://localhost:5173)
5. Open your browser dev tools and enable the React dev tools feature of "Highlight updates when components render."
6. Have a play and watch how the different start management types handle their rendering

## Library usage

I hope to package this up one day into my own npm package, so hold on tight for that one.
In the meantime, seek out `createStore.ts`, `simpleState.ts`, and `useStore.ts` files and see what they do.


Step 1: Define a store
```tsx
const carStore = createStore<{
  cars: [{
      make: 'Ford'|'Jaguar',
      model: string,
      engineSize: number,
      colour: string
  }]
}>({ cars: [] })
```

> I recommend setting a default value that contains all your keys alongside specifying the shape of the data to help
> reduce null value exceptions.


Step 2: Use it
```tsx
function CarList() {
  const cars = useStore(carStore, state => state.cars)
  
  return cars.map((car, index) => (
    <p>{ car.make } - { car.model }</p>
  ))
}
```