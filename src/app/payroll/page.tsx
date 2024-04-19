'use client'
import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import DisplayImage from "@/components/misc/display-image";
import TertiaryButton from "@/components/buttons/tertiary-button";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { discountDTO, employerDTO, fetchData } from '@/api/dataFetch';

const PayrollPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams(); // Acessar os parâmetros de consulta da URL
  const [discounts, setDiscounts] = useState<discountDTO[]>([]); // Estado para armazenar os descontos
  const [employer, setEmployer] = useState<employerDTO[]>([]); // Estado para armazenar o empregador

  useEffect(() => {
    // Verifica se o router está definido
    if (!router) return; // Verifica se o router está pronto para uso 

    // Função para calcular os descontos com base no funcionário selecionado
    const calculateDiscounts = async () => {
      try {
        // Recupere o ID do funcionário da query da rota
        const id = searchParams.get('id'); // Obtém o parâmetro de consulta 'id'
        console.log(id);
        // Verifica se o ID do funcionário está presente
        if (id) {
          // Faça a chamada à API para obter os descontos
          const response = await fetchData(`/discounts/${id}`);
          setDiscounts(response); // Atualize o estado com os descontos obtidos
          console.log(discounts);
        }
      } catch (error) {
        console.error('Erro ao calcular descontos:', error);
      }
    };

    calculateDiscounts(); // Chame a função para calcular os descontos quando o componente montar
  }, [searchParams]); // Execute o efeito sempre que o parametro mudar

  if (!router) return null; // Se o router não estiver definido, retorna null

  return (
    <main className="flex flex-col items-centers w-screen h-screen bg-slate-50">
      {/* Header */}
      <div className='flex justify-between items-center mb-12 mt-6 px-24 w-full'>
        <DisplayImage type='logo' className='w-64 h-auto' />
        <TertiaryButton label='Sair' onClick={() => router.push('/')}>
          <XMarkIcon className='w-6' />
        </TertiaryButton>
      </div>
      <div className='flex flex-col items-center'>
        {/* Title */}
        <h1 className='mb-8 text-5xl font-bold text-slate-600'>Recibo de Pagamento</h1>

        {/* Content */}
        <div className='w-[80%] overflow-x-auto'>
          <table className="w-full border-collapse bg-white rounded-lg shadow-md">
            <thead>
              {/* Cabeçalho com duas linhas */}
              <tr className="bg-gray-200 border-b border-gray-400 text-center">
                <th className="py-2 text-lg font-semibold" colSpan={2}>Placeholder Nome do Funcionário</th>
              </tr>
              <tr className="bg-gray-200 border-b border-gray-400 text-center">
                <th className="py-2 text-lg font-semibold" colSpan={2}>Placeholder Nome da Empresa</th>
              </tr>
              {/* Cabeçalho das colunas */}
              <tr className="bg-gray-200 border-b border-gray-400 text-center">
                <th className="py-2 text-lg font-semibold"> </th>
                <th className="py-2 text-lg font-semibold">Placeholder Descontos</th>
              </tr>
            </thead>
            <tbody>
              {/* Corpo da tabela com 15 linhas */}
              {discounts && discounts.map((item, i) => (
                <tr key={i} className="border-b border-gray-400 text-center">
                  <td className="py-2">
                    {/* Primeira coluna com nomes dos descontos */}
                    {i === 0 && "Adiantamento"}
                    {i === 1 && "Vale Alimentação"}
                    {i === 2 && "Vale Transporte"}
                    {i === 3 && "Adicional Insalubridade"}
                    {i === 4 && "Adicional Periculosidade"}
                    {i === 5 && "Adicional Noturno"}
                    {i === 6 && "Auxílio Creche"}
                    {i === 7 && "Salário Família"}
                    {i === 8 && "Horas Déficit"}
                    {i === 9 && "Diárias de Viagem"}
                    {i === 10 && "FGTS"}
                    {i === 11 && "INSS"}
                    {i === 12 && "Sindical"}
                    {i === 13 && "IRRF"}
                    {i === 14 && "Total"}
                  </td>
                  <td className="py-2">
                    {/* Segunda coluna com valores mapeados do array */}
                    {i === 14 ? item.valorTotal.toString() :
                      i === 0 ? item.adiantamento.toString() :
                        i === 1 ? item.valeAlimentacao.toString() :
                          i === 2 ? item.valeTransporte.toString() :
                            i === 3 ? item.adicionalInsalubridade.toString() :
                              i === 4 ? item.adicionalPericulosidade.toString() :
                                i === 5 ? item.adicionalNoturno.toString() :
                                  i === 6 ? item.auxilioCreche.toString() :
                                    i === 7 ? item.salarioFamilia.toString() :
                                      i === 8 ? item.horasDeficit.toString() :
                                        i === 9 ? item.diariaViagens.toString() :
                                          i === 10 ? item.fgts.toString() :
                                            i === 11 ? item.inss.toString() :
                                              i === 12 ? item.sindical.toString() :
                                                item.irrf.toString()
                    }
                  </td>
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
      </div>
    </main>
  )
}

export default PayrollPage