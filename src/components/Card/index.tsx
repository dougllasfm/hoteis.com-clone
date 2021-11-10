import React from 'react';
import { Container, Info, Details, Confirm, EditSpan } from './styles';

type CardProps = {
  name: string,
  address: string,
  note: number,
  price: string,
}


function Card({name, address, note, price}:CardProps) {

  function Avaliation() {
    var span = "Sem avaliação"
    if (note >= 9.0) {
      span = 'Excelente'
    } else if (note >= 8.0 && note < 9.0 ) {
      span = 'Muito bom'
    } else if (note < 8.0 && note >= 6.0) {
      span = 'Bom'
    } else if (note < 6.0) {
      span = 'Ruim'
    }
    return <span>{span}</span>
  }

  return (
    <Container>
      <img src="https://www.hplus.com.br/wp-content/uploads/2020/05/hotel-em-bras%C3%ADlia-centro-oeste.jpg" alt="" width="280" height="180" />
      <Info>
        <Details>
          <section className="title-hotel">
            <h2>{name}</h2>
            <span>{address}</span>
          </section>
          
          <section className="details-address">
            <p>São Paulo</p>
            <ul>
              <li>Centro da cidade</li>
              <li>Próximo a tal lugar</li>
            </ul>
            </section>
          <section className="avaliation">
            <EditSpan note={note}>{note.toFixed(1)}</EditSpan>
            <Avaliation />
            <p>125 avaliações de hóspedes verificados a hoteis.com</p>
          </section>
        </Details>
        
        <Confirm>
          <span>A partir de</span>
          <h2>R$ {price}</h2>
          <a href="/hotel"><button>Reservar agora</button></a>
        </Confirm>
      </Info>
    </Container>
  );
};

export default Card;
