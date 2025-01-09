import { FaPhoneAlt } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";

function AbsenceUserContact({
  email = "imie.nazwisko@mail.pl",
  mobile = "000 000 000",
  phone = "32 000 00 00",
}) {
  return (
    <div className="flex flex-col gap-5 border-b-2 py-5 px-5">
      <div className="flex flex-row gap-5">
        <IoIosMail className="text-main-color w-6 h-6" />
        <div className="text-secondary-color">{email}</div>
      </div>
      <div className="flex flex-row gap-5">
        <FaPhoneAlt className="text-main-color w-6 h-6" />
        <div className="text-secondary-color">{mobile}</div>
      </div>
      <div className="flex flex-row gap-5">
        <MdContactPhone className="text-main-color w-6 h-6" />
        <div className="text-secondary-color">{phone}</div>
      </div>
    </div>
  );
}

export default AbsenceUserContact;
