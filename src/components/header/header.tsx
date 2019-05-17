import React from "react";
import { Search } from "../search/search";
import logo from "../../images/logo.svg";
import { Menu } from "../menu/menu";
import s from "./header.module.scss";

interface PropsType {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  result: string;
}

export const Header = ({ onChange, result }: PropsType) => {
  return (
    <div className={s.header}>
      <div className={s.menuBox}>
        <a href="/">
          <img src={logo} alt="logo" className={s.logo} />
        </a>
        <Menu />
      </div>
      <Search result={result} onChange={onChange} />
    </div>
  );
};
