import {useSyncExternalStore} from "react";
import {counterStore} from "./externalStore.ts";

export function useStore() {
  return useSyncExternalStore(counterStore.subscribe, counterStore.getSnapshot)
}
