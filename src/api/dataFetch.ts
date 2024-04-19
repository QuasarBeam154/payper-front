export interface employeeObjects {
  id: string
  nome: string;
}
export interface formDataObjects {
  employee: string;
  advance_money: string;
  comission: string;
  extra_hour: string;
  arrears: string;
  insalubrity_periculosity: string;
  va: boolean;
  vt: boolean;
  an: boolean;
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


export const getDiscounts = async (formData: formDataObjects) => {
  try {
    const response = await fetch(apiUrl + '/discounts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error('Erro ao obter descontos');
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    throw new Error('Erro ao obter descontos: ' + (error instanceof Error ? error.message : 'Erro desconhecido'));
  }
};