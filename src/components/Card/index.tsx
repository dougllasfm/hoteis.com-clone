import { Container, Info, Details, Confirm } from './styles';

function Card() {
  return (
    <Container>
      <img src="https://www.hplus.com.br/wp-content/uploads/2020/05/hotel-em-bras%C3%ADlia-centro-oeste.jpg" alt="" width="280" height="180" />
      <Info>
        <Details>
          <section className="title-hotel">
          <h2>Nome do hotel</h2>
          <span>Endereço do hotel, 899, São Paulo</span>
          </section>
          
          <section className="details-address">
          <p>São Paulo</p>
          <ul>
            <li>Centro da cidade</li>
            <li>Próximo a tal lugar</li>
          </ul>
          </section>
          <section className="avaliation">
            <span className="note">8,6</span>
            <span>Muito bom</span>
            <p>86 avaliações de hóspedes verificados a hoteis.com</p>
          </section>
        </Details>
        
        <Confirm>
          <span>A partir de</span>
          <h2>R$ 150,20</h2>
          <button>Selecionar datas</button>
        </Confirm>
      </Info>
    </Container>
  );
};

export default Card;
