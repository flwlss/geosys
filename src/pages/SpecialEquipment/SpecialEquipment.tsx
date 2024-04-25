import Container from "../../components/Container/Container";
import Marker from "../../components/Marker/Marker";
import "./SpecialEquipment.scss";
import Naffco from "/src/assets/images/icons/naffco.svg?react";
import Rectangle from "/src/assets/images/icons/rectangle.svg?react";
import Arrow from "/src/assets/images/icons/arrow.svg?react";
import Checkmark from "/src/assets/images/icons/checkmark.svg?react";
import Settings from "/src/assets/images/icons/settings.svg?react";
import Edu from "/src/assets/images/icons/edu.svg?react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../navigation/paths";

const SpecialEquipment = () => {
  const navigate = useNavigate();

  return (
    <div className="specialEquipment">
      <Container>
        <div className="specialEquipment__content">
          {/* <Number2 className="specialEquipment__content__number" /> */}
          <Marker title="Поставка СПЕЦТЕХНИКИ NAFFCO" />
          <div className="specialEquipment__contentWrapper">
            <div className="specialEquipment__leftContent">
              <Naffco />
              <p className="specialEquipment__leftContent__text">
                Geo Sys Middle East является официальным дилером компании NAFFCO
                FZCO – лидера мирового рынка по производству и поставкам
                высокотехнологичного противопожарного оборудования из
                Объединенных Арабских Эмиратов.
              </p>
              <p className="specialEquipment__leftContent__subtext">
                Мы занимаемся продажей аэродромной противопожарной спецтехники и
                специализируемся на её поставках аэропортам на территории
                Центральной Европы и стран СНГ.
              </p>
              <div className="specialEquipment__leftContent__flagWrapper">
                <div className="specialEquipment__leftContent__flag">
                  <Rectangle className="specialEquipment__leftContent__rectangle" />
                  <div
                    onClick={() => {
                      navigate(PATHS.EQUIPMENT);
                    }}
                    className="specialEquipment__leftContent__rectangle__btn"
                  >
                    <p>К спецтехнике</p>
                    <Arrow className="specialEquipment__leftContent__arrow" />
                  </div>
                </div>
              </div>
            </div>
            <div className="specialEquipment__rightContent">
              <p className="specialEquipment__rightContent__title">
                Как мы работаем?
              </p>
              <div className="specialEquipment__rightContent__columnWrapper">
                <div>
                  <div className="specialEquipment__rightContent__item">
                    <Checkmark />
                    <p>
                      Представляем признанного мирового производителя, отвечаем
                      за высокое качество и надежность поставляемой нами
                      аэродромной противопожарной спецтехники
                    </p>
                  </div>
                  <div className="specialEquipment__rightContent__item">
                    <Settings />
                    <p>
                      Поставляем спецтехнику различной конфигурации с учётом
                      индивидуальных потребностей заказчика
                    </p>
                  </div>
                  <div className="specialEquipment__rightContent__item">
                    <Edu />
                    <p>
                      Проводим обучение персонала заказчика по работе со
                      спецтехникой
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="specialEquipment__rightContent__item">
                      <Checkmark />
                      <p>
                        Гарантируем внимательное отношение к заказчику на всех
                        этапах - от момента заказа до поставки и ввода
                        спецтехники в эксплуатацию
                      </p>
                    </div>
                    <div className="specialEquipment__rightContent__item">
                      <Settings />
                      <p>
                        Выполняем комплексную поставку спецтехники, включающую в
                        себя таможенные процедуры оформления, доставку и ввод в
                        эксплуатацию
                      </p>
                    </div>
                    <div className="specialEquipment__rightContent__item">
                      <Edu />
                      <p>
                        Выполняем техническое обслуживание и ремонт спецтехники
                        на базе производителя
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SpecialEquipment;
