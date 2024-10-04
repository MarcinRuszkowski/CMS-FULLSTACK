import { Link } from "react-router-dom";
import img from "../assets/pepe.png";
function NotFoundPage() {
  return (
    <main className="grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8 bg-gray-600">
      <div className="flex flex-col items-center">
        <div className="text-base font-semibold text-slate-300">
          <div className="flex flex-row text-5xl">
            4<img src={img} className="w-14 mx-2" />4
          </div>
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-300 sm:text-5xl">
          Page not found
        </h1>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-green-700 px-3.5 py-2.5 text-sm font-semibold text-slate-300 shadow-sm hover:opacity-75 "
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default NotFoundPage;
