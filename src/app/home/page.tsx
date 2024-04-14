'use client'

import React, { useState } from 'react';
import * as Form from "@radix-ui/react-form";
import * as Select from '@radix-ui/react-select';
import DisplayImage from '@/components/misc/display-image';
import TertiaryButton from '@/components/buttons/tertiary-button';
import { CheckIcon, ChevronDownIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import PrimaryButton from '@/components/buttons/primary-button';
import checkboxList from './misc/checkbox-list';
import * as Checkbox from '@radix-ui/react-checkbox';
import SecondaryButton from '@/components/buttons/secondary-button';
import { useRouter } from 'next/navigation';

const PayrollPage = () => {

  const router = useRouter();
  const [items, setItems] = useState(checkboxList);

  function handleChange(e: any) {
    const newItems = items.map(item => {
      if (item.id === e.target.id) {
        return {
          ...item,
          checked: e.target.checked
        }
      }
      return item;
    })
    setItems(newItems);
  }

  return (
    <main className="grid grid-rows-9 w-screen h-screen bg-slate-50">
      {/* Header */}
      <div className='row-span-1 px-24 flex justify-between items-center'>
        <DisplayImage type='logo' className='w-64 h-auto' />
        <TertiaryButton label='Sair' onClick={router.back}>
          <XMarkIcon className='w-6' />
        </TertiaryButton>
      </div>
      {/* Title */}
      <div className='row-span-1 flex justify-center items-center'>
        <h1 className='text-5xl font-bold text-slate-600'>Geração de folha de pagamento</h1>
      </div>
      {/* Content */}
      <div className='row-span-6 px-[30%]'>
        <Form.Root className='flex flex-col gap-6'>
          {/* Employee */}
          <Form.Field name='employee'>
            <div>
              <h1 className='mb-2 text-2xl font-semibold leading-none text-slate-600'>Funcionário</h1>
              <Form.Control asChild className='w-full'>
                <Select.Root required>
                  <Select.Trigger className='flex w-full px-6 py-4 justify-between items-center rounded-lg ring-2 text-base leading-none outline-none select-none transition-all ease-in-out duration-700
                                          bg-slate-100  ring-slate-500 text-slate-500 focus:ring-blue-500'>
                    <Select.Value placeholder='Selecione um funcionário...' className='select-none' />
                    <Select.Icon className='text-slate-500'>
                      <ChevronDownIcon className='w-5' />
                    </Select.Icon>
                  </Select.Trigger>
                  <Select.Content position='popper' className='w-[--radix-select-trigger-width] overflow-hidden rounded-lg ring-2 ring-slate-300 bg-slate-100 shadow-xl'>
                    <Select.Viewport className=''>
                      <Select.Group className='font-medium text-slate-500'>
                        <Select.Label className='p-3 font-semibold'> Funcionários disponíveis </Select.Label>
                        <Select.Item value='1' className='p-3 hover:bg-blue-200 outline-none transition-colors ease-in-out duration-300'>Joao</Select.Item>
                        <Select.Item value='2' className='p-3 hover:bg-blue-200 outline-none transition-colors ease-in-out duration-300'>Joaoo</Select.Item>
                        <Select.Item value='3' className='p-3 hover:bg-blue-200 outline-none transition-colors ease-in-out duration-300'>Joaoooo</Select.Item>
                        <Select.Item value='4' className='p-3 hover:bg-blue-200 outline-none transition-colors ease-in-out duration-300'>Joaooooo</Select.Item>
                        <Select.Item value='5' className='p-3 hover:bg-blue-200 outline-none transition-colors ease-in-out duration-300'>Joaoooooo</Select.Item>
                      </Select.Group>
                    </Select.Viewport>
                  </Select.Content>
                </Select.Root>
              </Form.Control>
            </div>
          </Form.Field>

          {/* Adiantamento */}
          <Form.Field name='advance_money'>
            <div>
              <h1 className='mb-2 text-2xl font-semibold leading-none text-slate-600'>Adiantamento</h1>
              <Form.Control asChild>
                <input type='number' min={0} placeholder='Digite o valor do adiantameno...'
                  className='flex w-full px-6 py-4 justify-between items-center rounded-lg ring-2 text-base leading-none outline-none select-none transition-all ease-in-out duration-700
                          bg-slate-100  ring-slate-500 text-slate-500 placeholder:text-slate-500 focus:ring-blue-500'/>
              </Form.Control>
            </div>
          </Form.Field>

          {/* Comissão */}
          <Form.Field name='comission'>
            <div>
              <h1 className='mb-2 text-2xl font-semibold leading-none text-slate-600'>Comissão</h1>
              <Form.Control asChild>
                <input type='number' min={0} placeholder='Digite o valor da comissão...'
                  className='flex w-full px-6 py-4 justify-between items-center rounded-lg ring-2 text-base leading-none outline-none select-none transition-all ease-in-out duration-700
                          bg-slate-100  ring-slate-500 text-slate-500 placeholder:text-slate-500 focus:ring-blue-500'/>
              </Form.Control>
            </div>
          </Form.Field>

          {/* Hora extra */}
          <Form.Field name='extra_hour'>
            <div>
              <h1 className='mb-2 text-2xl font-semibold leading-none text-slate-600'>Hora Extra</h1>
              <div className='flex w-full items-center'>
                <Form.Control asChild>
                  <input type='number' min={0} placeholder='Digite o total de horas do funcionário...'
                    className='flex w-[80%] px-6 py-4 justify-between items-center rounded-lg ring-2 text-base leading-none outline-none select-none transition-all ease-in-out duration-700
                bg-slate-100  ring-slate-500 text-slate-500 placeholder:text-slate-500 focus:ring-blue-500'/>
                </Form.Control>
                <div className='flex w-[20%] justify-center'>
                  <p className='text-xl font-medium text-slate-500'>no mês</p>
                </div>
              </div>
            </div>
          </Form.Field>

          {/* Faltas/Atrasos */}
          <Form.Field name='arrears'>
            <div>
              <h1 className='mb-2 text-2xl font-semibold leading-none text-slate-600'>Faltas ou atrasos</h1>
              <div className='flex w-full items-center'>
                <Form.Control asChild>
                  <input type='number' min={0} placeholder='Digite o valor em horas de atraso...'
                    className='flex w-[80%] px-6 py-4 justify-between items-center rounded-lg ring-2 text-base leading-none outline-none select-none transition-all ease-in-out duration-700
                bg-slate-100  ring-slate-500 text-slate-500 placeholder:text-slate-500 focus:ring-blue-500'/>
                </Form.Control>
                <div className='flex w-[20%] justify-center'>
                  <p className='text-xl font-medium leading-none text-slate-500'>hora(s)</p>
                </div>
              </div>
            </div>
          </Form.Field>
          <div>
            <h1 className='mb-2 text-2xl font-semibold leading-none text-slate-600'>Outros</h1>
            <div className='grid grid-cols-2 gap-y-4 gap-x-10'>
              {items && items.map((item, i) => (
                <Form.Field key={i} name={item.name}>
                  <div className='flex items-center gap-3'>
                    <Form.Control asChild>
                      <Checkbox.Root id={item.id} checked={item.checked} onCheckedChange={() => {handleChange; console.log(items)}} className='shadow-black/30 ring-2 ring-slate-400 hover:bg-slate-200 flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-lg bg-white shadow-[0_2px_10px] outline-none focus:ring-2 focus:ring-blue-500'>
                        <Checkbox.Indicator asChild className='text-blue-500'>
                          <CheckIcon className='w-5' style={{stroke: 'ActiveBorder', strokeWidth: 2}} />
                        </Checkbox.Indicator>
                      </Checkbox.Root>
                    </Form.Control>
                    <h3 className='text-lg font-medium text-slate-500'>{item.label}</h3>
                  </div>
                </Form.Field>
              ))}
            </div>
          </div>
         
          <div className='flex w-full justify-end'>
            <Form.Submit asChild>
              <SecondaryButton label={'Gerar folha'} children={<ChevronRightIcon className='w-5 text-slate-50' />} className='flex justify-end' />
            </Form.Submit>
          </div>
        </Form.Root>
      </div>
    </main>
  )
}

export default PayrollPage