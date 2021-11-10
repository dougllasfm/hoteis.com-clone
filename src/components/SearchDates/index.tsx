import { Container } from './styles';

function SearchDates() {
  return (
    <Container>
      <fieldset>
        <input className="name" type="text" />
        <input type="date" />
        <input type="date" />
        <input className="reserve" type="text" />
        <button>Buscar</button>
      </fieldset>

    </Container>
  );
};

export default SearchDates;
