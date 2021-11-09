import { Container, Title, Confirm } from './styles';

function HeaderBookHotel() {
  return (
    <Container>
      <Title>
        <div>
          <h1>Bourbon Atibaia Resort</h1>
          <span>4 estrelas</span>
        </div>

        <p>Resort 4 estrelas com 3 piscinas externas e com boas opções de transporte para o centro de convenções em Atibaia</p>
      </Title>

      <Confirm>
        <h1>R$ 1.562</h1>
        <span>por diária</span>
        <strong>R$ 29.670 para 19 diárias</strong>
        <span>em até 12x sem juros</span>
        <button>Escolher um quarto</button>
      </Confirm>
    </Container>
  );
};

export default HeaderBookHotel;
