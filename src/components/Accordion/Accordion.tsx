import { useState } from "react";
import navList from "../../constants/navList";
import SubMenu from "../AccordionSubMenu/AccordionSubMenu";
import "./Accordion.css";

type AccordionStoriesProps = {
  isOpenMainItem?: boolean;
};

export default function Accordion({ isOpenMainItem }: AccordionStoriesProps) {
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  function handleClick(itemId: string) {
    setOpenItemId(prev => (prev === itemId ? null : itemId));
  }

  return (
    <nav>
      <ul className="accordionList">
        {navList.map(itemList => (
          <li
            key={itemList.id}
            className="accordionListItem"
            onClick={() => handleClick(itemList.id)}>
            <h3 className="accordionTitle">{itemList.label}</h3>
            <div
              className={`description ${
                (isOpenMainItem ?? false) || openItemId === itemList.id
                  ? "descriptionActive"
                  : ""
              }`}>
              <p>{itemList.description}</p>
              <SubMenu subMenu={itemList.subMenu} />
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
