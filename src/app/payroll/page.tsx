'use client'
import TertiaryButton from "@/components/buttons/tertiary-button"
import DisplayImage from "@/components/misc/display-image"
import { XMarkIcon } from "@heroicons/react/24/solid"
import { useRouter } from "next/navigation"

const PayrollPage = () => {

  const router = useRouter();

  return (
    <main className="grid grid-rows-9 w-screen h-screen bg-slate-50">
    {/* Header */}
    <div className='row-span-1 px-24 flex justify-between items-center'>
      <DisplayImage type='logo' className='w-64 h-auto' />
      <TertiaryButton label='Sair' onClick={() => router.push('/')}>
        <XMarkIcon className='w-6' />
      </TertiaryButton>
    </div>
    </main>
  )
}

export default PayrollPage