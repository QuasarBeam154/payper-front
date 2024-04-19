export interface employeeDTO {
  id: string
  nome: string
}

export interface discountDTO {
  inss: Number
  sindical: Number
  fgts: Number
  valeAlimentacao: Number
  valeTransporte: Number
  irrf: Number
  adiantamento: Number
  horasDeficit: Number
  adicionalInsalubridade: Number
  adicionalPericulosidade: Number
  salarioFamilia: Number
  auxilioCreche: Number
  adicionalNoturno: Number
  diariaViagens: Number
}

export interface employerDTO {
  nome: string
  CNPJ: string
  endereco: string
}

export const apiUrl = 'http://localhost:3002/api'

export const fetchData = async (endpoint: string) => {
  const response = await fetch(apiUrl + endpoint);
  if (!response.ok) {
    throw new Error('Erro ao carregar os dados');
  }
  const jsonData = await response.json();
  return jsonData;
};