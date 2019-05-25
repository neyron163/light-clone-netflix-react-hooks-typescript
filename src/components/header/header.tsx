import React from "react";
import { Search } from "../search/search";
import logo from "../../images/logo.svg";
import { Menu } from "../menu/menu";
import s from "./header.module.scss";

interface PropsType {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export const Header = ({ onChange }: PropsType) => {
  return (
    <div className={s.header}>
      <div className={s.menuBox}>
        <a href="/">
          <img src={logo} alt="logo" className={s.logo} />
        </a>
        <Menu />
      </div>
      <Search onChange={onChange} />
    </div>
  );
};
