import { useTranslation } from 'react-i18next';
import Input from '../Input/Input';
import './Modal.scss';
import Close from '/src/assets/images/icons/close.svg?react';

interface Props {
  closeModal: () => void;
}

const Modal: React.FC<Props> = ({ closeModal }) => {
  const { t } = useTranslation();

  return (
    <div className="modal">
      <div className="modalWrapper">
        <Close
          style={{ cursor: 'pointer' }}
          onClick={closeModal}
          className="close"
        />
        <div className="title">{t('contacts.requestModal')}</div>
        <div>
          <div className="inputsWrapper">
            <Input
              color="#989898"
              alignItems="center"
              textarea={false}
              placeholder={t('contacts.name')}
            />
            <Input
              color="#989898"
              type="text"
              alignItems="center"
              textarea={false}
              placeholder={t('contacts.email')}
            />
            <Input
              color="#989898"
              type="number"
              alignItems="center"
              textarea={false}
              placeholder={t('contacts.phoneTitle')}
            />

            <Input
              color="#989898"
              labelHeight="75px"
              alignItems="flex-start"
              textarea={true}
              placeholder={t('contacts.message')}
            />
            <button>{t('contacts.send')}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
