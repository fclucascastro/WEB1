import React from 'react';

//A principal função do Questão1B é mostrar o maior valor de casa campo da lista.
const Questao01B = ({ lista }) => {
  // Função para encontrar o maior valor em um objeto
  
  //Calcula o maior valor entre as propriedades a, b, e c de um objeto.
  const encontrarMaior = (objeto) => {
    return Math.max(objeto.a, objeto.b, objeto.c);
  };

  return (
    <div>
      <h2>Maiores Valores de Cada Objeto</h2>
      <ul>
        {/* Mapeia através da lista, e para cada objeto, calcula o maior valor e o exibe na lista. */}
        {lista.map((item, index) => (
          <li key={index}>
            <strong>Objeto {index + 1}:</strong> Maior valor é {encontrarMaior(item)}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Questao01A = () => {
//criar a lista 
const lista = [
    {a:10, b:3, c: 7},
    {a:5, b:-3, c: 9},
    {a:1, b:9, c: 40}
]
return (
    <div>
        {/* o Questao01A exibirá o componente Questao01B, 
        que por sua vez mostrará o maior valor de cada objeto na lista. 
        Cada item da lista será exibido com o maior valor destacado. */}
      <Questao01B lista={lista} />
    </div>
  );

}
export default Questao01A

