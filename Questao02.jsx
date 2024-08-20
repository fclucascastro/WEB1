import React, { useState } from 'react';

// Componente Questao02
function Questao02() {
  // Estado para controlar a exibição da imagem
  const [mostrarFrontal, setMostrarFrontal] = useState(true);

  // Caminhos das imagens do Pokémon
  const imagemFrontal = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png';
  const imagemCostas = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png';

  // Função para alternar a imagem
  const alternarImagem = () => {
    setMostrarFrontal(!mostrarFrontal);
  };

  return (
    <div>
      {/* Renderiza a imagem com base no estado mostrarFrontal */}
      <img
        src={mostrarFrontal ? imagemFrontal : imagemCostas}
        alt="Pokémon"
        style={{ width: '150px', height: '150px' }} // Estilização opcional
      />
      <br />
      {/* Botão para alternar a imagem */}
      <button onClick={alternarImagem}>
        {mostrarFrontal ? 'Mostrar Costas' : 'Mostrar Frente'}
      </button>
    </div>
  );
}

export default Questao02;


/*usei o hook useState pra mudar o estado do pikachu, que defini como  é true a foto de frente.
As variáveis imagemFrontal e imagemCostas armazenam os URLs das imagens do Pikachu 
para a visualização frontal e traseira, respectivamente. Essas URLs são carregadas a partir 
do repositório público da PokeAPI. Um botão é renderizado abaixo da imagem. O texto do botão muda entre "Mostrar Costas" e "Mostrar Frente" 
dependendo do que ele estava anteriormente. O botão, quando clica, chama a função alternarImagem, que altera o estado do picachu.*/
