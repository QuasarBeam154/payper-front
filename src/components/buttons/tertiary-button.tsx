import { ButtonHTMLAttributes, ReactNode } from "react"

interface TertiaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  children?: ReactNode
}

const TertiaryButton = ({ label, children, ...rest }: TertiaryButtonProps) => {
  return (
    <button {...rest} className="flex w-fit px-6 py-4 gap-2 rounded-lg justify-center items-center ring-2 transition-colors ease-in-out duration-200
                               ring-red-500 hover:bg-red-100 active:bg-red-200 focus:bg-red-200">
      <h1 className="font-medium text-red-500 text-2xl">{label}</h1>
      <div className="text-red-500">
        {children}
      </div>
    </button>
  )
}

export default TertiaryButton