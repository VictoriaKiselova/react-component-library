import { useState } from "react";
import "./AccordionSubMenu.css";

type AccordionSubMenuProps = {
  subMenu: SubMenuItem[];
  isOpenSubMenu?: boolean;
};
type SubMenuItem = {
  id: string;
  label: string;
  description: string;
};

export default function AccordionSubMenu({
  subMenu = [],
  isOpenSubMenu,
}: AccordionSubMenuProps) {
  const [openSubItemId, setOpenSubItemId] = useState<string | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLLIElement>, id: string) => {
    e.stopPropagation();
    setOpenSubItemId(prev => (prev === id ? null : id));
  };

  return (
    <ul className="subMenuWrapper">
      {subMenu.map(item => (
        <li
          key={item.id}
          className="subMenuItem"
          onClick={e => handleClick(e, item.id)}>
          <h3 className="subMenuTitle">{item.label}</h3>
          <p
            className={`subMenuDescr ${
              isOpenSubMenu || (openSubItemId && openSubItemId === item.id)
                ? "active"
                : ""
            } `}>
            {item.description}
          </p>
        </li>
      ))}
    </ul>
  );
}
