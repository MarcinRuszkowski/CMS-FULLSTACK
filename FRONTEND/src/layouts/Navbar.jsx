import ThemeController from "./ThemeController";
import Breadcrumbs from "./Breadcrumbs";
import LogoutBtn from "./LogoutBtn";

function Navbar() {
  return (
    <div className="flex flex-row justify-between mx-5 py-5">
      <Breadcrumbs />
      <div className="flex flex-row gap-5 items-center">
        <LogoutBtn />
        <ThemeController />
      </div>
    </div>
  );
}

export default Navbar;
