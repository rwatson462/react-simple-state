import {useSyncExternalStore} from "react";
import {Store} from "./simpleState.ts";

export function useStore<State, Slice>(store: Store<State>, selector: (state: State) => Slice) {
  return useSyncExternalStore(store.subscribe, () => (
    selector(store.getSnapshot())
  ))
}
