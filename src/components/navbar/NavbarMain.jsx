import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  return (
    <nav className="max-w-[1300px] w-full mx-auto mt-2">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto  bg-black items-center p-3 rounded-r-full rounded-l-full border-orange border-[0.5px] ">
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>
        <NavbarBtn />
      </div>
      <div className="flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full  border-orange border-[0.5px] ">
        <NavbarToggler />
      </div>
    </nav>
  );
};

export default NavbarMain;
