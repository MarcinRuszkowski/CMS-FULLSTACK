function DepartmentEmail({ email }) {
  return (
    <div className=" text-secondary-color">
      <p className="font-bold text-lg">Zbiorcze adresy e-mail</p>
      <div className="flex flex-col sm:flex-row  gap-3">
        <span className="text-main-color">{email}</span>
        <span className="sm:flex hidden">•</span>
        <span className="text-main-color">
          {email}
          <span className="text-secondary-color"> (tylko reklamy)</span>
        </span>
      </div>
    </div>
  );
}

export default DepartmentEmail;
