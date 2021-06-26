import React, { useState } from "react";

import Navbar from "./components/Navbar";
import NavbarItem from "./components/NavbarItem";
import SearchBar from "./components/SearchBar";
import BrandIcon from "./components/BrandIcon";
import { DropdownMenu, DropdownItem } from "./components/DropdownMenu";
import { CSSTransition } from "react-transition-group";

function App() {
  const [activeDirectoryMenu, setActiveDirectoryMenu] = useState("main");

  const initialDirectories = [
    <DropdownItem onClickHandler={() => setActiveDirectoryMenu("directory")} leftIcon="📁">
      Directory 1
    </DropdownItem>,
    <DropdownItem onClickHandler={() => setActiveDirectoryMenu("directory")} leftIcon="📁">
      Directory 2
    </DropdownItem>,
  ];

  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const [directories, setDirectories] = useState(initialDirectories);

  function calcHeight(el: any) {
    setMenuHeight(el.offsetHeight);
  }

  function addDirectory() {
    const directoryIndex = directories.length + 1;

    setDirectories(prevArray => [...prevArray, <DropdownItem leftIcon="📁" onClickHandler={() => setActiveDirectoryMenu(`directory`)}>Directory {directoryIndex}</DropdownItem>]);
  }

  return (
    <>
      <Navbar>
        <BrandIcon />
        <SearchBar />
        <NavbarItem icon="🗂️">
          <DropdownMenu menuHeight={menuHeight} activeMenu={activeDirectoryMenu}>
            <CSSTransition in={activeDirectoryMenu == "main"} unmountOnExit timeout={500} classNames="menu-primary" onEnter={calcHeight}>
              <div className="menu">
                {directories.map((directory) => directory)}
                <DropdownItem
                  onClickHandler={(el: any) => {
                    addDirectory();
                    calcHeight(el);
                  }}
                  leftIcon="➕"
                >
                  Add Directory
                </DropdownItem>
              </div>
            </CSSTransition>

            <CSSTransition in={activeDirectoryMenu === "directory"} unmountOnExit timeout={500} classNames="menu-secondary" onEnter={calcHeight}>
              <div className="menu">
                <DropdownItem onClickHandler={() => setActiveDirectoryMenu("main")} leftIcon="←" />
              </div>
            </CSSTransition>
          </DropdownMenu>
        </NavbarItem>
        <NavbarItem icon="🌛" />
        <NavbarItem icon="🔺">
          <DropdownMenu menuHeight={menuHeight} activeMenu={activeMenu}>
            <CSSTransition in={activeMenu == "main"} unmountOnExit timeout={500} classNames="menu-primary" onEnter={calcHeight}>
              <div className="menu">
                <DropdownItem onClickHandler={() => setActiveMenu("settings")} leftIcon="💬">
                  Message Settings
                </DropdownItem>
                <DropdownItem onClickHandler={() => setActiveMenu("settings")} leftIcon="📊">
                  Statistics
                </DropdownItem>
                <DropdownItem onClickHandler={() => setActiveMenu("settings")} leftIcon="⚙️">
                  General Settings
                </DropdownItem>
              </div>
            </CSSTransition>

            <CSSTransition in={activeMenu === "settings"} unmountOnExit timeout={500} classNames="menu-secondary" onEnter={calcHeight}>
              <div className="menu">
                <DropdownItem leftIcon="🔕">Disable Notifications</DropdownItem>
                <DropdownItem onClickHandler={() => setActiveMenu("main")} leftIcon="←" />
              </div>
            </CSSTransition>
          </DropdownMenu>
        </NavbarItem>
      </Navbar>

      <div className="content">
        <h1>Body</h1>
        Denn natürlich müssen wir darüber reden Dass der Bundespräsident persönlich eine Veranstaltung empfiehlt Auf der Sänger grölen Wie gerne sie
        wörtlich 'Messerklingen in Journalistenfressen rammen' Wie gern sie sich an brennenden Deutschlandfahnen wärmen und Christliche Bibeln ins
        Feuer hinterhеr werfen Wie gеrne sie – hören Sie doch zu Frau Göring-Eckardt – wie gerne sie schwangere Frauen in den Bauch Treten und sich
        dann an der Fehlgeburt vergehen Das ist so gewaltverherrlichend Das ist so deutschfeindlich, das ist so christenfeindlich ..."
      </div>
    </>
  );
}

export default App;
