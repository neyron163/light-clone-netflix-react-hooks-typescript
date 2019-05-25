import React, { useState, useEffect } from "react";
import preview from "../../images/preview.jpg";
import { Header } from "../header/header";
import { DATA_MOVIES } from "../../data/data";
import s from "./home.module.scss";
import { element } from "prop-types";

export const Home: React.FC = (): React.ReactElement => {
  const [result, setResult] = useState<Array<string | boolean>>([]);
  const [movies, setMovies] = useState<Array<string>>([]);
  const [match, setMatch] = useState<boolean>(false);

  useEffect(() => {
    setMovies(
      DATA_MOVIES.map((element): string => element.title)
        .filter((value, index, self): boolean => self.indexOf(value) === index)
        .map((element): string => element.toLowerCase())
    );
  }, []);

  function onChange({ target }: React.ChangeEvent<HTMLInputElement>): void {
    if (target.value === "") {
      setResult([]);
    } else {
      setResult(
        movies
          .map(
            (element): string | boolean =>
              !element.indexOf(target.value.toLowerCase()) && element
          )
          .filter((element): string | boolean => element != false)
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
      <Header onChange={onChange} />
      {length && (
        <div className={s.container}>
          {DATA_MOVIES.map(el =>
            result.map(
              res =>
                el.title.toLowerCase() === res && (
                  <div className={s.item}>
                    <img src={el.preview} alt={preview} />
                  </div>
                )
            )
          )}
        </div>
      )}
      {length !== 0 && match ? (
        <div
          className={s.suppose}
        >{`Sorry we don't have any something like this ${result}`}</div>
      ) : (
        length === 0 && (
          <div>
            <img src={preview} alt={preview} />
            <div className={s.containerAll}>
              {DATA_MOVIES.map(el => (
                <div className={s.item}>
                  <img src={el.preview} alt={preview} />
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};
