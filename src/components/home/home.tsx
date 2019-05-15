import React, { useState } from "react";
import preview from "../../images/preview.jpg";
import { Header } from "../header/header";
import s from "./home.module.scss";

export const Home: React.FC = () => {
  const [data] = useState(["film", "movie", "cinema"]);
  const [result, setResult] = useState<string>("");

  function onChange({target}: React.ChangeEvent<HTMLInputElement>): void {
    setResult(data.find(el => el.indexOf(target.value) !== -1) || "")
  }
  return (
    <div className={s.home}>
      <Header result={result} onChange={onChange} />
      {!result && <img src={preview} alt={preview} />}
      <div style={{marginTop: "155px"}}>{result}</div>
    </div>
  );
};
