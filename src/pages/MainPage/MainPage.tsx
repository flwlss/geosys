import Container from "../../components/Container/Container";
import "./MainPage.scss";

const MainPage = () => {
  return (
    <div className="page">
      <Container>
        <div className="page__content">
          <p className="page__text">
            Компания <span>Geo Sys</span> - один из крупнейших производителей
            измерительных каротажных подъёмников, геофизических измерительных
            приборов и специальных транспортных средств
          </p>
        </div>
      </Container>
    </div>
  );
};

export default MainPage;
