
type SubscriberFn = (newState: typeof counters) => void;

const subscribers = new Set<SubscriberFn>()

function subscribe(fn: SubscriberFn) {
  subscribers.add(fn);
  return () => {
    subscribers.delete(fn)
  };
}

function getSnapshot() {
  return counters
}

function alertSubscribers() {
  subscribers.forEach(subscriber => {
    subscriber(counters)
  })
}

let counters = {
  counter1: 0,
  counter2: 0,
  counter3: 0,
}

export const counterStore = {
  incrementCounter1() {
    counters = {...counters, counter1: counters.counter1 + 1}
    alertSubscribers()
  },
  incrementCounter2() {
    counters = {...counters, counter2: counters.counter2 + 1}
    alertSubscribers()
  },
  incrementCounter3() {
    counters = {...counters, counter3: counters.counter3 + 1}
    alertSubscribers()
  },
  decrementCounter1() {
    counters = {...counters, counter1: counters.counter1 - 1}
    alertSubscribers()
  },
  decrementCounter2() {
    counters = {...counters, counter2: counters.counter2 - 1}
    alertSubscribers()
  },
  decrementCounter3() {
    counters = {...counters, counter3: counters.counter3 - 1}
    alertSubscribers()
  },

  subscribe,
  getSnapshot,
} as const
