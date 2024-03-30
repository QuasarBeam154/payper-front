import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react"

interface GithubButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string
  children: ReactNode
}

function GithubButton({ label, children, ...rest }: GithubButtonProps) {
  return (
    <a {...rest} className="flex justify-center items-center w-fit h-fit px-12 py-5 gap-6 rounded-3xl outline-none select-none bg-slate-700 transition-colors ease-in-out duration-200
                               hover:bg-slate-600 active:bg-slate-800 focus:bg-slate-800 focus:ring-2 focus:ring-slate-200">
      <h1 className="text-[64px] font-semibold text-slate-50">{ label }</h1>
      {children}
    </a>
  )
}

export default GithubButton