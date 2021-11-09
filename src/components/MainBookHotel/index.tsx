import { Container, Slides, Sidebar } from './styles';

function MainBookHotel() {
  return (
    <Container>
      <Slides>
        <img src="https://www.hplus.com.br/wp-content/uploads/2020/05/hotel-em-bras%C3%ADlia-centro-oeste.jpg" alt="" width="760" height="420" />

        <div className="others-images">
          <img src="https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg" alt="" width="249" height="180" />
          <img src="https://www.gandinihotel.com.br/images/gandini-hotel-slide-01.jpg" alt="" width="249" height="180" />
          <img src="https://panamby.com.br/wp-content/uploads/2020/10/homeslider-1500-l.jpg" alt="" width="249" height="180" />
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
          <span>Muito bom</span>
          <p>22 out 2021</p>
        </div>
      </Sidebar>
    </Container>
  );
};

export default MainBookHotel;
