import { IoCloudDownloadSharp } from "react-icons/io5";

function DocToDownload({ title = "Brak nazwy", size = "1.1" }) {
  return (
    <div className="h-64 min-w-44 w-44 flex flex-col items-center justify-center text-center bg-box-color p-6 gap-6 rounded-md">
      <IoCloudDownloadSharp className="w-11 h-11 hover:animate-bounce cursor-pointer text-main-color" />
      <p className="text-main-color font-medium">{title}</p>
      <p className="text-secondary-color">PDF ({size}MB)</p>
    </div>
  );
}

export default DocToDownload;
