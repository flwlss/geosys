import { Swiper, SwiperSlide } from "swiper/react";
import "./EquipmentSwiper.scss";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Navigation } from "swiper/modules";
import Slide from "./Slide";
import { equipments } from "../../common/mocks";

const EquipmentSwiper = () => {
  return (
    <Swiper
      navigation={{
        prevEl: ".slide__buttons__prevBtn",
        nextEl: ".slide__buttons__nextBtn",
      }}
      modules={[Navigation]}
      speed={1}
      allowTouchMove={false}
      className="mySwiper"
    >
      {equipments.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <Slide item={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default EquipmentSwiper;
