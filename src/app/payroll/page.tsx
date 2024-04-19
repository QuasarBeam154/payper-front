'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import DisplayImage from "@/components/misc/display-image";
import TertiaryButton from "@/components/buttons/tertiary-button";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { getDiscounts } from "@/api/dataFetch"; // Importe a função para fazer a solicitação ao backend
import { fetchData } from '@/api/dataFetch';

const PayrollPage = () => {
  const router = typeof window !== 'undefined' ? useRouter() : null;
  const [discounts, setDiscounts] = useState<any>(null); // Estado para armazenar os descontos
  
  useEffect(() => {
    // Verifica se o router está definido
    if (!router) return;

    // Função para calcular os descontos com base no funcionário selecionado
    const calculateDiscounts = async () => {
      try {
        // Recupere o ID do funcionário da query da rota
        const { id } = router.query;
        
        // Verifica se o ID do funcionário está presente
        if (id) {
          // Faça a chamada à API para obter os descontos
          const response = await fetchData(`/discounts/${id}`);
          setDiscounts(response); // Atualize o estado com os descontos obtidos
        }
      } catch (error) {
        console.error('Erro ao calcular descontos:', error);
      }
    };

    calculateDiscounts(); // Chame a função para calcular os descontos quando o componente montar
  }, [router]); // Execute o efeito sempre que o router mudar

  if (!router) return null; // Se o router não estiver definido, retorna null

  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen bg-slate-50">
    {/* Header */}
    <div className='flex justify-between items-center mb-8 px-24 w-full'>
      <DisplayImage type='logo' className='w-64 h-auto' />
      <TertiaryButton label='Sair' onClick={() => router.push('/')}>
        <XMarkIcon className='w-6' />
      </TertiaryButton>
    </div>

    {/* Title */}
    <h1 className='mb-8 text-5xl font-bold text-slate-600'>Recibo de Pagamento</h1>

    {/* Content */}
    <div className='w-[80%] overflow-x-auto'>
      <table className="w-full border-collapse bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200 border-b border-gray-400">
              <th colSpan={9} className="py-2 text-lg font-semibold">Razão Social | Endereço</th>
              <th colSpan={5} className="py-2 text-lg font-semibold">Mês de Referência</th>
            </tr>
            <tr className="bg-gray-200 border-b border-gray-400">
              <th colSpan={9} className="py-2 text-lg font-semibold">Insira o CNPJ</th>
              <th colSpan={5} className="py-2 text-lg font-semibold">Insira a Data</th>
            </tr>
            <tr>
              <th colSpan={9} className='py-2 text-lg font-semibold'>00.000.000/0001-00</th>
              <th colSpan={5} className="py-2 text-lg font-semibold">19/04/2024</th>
            </tr>
            <tr className="bg-gray-200 border-b border-gray-400 text-center">
              <th className="py-2 text-lg font-semibold w-[10%]">Matrícula</th>
              <th className="py-2 text-lg font-semibold w-[20%]">Nome do Funcionário</th>
              <th className="py-2 text-lg font-semibold w-[5%]">CBO</th>
              <th className="py-2 text-lg font-semibold w-[15%]">Cargo</th>
              <th className="py-2 text-lg font-semibold w-[5%]">Empresa</th>
              <th className="py-2 text-lg font-semibold w-[5%]">Local</th>
              <th className="py-2 text-lg font-semibold w-[10%]">Depto</th>
              <th className="py-2 text-lg font-semibold w-[10%]">Seção / Folha</th>
              <th className="py-2 text-lg font-semibold w-[10%]">Vencimentos</th>
              <th className="py-2 text-lg font-semibold w-[10%]">Descontos</th>
              <th className="py-2 text-lg font-semibold w-[10%]">Valor</th>
            </tr>
          </thead>
          <tbody>
            {/* Conteúdo da tabela */}
            {discounts && discounts.map((item: any, index: number) => (
              <tr key={index} className="border-b border-gray-400 text-center">
                <td className="py-2">{item.matricula}</td>
                <td className="py-2">{item.nome}</td>
                <td className="py-2">{item.cbo}</td>
                <td className="py-2">{item.cargo}</td>
                <td className="py-2">{item.empresa}</td>
                <td className="py-2">{item.local}</td>
                <td className="py-2">{item.depto}</td>
                <td className="py-2">{item.secao}</td>
                <td className="py-2">{item.vencimentos}</td>
                <td className="py-2">{item.descontos}</td>
                <td className="py-2">{item.valor}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            {/* Rodapé da tabela */}
          </tfoot>
        </table>
        <div className="py-4 text-lg text-center">
          DECLARO TER RECEBIDO DE: NOME DA EMPRESA | CNPJ DA EMPRESA | ENDEREÇO DA EMPRESA, A QUANTIA LÍQUIDA ACIMA
        </div>
      </div>
    </main>
  )
}

export default PayrollPage