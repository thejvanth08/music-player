import { IoIosMenu } from "react-icons/io";
import { IoMusicalNotesSharp } from "react-icons/io5";

// size attri -> to change size
const Nav = () => {
  return (
    <nav className="bg-[rgba(0,0,0,0.8)] text-white px-7 py-3 flex justify-between items-center fixed top-0 w-full lg:bg-transparent">
      <div className="bg-black p-1.5 rounded-xl">
        <a className="cursor-pointer" href="">
          <IoMusicalNotesSharp className="" size={28}></IoMusicalNotesSharp>
        </a>
      </div>

      <IoIosMenu className="cursor-pointer" size={30}></IoIosMenu>
    </nav>
  );
};
export default Nav;
