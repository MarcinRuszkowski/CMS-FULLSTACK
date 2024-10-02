import { Link } from "react-router-dom";
import img from "../assets/pepe.png";
function NotFoundPage() {
  return (
    <main className="grid min-h-full place-items-center bg-bg-color px-6 py-24 sm:py-32 lg:px-8">
      {/* <img src={img} className="w-32  bg-bg-color absolute bottom-0 left-0" /> */}

      <div className="flex flex-col items-center">
        <div className="text-base font-semibold text-main-color">
          <div className="flex flex-row text-5xl">
            4<img src={img} className="w-14 mx-2" />4
          </div>
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-main-color px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-75 "
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default NotFoundPage;
