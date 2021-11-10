import { Container, Sidebar, Main } from './styles';

function OptionsReservation() {
  return (
    <Container>
      <Sidebar>
        <img src="https://s3.amazonaws.com/wordpress-cdn.eadbox.com/2017/09/25192620/musicas_sem_direitos_autorais-01.jpg" alt="" width="200" height="130" />
        <h2>Apartamento com 2 quartos</h2>
        <span>Acomoda 2 pessoas</span>
        <span>1 cama de casal</span>
      </Sidebar>
      <Main>
        <section>
          <span>Opções</span>
          <span>Preço média da diária do hotel</span>
        </section>
        <section>
          <div className="informations">
            <span>Até xx/xx/xxxx</span>
            <ul>
              <li>Opção de pagamento na acomodação</li>
              <li>Wi-fi grátis</li>
              <li>Café da manhã para 2 pessoas</li>
            </ul>
          </div>
          <div className="confirmation">
            <h1>R$ 1.562</h1>
            <span>por diária</span>
            <strong>R$ 29.670 para 19 diárias</strong>
            <span>em até 12x sem juros</span>
            <button>Reservar</button>
          </div>
        </section>
      </Main>
    </Container>
  );
};

export default OptionsReservation;
