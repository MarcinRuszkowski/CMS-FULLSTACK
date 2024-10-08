import { useState } from "react";
import SkeletonCircle from "./SkeletonCircle";

function NewEmployeeCard({
  name,
  company,
  city,
  department,
  job,
  email,
  phone,
  image,
}) {
  return (
    <div className="flex flex-col p-5 bg-box-color w-full rounded-md items-center md:items-start gap-5 h-fit min-h-40 relative">
      <div className="md:absolute top-3 right-3">
        {image ? (
          <img
            src={image}
            alt="User"
            className="rounded-full w-24 h-24 object-cover"
          />
        ) : (
          <SkeletonCircle />
        )}
      </div>

      <div className="space-y-3">
        <div className="text-main-color text-3xl font-medium">{name}</div>
        <div className="items-start w-full text-secondary-color">
          <div>{company}</div>
          <div>{city}</div>
          <div>{department}</div>
          <div>{job}</div>
          <div>{email}</div>
          <div>{phone}</div>
        </div>
      </div>
    </div>
  );
}

export default NewEmployeeCard;
