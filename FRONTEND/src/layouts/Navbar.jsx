import ThemeController from "./ThemeController";
import Breadcrumbs from "./Breadcrumbs";

function Navbar() {
  return (
    <div className="flex flex-row justify-between mx-5 py-5">
      <Breadcrumbs />
      <ThemeController />
    </div>
  );
}

export default Navbar;
