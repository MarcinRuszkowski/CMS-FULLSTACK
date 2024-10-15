import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa6";

function LoginPage() {
  return (
    <>
      <section className="flex justify-center">
        <div className="flex flex-col  gap-8 items-center p-10 bg-box-color rounded-md h-auto w-2/4">
          <label
            htmlFor=""
            className="font-bold text-4xl text-main-color w-full text-start"
          >
            Zaloguj się
          </label>
          <label className="input  flex items-center gap-2 text-secondary-color bg-bg-color border-2 border-main-color py-1 px-3 leading-10 rounded-md hover:rounded-full w-full">
            <MdEmail className="text-secondary-color" />
            <input type="text" className="grow" placeholder="Email" />
          </label>
          <label className="input  flex items-center gap-2 text-secondary-color bg-bg-color border-2 border-main-color py-1 px-3 leading-10 rounded-md hover:rounded-full w-full">
            <FaKey className="text-secondary-color" />
            <input type="password" className="grow" placeholder="Hasło" />
          </label>

          <button className="bg-main-color py-1 px-3 text-white leading-10 rounded-md hover:rounded-full w-full">
            Zaloguj się
          </button>
        </div>
      </section>
    </>
  );
}

export default LoginPage;
