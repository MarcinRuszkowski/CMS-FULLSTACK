import { FaCar } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { BiSolidError } from "react-icons/bi";
import { TbError404 } from "react-icons/tb";
import { LuPalmtree } from "react-icons/lu";
import { ImVideoCamera } from "react-icons/im";
import { FaSuitcaseRolling } from "react-icons/fa6";
import { GiPublicSpeaker } from "react-icons/gi";
import { MdAdminPanelSettings } from "react-icons/md";
import { IoCalendar } from "react-icons/io5";


import Card from "./Card";

function CardsPanel() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 place-items-center w-full">
      <Card
        linkTo="/employees"
        icon={<HiUserGroup />}
        title="kto kim jest"
        color="border-yellow-400 text-yellow-400"
      />
      <Card
        linkTo="/failure"
        icon={<BiSolidError />}
        title="zgłoś awarię sprzętu"
        color="border-red-500 text-red-500"
      />
      <Card
        icon={<GiPublicSpeaker />}
        title="rezerwuj salę"
        color="border-cyan-400 text-cyan-400"
      />
      <Card
        linkTo="/absence"
        icon={<LuPalmtree />}
        title="zgłoś nieobecność"
        color="border-green-500 text-green-500"
      />
      <Card
        icon={<TbError404 />}
        title="zgłoś awarię portalu / cms"
        color="border-orange-500 text-orange-500"
      />
      <Card
        icon={<ImVideoCamera />}
        title="wynajmij dział foto"
        color="border-emerald-600 text-emerald-600"
      />
      <Card
        icon={<FaSuitcaseRolling />}
        title="zgłoś / rozlicz delegację"
        color="border-purple-400 text-purple-400"
      />
      <Card
        icon={<FaCar />}
        title="rezerwuj pojazd"
        color="border-pink-400 text-pink-400"
      />
      <Card
        linkTo="/aboutCompany"
        icon="logoPTWP"
        title="o firmie"
        color="border-sky-600 text-sky-600"
      />
      <Card
        linkTo="/adminPanel"
        icon={<MdAdminPanelSettings />}
        title="Admin"
        color="border-emerald-200 text-emerald-200"
      />
      <Card
        linkTo="/eventsCalendar"
        icon={<IoCalendar />}
        title="Kalendarz wydarzeń"
        color="border-purple-700 text-purple-700"
      />
    </div>
  );
}

export default CardsPanel;
