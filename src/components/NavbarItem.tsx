import React, { useState } from "react";

interface INavbarItemProps {
  icon: string;
  children?: React.ReactNode;
}

export default function Navbar(props: INavbarItemProps) {

  const [open, setOpen] = useState(false);

  function handleIconClick() {
    setOpen(!open);
  }

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={handleIconClick}>
        {props.icon}
      </a>

      {open && props?.children}
    </li>
  );
}
