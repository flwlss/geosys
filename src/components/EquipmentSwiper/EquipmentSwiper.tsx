import { Swiper, SwiperSlide } from 'swiper/react';
import './EquipmentSwiper.scss';
import './styles.css';
import { Navigation } from 'swiper/modules';
import Slide from './Slide';
import { equipments } from '../../common/mocks';
import { useModal } from '../../common/helpers';
import Modal from '../Modal/Modal';

const EquipmentSwiper = () => {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <Swiper
      navigation={{
        prevEl: '.slide__buttons__prevBtn',
        nextEl: '.slide__buttons__nextBtn',
      }}
      modules={[Navigation]}
      speed={1}
      allowTouchMove={false}
      className="mySwiper"
    >
      {isOpen && <Modal closeModal={closeModal} />}
      {equipments().map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <Slide opemModal={openModal} item={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default EquipmentSwiper;
