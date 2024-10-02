import { IoDocumentTextSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function Doc({
  linkTo,
  iconColor = "text-main-color",
  companyName = "PTWP",
  docsAmount = 0,
}) {
  return (
    <Link
      to={linkTo}
      className=" bg-box-color border-2 hover:border-main-color h-60 w-72 flex max-w-full flex-col items-center text-center justify-center rounded-md cursor-pointer px-5"
    >
      <IoDocumentTextSharp className={`${iconColor} w-16 h-16`} />
      <p className="text-xl font-bold py-4 text-secondary-color">
        {companyName}
      </p>
      <p className="text-gray-400 text-sm">{docsAmount} dokumentów</p>
    </Link>
  );
}

export default Doc;
