import { FaRegUserCircle } from "react-icons/fa";

function NewInfo({
  title = "Tytuł wiadomości",
  message = "Lorem ipsum dolor sit amet consectetur adipisicing e quod autem iste illum possimus voluptatem enim.",
}) {
  return (
    <div className="flex flex-row flex-1 border-b-2 p-5 gap-4 items-center">
      <FaRegUserCircle className="w-20 h-20" />
      <div className="flex flex-col text-nowrap flex-1 overflow-x-auto text-secondary-color">
        <p className="font-bold ">{title}</p>
        <p>{message}</p>
      </div>
      <p className="text-secondary-color text-sm">22 lis 12:12</p>
    </div>
  );
}

export default NewInfo;
