import { IoCloudDownloadSharp } from "react-icons/io5";

function FilesToDownload({ filename = "Plik do pobrania" }) {
  return (
    <div className="flex flex-col sm:flex-row items-center border-b-2 gap-5 p-5">
      <IoCloudDownloadSharp className="w-11 h-11 hover:animate-bounce cursor-pointer text-main-color" />
      <p className="text-main-color font-medium">{filename}</p>
    </div>
  );
}

export default FilesToDownload;
