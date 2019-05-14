import React, { useState } from "react";
import preview from "../../images/preview.jpg";
import { Header } from "../header/header";
import s from "./home.module.scss";

export const Home: React.FC = () => {
  const [data] = useState(["film", "movie", "cinema"]);
  const [result, setResult] = useState<string>("");

  function onChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const value = e.target.value;

    if (value.length !== 0) {
      const array = data.find(el => el.indexOf(value) !== -1);
      setResult(array ? array : value);
    } else {
      setResult("");
    }
  }
  return (
    <div className={s.home}>
      <Header result={result} onChange={onChange} />
      {!result && <img src={preview} alt={preview} />}
      <div style={{marginTop: "155px"}}>{result}</div>
    </div>
  );
};
