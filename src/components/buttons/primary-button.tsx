import { ButtonHTMLAttributes, ReactNode } from "react"

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  children?: ReactNode
}

const PrimaryButton = ({ label, children, ...rest }: PrimaryButtonProps) => {
  return (
    <button {...rest} className="flex justify-center items-center w-fit h-fit px-12 py-5 gap-6 rounded-3xl outline-none select-none bg-blue-600 transition-colors ease-in-out duration-200
                               hover:bg-blue-500 active:bg-blue-700 focus:bg-blue-700 focus:ring-2 focus:ring-blue-200">
      <h1 className="text-[64px] font-semibold text-slate-50">{label}</h1>
      {children}
    </button>
  )
}

export default PrimaryButton