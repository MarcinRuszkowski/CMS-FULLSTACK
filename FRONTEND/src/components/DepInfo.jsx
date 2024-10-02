import AddressData from "./AddressData";
import DepartmentEmail from "./DepartmentEmail";

function DepInfo({ desc, address, departmentEmail }) {
  return (
    <div className="space-y-5">
      <div>{desc}</div>
      <div>{address && <AddressData address={address} />}</div>
      <div>
        {departmentEmail && <DepartmentEmail email={departmentEmail} />}
      </div>
    </div>
  );
}

export default DepInfo;
