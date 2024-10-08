import { useState } from "react";

function TabWithContent({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  if (!Array.isArray(tabs) || tabs.length === 0) {
    return <div>Brak danych</div>;
  }

  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-row justify-between text-secondary-color font-medium">
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(index)}
            className={
              activeTab === index
                ? "border-b-2 w-full pb-1 text-center border-main-color text-main-color cursor-pointer"
                : "border-b-2 w-full pb-1 text-center cursor-pointer"
            }
          >
            {tab.name}
          </div>
        ))}
      </div>

      <div className="p-5 text-secondary-color">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={activeTab === index ? "block space-y-5" : "hidden"}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TabWithContent;
