import { ButtonHTMLAttributes, ReactNode } from "react"

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  children?: ReactNode
}

const SecondaryButton = ({ label, children, ...rest }: SecondaryButtonProps) => {
  return (
    <button {...rest} className="flex justify-center items-center w-fit h-fit px-6 py-4 gap-4 rounded-lg outline-none select-none bg-blue-600 transition-colors ease-in-out duration-200
    hover:bg-blue-500 active:bg-blue-700 focus:bg-blue-700 focus:ring-2 focus:ring-blue-200">
      <h1 className="text-2xl font-medium text-slate-50">{label}</h1>
      {children}
    </button>
  )
}

export default SecondaryButton