export interface employeeObjects {
  id: string
  nome: string;
}
export interface formDataObjects {
  employee: string
  advance_money: string
  comission: string
  extra_hour: string
  arrears: string
  insalubrity_periculosity: string
  va: boolean
  vt: boolean
  an: boolean
}

export const apiUrl = 'http://localhost:3001/api'

export const fetchData = async (endpoint:string) => {
  
    const response = await fetch(apiUrl+endpoint);
    if (!response.ok) {
      throw new Error('Erro ao carregar os dados');
    }
    const jsonData = await response.json();
    return jsonData
};