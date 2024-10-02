import Stat from "./Stat";

function Stats() {
  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <Stat
        title="PORTAL SAMORZĄDOWY"
        value="16782"
        desc="Unikalnych użytkowników"
      />
      <Stat title="Zysk 2024" value="844884845" desc="Eurogąbek" />
    </div>
  );
}

export default Stats;
