import {Store, SubscribeFn, UnsubscribeFn} from "./simpleState";

export function createStore<State>(state: State): Store<State> {
  const subscribers = new Set<SubscribeFn<State>>()

  function subscribe(callback: SubscribeFn<State>): UnsubscribeFn {
    subscribers.add(callback)

    return () => subscribers.delete(callback)
  }

  function getSnapshot(): State {
    return state
  }

  function alertSubscribers() {
    subscribers.forEach(subscriber => subscriber(state))
  }

  function updateState(slice: Partial<State>) {
    state = {...state, ...slice}
    alertSubscribers()
  }

  return {
    subscribe,
    get: getSnapshot,
    set: updateState,
  }
}
