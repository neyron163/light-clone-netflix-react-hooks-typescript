import React from "react";
import { Search } from "../search/search";
import logo from "../../images/logo.svg";
import s from "./header.module.scss";

interface PropsType {
  onChange: any;
  result: string;
}

export const Header = ({ onChange, result }: PropsType) => {
  return (
    <div className={s.header}>
      <a href="/">
        <img src={logo} alt="logo" className={s.logo} />
      </a>
      <Search result={result} onChange={onChange} />
    </div>
  );
};
