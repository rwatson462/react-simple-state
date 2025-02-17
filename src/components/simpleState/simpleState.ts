
export type SubscribeFn<State> = (state: State) => void
export type UnsubscribeFn = () => void

type SubscriberFn<State> = (callback: SubscribeFn<State>) => UnsubscribeFn
type GetSnapshotFn<State> = () => State
type UpdateStateFn<State> = (state: Partial<State>) => void

export type Store<State> = {
  subscribe: SubscriberFn<State>
  get: GetSnapshotFn<State>
  set: UpdateStateFn<State>
}
