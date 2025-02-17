import {ComponentProps, PropsWithChildren} from "react";

export function Button({children, ...props}: PropsWithChildren<ComponentProps<"button">>) {
  return <button className={'rounded bg-slate-200 hover:bg-slate-300 hover:hover-slate-400 border border-slate-300 text-sm px-1 shadow-lg hover:shadow-none cursor-pointer transition-all'} {...props}>{children}</button>
}
