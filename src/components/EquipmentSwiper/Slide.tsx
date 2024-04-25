import Arrow from "/src/assets/images/icons/secondArrow.svg?react";
import Plus from "/src/assets/images/icons/plus.svg?react";
import Minus from "/src/assets/images/icons/minus.svg?react";
import { useState } from "react";

type SlideProps = {
  item: any;
};

const Slide = ({ item }: SlideProps) => {
  const [showCharacteristics, setShowCharacteristics] = useState(false);

  return (
    <div>
      <div className="wrapper__rectangle" />
      <div className="slide">
        <div>
          <div className="slide__header">
            <div>
              <p className="slide__title">{item.serie}</p>
              <p className="slide__name">{item.title}</p>
            </div>
            <div className="slide__buttons">
              <div
                style={item.id === 1 ? { border: "1px solid #989898" } : {}}
                className="slide__buttons__prevBtn"
              >
                <Arrow style={item.id === 1 ? { color: "#989898" } : {}} />
              </div>
              <div
                style={item.id === 5 ? { border: "1px solid #989898" } : {}}
                className="slide__buttons__nextBtn"
              >
                <Arrow style={item.id === 5 ? { color: "#989898" } : {}} />
              </div>
            </div>
          </div>
          <p>photos</p>
        </div>
        <div className="slide__rightContent">
          <div>
            <div
              onClick={() => {
                setShowCharacteristics(!showCharacteristics);
              }}
              className="slide__rightContent__item"
            >
              <p>Характеристики</p>
              {showCharacteristics ? <Minus /> : <Plus />}
            </div>
            {showCharacteristics && (
              <div>
                {item.characteristics.map((item: any, index: number) => {
                  return (
                    <div
                      key={index}
                      className="slide__rightContent__characteristics"
                    >
                      <p className="slide__rightContent__characteristics__title">
                        {item.title}
                      </p>
                      {item.subtitle.map((item: any, index: number) => {
                        return (
                          <p
                            key={index}
                            className="slide__rightContent__characteristics__subtitle"
                          >
                            {item}
                          </p>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="slide__rightContent__line" />
          <div className="slide__rightContent__item">
            <p>Спецификации</p>
            <Plus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
