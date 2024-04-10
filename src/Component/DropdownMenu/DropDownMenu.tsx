import { useState } from "react";
import "./DropDownMenu.scss";
import { IoIosArrowDown } from "react-icons/io";

type menuProps = {
  name: string;
};

const DropDownMenu: React.FC<{ listOptions: menuProps[] }> = ({
  listOptions,
}) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const hanleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      <div className="menuBox">
        <button
          className={`menuButton ${toggleMenu ? " clicked" : ""}`}
          onClick={hanleToggleMenu}
        >
          Menu
          <div
            className={`menuButtonArrow ${
              toggleMenu ? "arrowUp" : "arrowDown"
            }`}
          >
            <IoIosArrowDown />
          </div>
        </button>
        <div className={`optionBox ${toggleMenu ? "show" : "hide"} `}>
          <ul>
            {listOptions.map((option) => {
              return (
                <li>
                  <a href="">{option.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DropDownMenu;
