import NewInfo from "./NewInfo";

function News() {
  return (
    <div className="flex flex-col bg-box-color p-5 rounded-md">
      <p className="text-main-color font-medium text-lg border-b-2 pb-2">
        AKTUALNOŚCI
      </p>

      <NewInfo
        title="Nowy pracownik w Dziale Komunikacji"
        message="Do grona pracowników Grupy PTWP dołączyła Imie Nazwisko na stanowisku Specjalisty ds. komunikacji"
      />
      <NewInfo title="Ekko pies w PTWP" />
      <NewInfo message="message message message" />
    </div>
  );
}

export default News;
