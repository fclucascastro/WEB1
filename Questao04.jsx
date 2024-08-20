import React, { useEffect, useState } from 'react';

const Questao04 = () => {
  // Estados para armazenar a lista de capitais, e as capitais com maior e menor população
  const [capitais, setCapitais] = useState([]);
  const [maiorPopulacao, setMaiorPopulacao] = useState(null);
  const [menorPopulacao, setMenorPopulacao] = useState(null);

  // Função que retorna uma Promise com dados simulados
  const obterDados = () => {
    return new Promise((resolve) => {
      // Simula um atraso antes de retornar os dados
      setTimeout(() => {
        resolve([
          {"capital": ["Dublin"], "population": 4994724},
          {"capital": ["Nicosia"], "population": 1207361},
          {"capital": ["Madrid"], "population": 47351567}
        ]);
      }, 1000); // 1 segundo de atraso
    });
  };

  // Função assíncrona para buscar dados da Promise
  const fetchCapitais = async () => {
    try {
      // Obtém os dados da Promise
      const data = await obterDados();
      // Atualiza o estado com a lista de capitais e populações
      setCapitais(data);
    } catch (error) {
      // Captura e exibe erros na obtenção dos dados
      console.error("Erro ao buscar dados:", error);
    }
  };

  // Função para encontrar a capital com a maior e menor população
  const encontrarMaiorEMenorPopulacao = () => {
    if (capitais.length === 0) return; // Verifica se há dados suficientes

    // Inicializa a maior e menor população com o primeiro objeto da lista
    let maior = capitais[0];
    let menor = capitais[0];

    // Itera sobre cada objeto da lista para encontrar os extremos
    capitais.forEach(capital => {
      if (capital.population > maior.population) {
        maior = capital; // Atualiza a capital com a maior população
      }
      if (capital.population < menor.population) {
        menor = capital; // Atualiza a capital com a menor população
      }
    });

    // Atualiza os estados com as capitais de maior e menor população
    setMaiorPopulacao(maior);
    setMenorPopulacao(menor);
  };

  // Hook para buscar dados ao montar o componente
  useEffect(() => {
    fetchCapitais();
  }, []);

  // Hook para encontrar maior e menor população quando os dados são atualizados
  useEffect(() => {
    encontrarMaiorEMenorPopulacao();
  }, [capitais]);

  return (
    <div>
      <h1>Capitais com Maior e Menor População</h1>
      {maiorPopulacao && menorPopulacao ? (
        <div>
          {/* Exibindo a capital com a maior população */}
          <p><strong>Capital com Maior População:</strong> {maiorPopulacao.capital[0]} ({maiorPopulacao.population})</p>
          {/* Exibindo a capital com a menor população */}
          <p><strong>Capital com Menor População:</strong> {menorPopulacao.capital[0]} ({menorPopulacao.population})</p>
        </div>
      ) : (
        // Mensagem exibida enquanto os dados estão sendo carregados
        <p>Carregando dados...</p>
      )}
    </div>
  );
};

export default Questao04;
