import SubmenuElem from "./SubmenuElem";

function Submenu() {
  return (
    <ul className="menu bg-box-color rounded-md gap-5 inline-flex h-fit px-3 pb-8">
      <SubmenuElem title="it" />
      <SubmenuElem title="marketing" />
      <SubmenuElem />
      <SubmenuElem title="księgowość" />
    </ul>
  );
}

export default Submenu;
