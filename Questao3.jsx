import React, { useEffect, useState } from 'react';

const Questao03 = () => {
  const [capitais, setCapitais] = useState([]);
  const [maiorPopulacao, setMaiorPopulacao] = useState(null);
  const [menorPopulacao, setMenorPopulacao] = useState(null);

  // Função para buscar dados da API
  const fetchCapitais = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population");
      const data = await response.json();

      // Atualiza o estado com os dados das capitais
      setCapitais(data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  // Função para encontrar as capitais com a maior e menor população
  const encontrarMaiorEMenorPopulacao = () => {
    if (capitais.length === 0) return;
    
    let maior = capitais[0];
    let menor = capitais[0];
    
    capitais.forEach(capital => {
      if (capital.population > maior.population) {
        maior = capital;
      }
      if (capital.population < menor.population) {
        menor = capital;
      }
    });

    setMaiorPopulacao(maior);
    setMenorPopulacao(menor);
  };

  // UseEffect para buscar dados e encontrar a maior e menor população
  useEffect(() => {
    fetchCapitais();
  }, []);

  useEffect(() => {
    encontrarMaiorEMenorPopulacao();
  }, [capitais]);

  return (
    <div>
      <h1>Capitais com Maior e Menor População</h1>
      {maiorPopulacao && menorPopulacao ? (
        <div>
          <p><strong>Capital com Maior População:</strong> {maiorPopulacao.capital[0]} ({maiorPopulacao.population})</p>
          <p><strong>Capital com Menor População:</strong> {menorPopulacao.capital[0]} ({menorPopulacao.population})</p>
        </div>
      ) : (
        <p>Carregando dados...</p>
      )}
    </div>
  );
};

export default Questao03;
