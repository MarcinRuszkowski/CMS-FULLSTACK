import { useState } from "react";
import DepInfo from "./DepInfo";
import DepEmployees from "./DepEmployees";

function TabWithContent({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  if (!Array.isArray(tabs)) {
    return <div>Brak danych</div>;
  }

  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-row justify-between text-secondary-color font-medium">
        {tabs.map((info, index) => (
          <div
            onClick={() => setActiveTab(index)}
            key={index}
            className={
              activeTab === index
                ? "border-b-2 w-full pb-1 text-center border-main-color text-main-color"
                : "border-b-2 w-full pb-1 text-center"
            }
          >
            {info.name}
          </div>
        ))}
      </div>
      <div className="p-5 text-secondary-color">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={activeTab === index ? "block space-y-5" : "hidden"}
          >
            <div>
              <DepInfo
                desc={tab.desc}
                address={tab.address}
                departmentEmail={tab.departmentEmail}
              />
            </div>

            <div>
              <DepEmployees employees={tab.employees} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TabWithContent;
