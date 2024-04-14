'use client'
import DisplayImage from '@/components/misc/display-image';
import GithubButton from '@/components/buttons/github-button';
import PrimaryButton from '@/components/buttons/primary-button'
import { ArrowRightCircleIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter(); 

  return (
    <main className='h-screen grid grid-rows-3 gap-4 p-8 bg-slate-50'>
      <div className='row-span-2 overflow-hidden w-full h-full rounded-3xl'>
        <DisplayImage type='outdoor' />
      </div>
      <div className='row-span-1 flex items-center justify-between align-middle'>
        <DisplayImage type='logo' />
        <div className='flex gap-4'>
          <GithubButton label='Github' href='https://github.com/QuasarBeam154/payper-front'>
            <ArrowTopRightOnSquareIcon className='text-slate-50 w-12' />
          </GithubButton>
          <PrimaryButton label='Iniciar' onClick={() => router.push('/home')}>
            <ArrowRightCircleIcon className='text-slate-50 w-12' />
          </PrimaryButton>
        </div>
      </div>
    </main>
  )
}
