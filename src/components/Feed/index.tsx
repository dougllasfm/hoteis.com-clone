import Card from '../Card'
import { Container } from './styles';

function Feed() {

  // function Cards() {
  //   if ()
  // }

  return (
    <Container>
      <Card name={"Teste"} address={"Qualquer coisa"} note={5.0} price={"105,90"} />
      <Card name={"Querência Hotel"} address={"Qualquer coisa"} note={8.0} price={"150,80"} />
      <Card name={"Odara Araguaia"} address={"Qualquer coisa"} note={9.5} price={"320,99"} />
      <Card name={"Vale da Serra"}address={"Qualquer coisa"} note={7.4} price={"199,90"} />
    </Container>
  );
};

export default Feed;
