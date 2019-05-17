import React, { useState, useEffect } from "react";
import preview from "../../images/preview.jpg";
import { Header } from "../header/header";
import { DATA_MOVIES } from "../../data/data";
import s from "./home.module.scss";

export const Home: React.FC = () => {
  const [result, setResult] = useState<string>("");
  const [movies, setMovies] = useState<Array<string>>([]);
  const [match, setMatch] = useState<boolean>(false);

  useEffect(() => {
    const sort = DATA_MOVIES.map(el => el.title)
      .filter((value, index, self) => self.indexOf(value) === index)
      .map(el => el.toLowerCase());

    setMovies(sort);
  }, []);

  function onChange({ target }: React.ChangeEvent<HTMLInputElement>): void {
    if (target.value === "") {
      setResult("");
    } else {
      setResult(
        movies.find(el => el.indexOf(target.value.toLowerCase()) !== -1) ||
          target.value
      );
      setMatch(
        movies.find(el => el.indexOf(target.value.toLowerCase()) !== -1)
          ? false
          : true
      );
    }
  }
  const length = result.length;
  return (
    <div className={s.home}>
      <Header result={result} onChange={onChange} />
      {DATA_MOVIES.map(
        el =>
          el.title.toLowerCase() === result && (
            <img src={el.preview} alt={preview} />
          )
      )}
      {length !== 0 && match ? (
        <div
          className={s.suppose}
        >{`Sorry we don't have any something like this ${result}`}</div>
      ) : (
        length === 0 && <img src={preview} alt={preview} />
      )}
    </div>
  );
};
