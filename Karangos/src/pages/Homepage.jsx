// Desenvolvido por Liniker Elias - 4 Ads 
// Programação Web

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import vintageCarsImage from '../assets/vintage-cars.png'; /// importação da imagem proposta dentro de assets

export default function Homepage() {

  const [visible, setVisible] = useState(false); // Declaração da varíavel de estado, foi dada como "false"
  // Foi utilizado " false " para a imagem primeiramente estar oculta.

  const handleButtonClick = () => { 
    // Inverter o valor da variável de estado 'visible' assim que o botão for clicado

    setVisible(!visible);  /* foi utilizado "!" pra 
    fazer a alteração quando o usúario clicar em 
    "Mostrar um segredo " aparecendo ou desaparecendo a imagem*/
  };

  // Texto proposto pelo professor que será mostrado na tela para o usúario > (Descrição do projeto)
  return (
    <> 
      <h1>Bem-vindo(a) à loja Karangos!</h1>
      <p>Karangos é um projeto front-end desenvolvido pelo Prof. Fausto Cintra juntamente com a turma do 4º semestre matutino de ADS da Fatec Franca.</p>
      <p>Seu objetivo é demonstrar as funcionalidades e possibilidades do React em conjunto com a biblioteca de componentes Material UI, acessando uma API REST remota.</p>
      <p>Clique sobre ícone do menu no canto superior esquerdo para acessar as funcionalidades.</p>
      <p>Use o menu na parte superior à esquerda para acessar as funcionalidades do sistema.</p> 
      <p style={{ textAlign: 'center' }}> 
      <Button color="secondary" variant="contained" onClick={handleButtonClick}> {/* Criação do botão na tela */}
          Mostrar um segredo !
        </Button>

      </p>
      <img alt="Carros antigos" 
      src={vintageCarsImage} // Utilizado para se referenciar e mostrar a imagem importada para a visualização na pagina
      style={{ height: visible ? '591px' : '0', opacity: visible ? '1' : '0' }}  // Ajustar a imagem com base na varíavel de estado criada chamada Visible
      />
    </>
  )
}
