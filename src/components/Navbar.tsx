import React from 'react';

export default function Navbar(props: React.PropsWithChildren<any>) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {props.children}
      </ul>
    </nav>
  )
}