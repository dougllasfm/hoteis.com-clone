import { Container, Slides, Sidebar } from './styles';
import imgPrincipal from '../../assets/principal.jpg'
import img1 from '../../assets/imagem1.jpg'
import img2 from '../../assets/imagem2.jpg'
import img3 from '../../assets/imagem3.jpg'

function MainBookHotel() {
  return (
    <Container>
      <Slides>
        <img src={imgPrincipal} alt="Imagem principal do hotel" />
        <div className="others-images">
          <img src={img1} alt="imagem1" />
          <img src={img2} alt="imagem2" />
          <img src={img3} alt="imagem3" />
        </div>

      </Slides>
      <Sidebar>
        <div className="avaliation">
          <span>9,4</span>
          <div>
            <span>
              Excepcional
            </span>
            <p>200 avaliações de hóspedes verificados da hoteis.com</p>
          </div>

        </div>

        <div className="comments">
          <span>Muito bom</span>
          <p>22 out 2021</p>
        </div>
        <div className="comments">
          <span>Muito bom o atendimento no hotel</span>
          <p>22 out 2021</p>
        </div>
      </Sidebar>
    </Container>
  );
};

export default MainBookHotel;
