import { useState } from "react";
import "./LangSelection.scss";
import Arrow from "/src/assets/images/icons/smallArrow.svg?react";

const LangSelection = () => {
  const [lang, setLang] = useState<"Ru" | "En">("Ru");
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="langSelection">
      <div
        onClick={() => {
          setShowMenu(!showMenu);
        }}
        className="langSelection__lang"
      >
        <p>{lang}</p>
        <Arrow />
      </div>
      {showMenu && (
        <div className="langSelection__menu">
          <p
            onClick={() => {
              setLang("Ru");
              setShowMenu(false);
            }}
          >
            Ru
          </p>
          <p
            onClick={() => {
              setLang("En");
              setShowMenu(false);
            }}
          >
            En
          </p>
        </div>
      )}
    </div>
  );
};

export default LangSelection;
