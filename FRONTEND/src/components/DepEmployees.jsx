import UserBanner from "./UserBanner";

function DepEmployees({ employees }) {
  return (
    <div>
      {employees && (
        <ul>
          {Object.values(employees).map((employee, idx) => (
            <li key={idx} className="pb-5  mb-5">
              <UserBanner
                name={employee.name}
                city={employee.city}
                email={employee.email}
                phone={employee.phone}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DepEmployees;
