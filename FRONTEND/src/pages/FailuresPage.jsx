import Submenu from "../components/Submenu";
import MainFailures from "../components/MainFailures";

function FailuresPage() {
  return (
    <>
      <section className="flex flex-col md:flex-row gap-5 sm:mx-5 ">
        <Submenu />
        <MainFailures />
      </section>
    </>
  );
}

export default FailuresPage;
