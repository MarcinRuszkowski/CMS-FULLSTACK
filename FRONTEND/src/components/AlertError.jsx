import { VscError } from "react-icons/vsc";

function AlertError({ message }) {
  return (
    <div role="alert" className="alert alert-error">
      <VscError />

      <span>{message}</span>
    </div>
  );
}

export default AlertError;
