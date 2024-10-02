import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "phosphor-react";
import { HiUserGroup } from "react-icons/hi";
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
        slidesPerView={4}
        coverflowEffect={{
          rotate: 10,
          stretch: -50,
          depth: 250,
          modifier: 3.5,
          slideShadows: false,
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
            linkTo="/addEmployee"
            title="Pracownicy"
            desc="Dodaj lub edytuj pracownika"
            icon={<HiUserGroup />}
            color="bg-purple-500 border-purple-600"
          />
        </SwiperSlide>
        <SwiperSlide>
          <AdminCard
            linkTo="/departments"
            title="Działy"
            desc="Zarządzaj działami"
            icon={<HiUserGroup />}
            color="bg-blue-500 border-blue-600"
          />
        </SwiperSlide>
        <SwiperSlide>
          <AdminCard
            linkTo="/docs"
            title="Dokumenty"
            desc="Przeglądaj firmowe dokumenty"
            icon={<HiUserGroup />}
            color="bg-green-500 border-green-600"
          />
        </SwiperSlide>
        <SwiperSlide>
          <AdminCard
            linkTo="/docs"
            title="Dokumenty"
            desc="Przeglądaj firmowe dokumenty"
            icon={<HiUserGroup />}
            color="bg-green-500 border-green-600"
          />
        </SwiperSlide>
        <SwiperSlide>
          <AdminCard
            linkTo="/docs"
            title="Dokumenty"
            desc="Przeglądaj firmowe dokumenty"
            icon={<HiUserGroup />}
            color="bg-green-500 border-green-600"
          />
        </SwiperSlide>
        <SwiperSlide>
          <AdminCard
            linkTo="/docs"
            title="Dokumenty"
            desc="Przeglądaj firmowe dokumenty"
            icon={<HiUserGroup />}
            color="bg-green-500 border-green-600"
          />
        </SwiperSlide>
        <SwiperSlide>
          <AdminCard
            linkTo="/docs"
            title="Dokumenty"
            desc="Przeglądaj firmowe dokumenty"
            icon={<HiUserGroup />}
            color="bg-green-500 border-green-600"
          />
        </SwiperSlide>

        <div className="flex justify-center space-x-2 mt-5 items-center">
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
