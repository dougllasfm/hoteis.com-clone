import { Container, Wrapper, NavBar } from './styles';

function Header() {
  return (
    <Container>
      <Wrapper>
        <div>
          <a href="/"><h1>Hoteis.com</h1></a>
        </div>

        <NavBar>
          <li>Suas Reservas</li>
          <li>Login</li>
        </NavBar>
      </Wrapper>
    </Container>
  );
};

export default Header;
