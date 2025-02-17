import {ContextDemo} from "./components/context/ContextDemo.tsx";
import {ExternalStoreDemo} from "./components/externalStore/ExternalStoreDemo.tsx";
import {SimpleStateDemo} from "./components/simpleState/SimpleStateDemo.tsx";

export function App() {
  const year = new Date().getFullYear()

  return (
    <div className={'flex flex-col justify-between min-h-dvh'}>
      <header className={'p-4 bg-slate-100'}>
        <h6 className={'text-lg font-bold'}>SimpleState</h6>
      </header>
      <main className={'p-4 flex-grow space-y-4'}>
        <h1 className={'text-4xl font-black'}>A new state manager for React</h1>
        <h2 className={'text-2xl font-black'}>SimpleState</h2>

        <section className={'border border-slate-200 rounded p-4'}>
          <ContextDemo/>
        </section>
        
        <section className={'border border-slate-200 rounded p-4'}>
          <ExternalStoreDemo/>
        </section>

        <section className={'border border-slate-200 rounded p-4'}>
          <SimpleStateDemo/>
        </section>
      </main>
      <footer className={'p-4 text-sm text-slate-300 bg-slate-900'}>
        <p>&copy; {year} Source Pot</p>
      </footer>
    </div>
  )
}
