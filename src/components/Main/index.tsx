import Feed from '../Feed'
import { Container, SideBar } from './styles';

function Main() {
  return (
    <Container>
      <SideBar>
        <section>
          <h2>O nome contém</h2>
          <input className="search" type="text" placeholder="Nome da acomodação" />
        </section>
        <section className="input-checkbox">
          <h2>Filtros mais usados</h2>
          <label>
            <input type="checkbox" />
            Casas e Apartamentos
          </label>
          <label>
            <input type="checkbox" />
            Piscina
          </label>
          <label>
            <input type="checkbox" />
            Wifi incluido
          </label>
        </section>
        <section className="stars">
          <h2>Classificação por estrelas</h2>
          <ul>
            <li><button>1</button></li>
            <li><button>2</button></li>
            <li><button>3</button></li>
            <li><button>4</button></li>
            <li><button>5</button></li>  
          </ul>
        </section>
      </SideBar>
      <Feed />
    </Container>
  );
};

export default Main;
