import Container from '../../components/Container/Container';
import geoDot from '../../assets/images/icons/geoDot.svg';
import email from '../../assets/images/icons/email.svg';
import phone from '../../assets/images/icons/phone.svg';
import Arrow from '/src/assets/images/icons/arrow.svg?react';
import './Contacts.scss';
import Input from '../../components/Input/Input';
import { useTranslation } from 'react-i18next';
import Number5 from '/src/assets/images/icons/number5.svg?react';

const Contacts = () => {
  const width = window.innerWidth;

  const { t } = useTranslation();

  return (
    <div className="contacts">
      <Number5 className="contacts__number" />
      <Container>
        <div className="contactInfoWrapper">
          <div className="title">{t('navbar.contacts')} </div>
          <div className="contactInfoContent">
            <div className="contactItem">
              <img src={geoDot} alt="" />
              RA07AA08, Jebel Ali Freezone, Dubai, United Arab Emirates
            </div>
            <div className="contactItem">
              <img src={email} alt="" />
              info@geosys-uae.com
            </div>
            <a href="tel:+971585889505" className="contactItem">
              <img src={phone} alt="" />
              {t('contacts.phone')}
            </a>
          </div>
        </div>
        <div className="sendWrapper">
          <div className="title">{t('contacts.request')}</div>
          <div className="inputsWrapper">
            <Input
              maxWidth={width > 900 ? '300px' : ''}
              alignItems="center"
              textarea={false}
              placeholder={t('contacts.name')}
            />
            <Input
              maxWidth={width > 900 ? '300px' : ''}
              type="text"
              alignItems="center"
              textarea={false}
              placeholder={t('contacts.email')}
            />
            <Input
              maxWidth={width > 900 ? '300px' : ''}
              type="number"
              alignItems="center"
              textarea={false}
              placeholder={t('contacts.phoneTitle')}
            />
            <div
              className="lastElement"
              style={{ display: 'flex', gap: '17px' }}
            >
              <Input
                maxWidth={width > 900 ? '620px' : ''}
                labelHeight="75px"
                alignItems="flex-start"
                textarea={true}
                placeholder={t('contacts.message')}
              />
              {width > 560 ? (
                <div className="buttonWrapper">
                  <div className="rectangle" />
                  <div className="button">
                    {t('contacts.send')} <Arrow className="arrow" />
                  </div>
                </div>
              ) : (
                <button className="mobileButton">
                  {t('contacts.send')} <Arrow className="arrow" />
                </button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contacts;
