import { isArray } from "lodash";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

export default function MenuItem({ props, closeMenu }) {
  const [showMenu, setShowMenu] = useState(false);

  const showsubnav = () => {
    setShowMenu(!showMenu);
  };

  const showActive = classNames("ak-munu_dropdown_toggle", {
    active: showMenu,
  });

  const showActiveParent = classNames("menu-item-has-children", {
    active: showMenu,
  });

  const hasChildren = isArray(props.children);

  return (
    <li className={showActiveParent}>
      <Link
        to={props.link}
        onClick={() => {
          if (!hasChildren) closeMenu();  // Close for normal items
        }}
      >
        {props.title}
      </Link>

      {hasChildren && (
        <>
          <ul>
            {props.children.map((child) => (
              <li key={child.key}>
                <Link
                  to={child.link}
                  onClick={closeMenu} // Close for child clicks too
                >
                  {child.title}
                </Link>
              </li>
            ))}
          </ul>

          <span className={showActive} onClick={showsubnav}></span>
        </>
      )}
    </li>
  );
}
