import { useEffect, useState } from 'react';
import './LangSelection.scss';
import Arrow from '/src/assets/images/icons/smallArrow.svg?react';
import { useTranslation } from 'react-i18next';

const LangSelection = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState<'Ru' | 'En'>('Ru');
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const lang = localStorage.getItem('i18nextLng');
    lang === 'ru' ? setLang('Ru') : setLang('En');
  }, []);

  const changeLg = (lang: string) => {
    localStorage.setItem('lang', lang);
    i18n.changeLanguage(lang);
  };

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
              setLang('Ru');
              changeLg('ru');
              setShowMenu(false);
            }}
          >
            Ru
          </p>
          <p
            onClick={() => {
              setLang('En');
              changeLg('en');
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
