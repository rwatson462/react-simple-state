# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a demonstration and development repository for **SimpleState**, a lightweight global state management library for React. The project showcases three different state management approaches through live comparison demos:

1. **React Context** - Traditional Context API approach
2. **External Store** - Manual implementation using `useSyncExternalStore`
3. **SimpleState** - The library implementation (built on top of `useSyncExternalStore`)

## Development Commands

```bash
# Install dependencies (uses pnpm)
pnpm install

# Run development server (Vite)
pnpm run dev

# Build for production
pnpm run build

# Lint the codebase
pnpm run lint

# Preview production build
pnpm run preview
```

## Architecture

### Core Library (`src/lib/simple-state/`)

The SimpleState library consists of three interconnected files:

- **`simpleState.ts`** - Type definitions for the store system
- **`createStore.ts`** - Factory function that creates a store with `subscribe`, `get`, and `set` methods
- **`useStore.ts`** - React hook that integrates stores with components via `useSyncExternalStore`

**Key architectural pattern**: The library uses React's `useSyncExternalStore` hook internally, implementing a subscribe/notify pattern with selector functions for granular re-rendering control.

### Demo Structure

The codebase is organized into three parallel demo implementations under `src/components/`:

- `context/` - React Context implementation (causes full subtree re-renders)
- `externalStore/` - Manual external store with individual update methods
- `simpleState/` - SimpleState library usage with `createStore` + `useStore`

Each demo has three independent counters to demonstrate rendering behavior when using React DevTools' "Highlight updates when components render" feature.

### Store Pattern

SimpleState stores are created with `createStore<State>(initialState)` and return:
- `subscribe(callback)` - Register/unregister listeners
- `get()` - Retrieve current state snapshot
- `set(partialState)` - Merge partial updates (shallow merge only)

Components use stores via `useStore(store, selector)` where the selector function enables fine-grained subscriptions to specific state slices.

## Tech Stack

- React 19
- TypeScript 5.7
- Vite 6 (build tool)
- Tailwind CSS 4
- ESLint 9 with TypeScript support

## Important Notes

- The library uses **shallow merging** for state updates via `set()` - nested properties must be explicitly spread
- Selector functions in `useStore` determine re-render granularity - components only re-render when their selected slice changes
- All `.ts` and `.tsx` files use `.ts` extensions in imports (ESM style)
- The demo app is deliberately simple to focus on showcasing render behavior differences between state management approaches

## Development Workflow

- Work directly on the main branch in the current directory (no git worktrees)
- Commit changes directly to main
