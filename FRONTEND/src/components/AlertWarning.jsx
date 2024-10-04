import { GoAlert } from "react-icons/go";

function AlertWarning({message}) {
  return (
    <div role="alert" className="alert alert-warning">
      <GoAlert />
      <span>{message}</span>
    </div>
  );
}

export default AlertWarning;
