import { Container, Wrapper, NavBar } from './styles';

function Header() {
  return (
    <Container>
      <Wrapper>
        <a href="/"><h1>Hoteis.com</h1></a>
        <NavBar>
          <li>Suas Reservas</li>
          <li>Login</li>
        </NavBar>
      </Wrapper>
    </Container>
  );
};

export default Header;
