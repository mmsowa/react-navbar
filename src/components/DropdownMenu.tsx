import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

interface IDropdownProps {
  activeMenu: string;
  menuHeight: any;
}

interface IDropdownItemProps {
  leftIcon?: string;
  rightIcon?: string;
  onClickHandler?: (el?: any) => void;
}

export function DropdownMenu(props: React.PropsWithChildren<IDropdownProps>) {

  return (
    <div className="dropdown" style={{height: props.menuHeight}}>
      {props.children}
    </div>
  );
}

export function DropdownItem(props: React.PropsWithChildren<IDropdownItemProps>) {
  return (
    <a href="#" className="menu-item" onClick={props.onClickHandler}>
      <span className="icon-button">{props.leftIcon}</span>
      {props.children}
      <span className="icon-right">{props.rightIcon}</span>
    </a>
  );
}