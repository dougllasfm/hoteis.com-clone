import Card from '../Card'
import { Container } from './styles';

function Feed() {
  return (
    <Container>
      <Card name={"Hotel 1"} address={"Qualquer coisa"} note={5.0} price={"105,90"} />
      <Card name={"Hotel 2"} address={"Qualquer coisa"} note={8.0} price={"150,80"} />
      <Card name={"Hotel 3"} address={"Qualquer coisa"} note={9.5} price={"320,99"} />
      <Card name={"Hotel 4"}address={"Qualquer coisa"} note={7.4} price={"199,90"} />
    </Container>
  );
};

export default Feed;
