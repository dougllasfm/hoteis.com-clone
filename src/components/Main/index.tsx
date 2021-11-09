import Feed from '../Feed'
import SideBar from '../SideBar'
import { Container } from './styles';

function Main() {
  return (
    <Container>
      <SideBar />
      <Feed />
    </Container>
  );
};

export default Main;
