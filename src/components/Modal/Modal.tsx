import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Input from '../Input/Input';
import './Modal.scss';
import Close from '/src/assets/images/icons/close.svg?react';

interface Props {
  closeModal: () => void;
}

const Modal: React.FC<Props> = ({ closeModal }) => {
  const { t } = useTranslation();
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files);
      const validFiles: File[] = [];
      const invalidFiles: string[] = [];

      newFiles.forEach((file) => {
        const fileType = file.type;
        const validTypes = [
          'application/pdf',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        ];

        if (validTypes.includes(fileType)) {
          validFiles.push(file);
        } else {
          invalidFiles.push(file.name);
        }
      });

      if (invalidFiles.length > 0) {
        alert(`${t('contacts.invalidFiles')}`);
      }

      setSelectedFiles((prevFiles) => [...prevFiles, ...validFiles]);
    }
  };

  const handleRemoveFile = (indexToRemove: number) => {
    setSelectedFiles((prevFiles) =>
      prevFiles.filter((_, index) => index !== indexToRemove),
    );
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="modal"
    >
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
              modal={true}
              color="#989898"
              alignItems="center"
              textarea={false}
              placeholder={t('contacts.name')}
            />
            <Input
              modal={true}
              color="#989898"
              type="text"
              alignItems="center"
              textarea={false}
              placeholder={t('contacts.email')}
            />
            <Input
              modal={true}
              color="#989898"
              type="number"
              alignItems="center"
              textarea={false}
              placeholder={t('contacts.phoneTitle')}
            />
            <Input
              modal={true}
              color="#989898"
              labelHeight="75px"
              alignItems="flex-start"
              textarea={true}
              placeholder={t('contacts.message')}
            />
            <div className="fileUpload">
              <label htmlFor="fileUpload">{t('contacts.uploadFiles')}</label>
              <input
                style={{ display: 'none' }}
                type="file"
                id="fileUpload"
                accept=".pdf,.doc,.docx"
                multiple
                onChange={handleFileChange}
              />
              <div className="fileNames">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="fileName">
                    <span>{file.name}</span>
                    <button
                      type="button"
                      className="removeFileButton"
                      onClick={() => handleRemoveFile(index)}
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <button>{t('contacts.send')}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
