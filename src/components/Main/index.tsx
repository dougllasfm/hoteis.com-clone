import Feed from '../Feed'
import SideBar from '../SideBar'

import { Container } from './styles';

function Main() {
  return (
    <Container>
      <section className="feed">
        <SideBar />
        <Feed />
      </section>

    </Container>
  );
};

export default Main;
