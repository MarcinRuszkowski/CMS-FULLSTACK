import { CiCircleCheck } from "react-icons/ci";

function AlertSuccess({ message }) {
  return (
    <div role="alert" className="alert bg-green-600 text-white p-3 pr-4">
      <CiCircleCheck className="text-2xl" />
      <span>{message}</span>
    </div>
  );
}

export default AlertSuccess;
