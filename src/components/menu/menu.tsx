import React from "react";

import s from "./menu.module.scss";

export const Menu: React.FC = () => {
  return (
    <nav className={s.menu}>
      <ul className={s.list}>
        <li className={s.active}>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#">Tv Shows</a>
        </li>
        <li>
          <a href="#">Movies</a>
        </li>
        <li>
          <a href="#">Recently Added</a>
        </li>
        <li>
          <a href="#">My list</a>
        </li>
      </ul>
    </nav>
  );
};
