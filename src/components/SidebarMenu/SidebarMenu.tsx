import { useEffect, useState, useRef } from "react";
import Accordion from "../Accordion/Accordion";
import "./SidebarMenu.css";

type SidebarMenuProps = {
  open?: boolean;
};

export default function SidebarMenu({ open }: SidebarMenuProps) {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(open ?? false);
  const linkSidebar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpenSidebar(open ?? false);
  }, [open]);

  useEffect(() => {
    document.addEventListener("click", e => {
      if (
        linkSidebar.current &&
        !linkSidebar.current.contains(e.target as Node)
      ) {
        setIsOpenSidebar(false);
      }
    });
  }, []);

  return (
    <div
      ref={linkSidebar}
      className={`sidebarMenuWrapper ${
        isOpenSidebar ? "visibleSidebar" : "close"
      }`}>
      <Accordion />
    </div>
  );
}
