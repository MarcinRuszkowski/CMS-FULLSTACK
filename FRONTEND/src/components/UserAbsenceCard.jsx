import AbsenceUser from "./AbsenceUser";
import AbsenceUserContact from "./AbsenceUserContact";

function UserAbsenceCard() {
  return (
    <div className="flex flex-col px-5 pt-7 justify-center bg-box-color rounded-md md:w-2/5 h-fit w-full">
      <AbsenceUser username="Jan Kowalski" job="Nieudacznik" />
      <AbsenceUserContact
        email="jan.kowalski@mail.pl"
        mobile="789 546 980"
        phone="32 789 56 67"
      />
      <div className=" border-b-2 px-5 py-7 font-medium text-secondary-color text-sm flex flex-row justify-between">
        <p className="">Zatrudniony w spółce</p>
        <p className="font-bold text-secondary-color">
          COMPANY On-line Sp. z o. o.
        </p>
      </div>
      <div className=" px-5 py-7 font-medium text-secondary-color text-sm flex flex-row justify-between">
        <p className="">Data zatrudnienia</p>
        <p className="font-bold text-secondary-color">2 kwi 2012</p>
      </div>
    </div>
  );
}

export default UserAbsenceCard;
