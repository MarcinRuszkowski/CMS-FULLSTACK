import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "phosphor-react";
import { HiUserGroup } from "react-icons/hi";
import { MdQuestionMark } from "react-icons/md";
import AdminCard from "./AdminCard";

import "swiper/css";
import "swiper/css/effect-coverflow";

function AdminCardSlider() {
  return (
    <div className="flex flex-col  justify-center w-full h-full">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3.5}
        coverflowEffect={{
          rotate: -5,
          stretch: -5,
          depth: 100,
          modifier: 3.5,
          slideShadows: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Navigation]}
        className="w-full max-w-2xl"
      >
        <SwiperSlide>
          <AdminCard
            linkTo="/adminPanel/addEmployee"
            title="Pracownicy"
            desc="Dodaj lub edytuj pracownika"
            icon={<HiUserGroup />}
            color="bg-yellow-500 border-yellow-600"
          />
        </SwiperSlide>
        <SwiperSlide>
          <AdminCard
            linkTo="/adminPanel"
            title="???????"
            desc="??? ???????????? ????? ??? ???"
            icon={<MdQuestionMark />}
            color="bg-blue-500 border-blue-600"
          />
        </SwiperSlide>
        <SwiperSlide>
          <AdminCard
            linkTo="/adminPanel"
            title="???????"
            desc="??? ???????????? ????? ??? ???"
            icon={<MdQuestionMark />}
            color="bg-red-500 border-red-600"
          />
        </SwiperSlide>
        <SwiperSlide>
          <AdminCard
            linkTo="/adminPanel"
            title="???????"
            desc="??? ???????????? ????? ??? ???"
            icon={<MdQuestionMark />}
            color="bg-emerald-500 border-emerald-600"
          />
        </SwiperSlide>
        <SwiperSlide>
          <AdminCard
            linkTo="/adminPanel"
            title="???????"
            desc="??? ???????????? ????? ??? ???"
            icon={<MdQuestionMark />}
            color="bg-purple-500 border-purple-600"
          />
        </SwiperSlide>

        <div className="flex justify-center space-x-2 mt-5 ">
          <div className="swiper-button-prev cursor-pointer rounded-full p-2 border border-transparent hover:border-current transition">
            <ArrowLeft size={24} />
          </div>
          <div className="swiper-button-next cursor-pointer rounded-full p-2 border border-transparent hover:border-current transition">
            <ArrowRight size={24} />
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default AdminCardSlider;
