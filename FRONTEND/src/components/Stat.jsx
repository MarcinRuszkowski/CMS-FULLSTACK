import StatCard from "./StatCard";
import diagram from "../assets/diagram-sample.png";

function Stat({ title, value, desc }) {
  return (
    <div className="flex flex-col flex-1 bg-box-color  rounded-md p-5 gap-5">
      <p className="text-main-color font-medium text-lg border-b-2 pb-2">
        CHWALMY SIĘ
      </p>
      <div className="flex flex-row">
        <img src={diagram} className="w-52 h-auto" />

        <StatCard title={title} value={value} desc={desc} />
      </div>
    </div>
  );
}

export default Stat;
