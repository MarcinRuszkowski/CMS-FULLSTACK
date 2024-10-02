import UserFailures from "./UserFailures";
import FilesToDownload from "./FilesToDownload";
import Rating from "./Rating";

function MainFailures() {
  return (
    <div className="bg-box-color flex flex-1 flex-col rounded-md px-5 py-8 gap-5">
      <p className="font-bold text-4xl text-secondary-color">
        Problemy ze sprzętem, oprogramowaniem, pocztą e-mailową oraz Internetem
      </p>
      <p className="text-secondary-color">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugiat
        illo aliquid alias! Eaque similique aliquam beatae suscipit? Omnis
        veritatis vel soluta eaque quidem a exercitationem! Tempore numquam
        recusandae cumque! Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Assumenda, distinctio. Similique officia odit vel voluptatum
        tempora harum dolorum, eveniet magni ad quod rerum, quisquam corporis
        porro fuga doloribus! Harum, sequi.
      </p>
      <p className="font-medium text-secondary-color border-b-2 py-5">
        Osoba odpowiedzialna
      </p>
      <UserFailures />
      <UserFailures />
      <div className="flex flex-col">
        <p className="font-medium text-secondary-color border-b-2 py-5">
          Godziny pracy
        </p>
        <div className="flex flex-col sm:flex-row py-5 gap-5">
          <div className="flex flex-col gap-3">
            <p className="text-sm text-secondary-color">Pomoc na miejscu:</p>
            <p className="text-green-500 text-3xl font-medium">8.00-16.00</p>
          </div>
          <div className="flex flex-col gap-3 sm:ml-14">
            <p className="text-sm text-secondary-color">Pomoc telefoniczna:</p>
            <p className="text-red-500 text-3xl font-medium">8.00-18.00</p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-medium text-secondary-color border-b-2 py-5">
            Pliki do pobrania
          </p>
          <FilesToDownload />
          <FilesToDownload />
        </div>
      </div>
      <Rating />
    </div>
  );
}

export default MainFailures;
