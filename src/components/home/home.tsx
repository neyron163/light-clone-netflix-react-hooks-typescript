import React, { useState, useEffect, ReactElement, Fragment } from "react";
import preview from "../../images/preview.webp";
import logo from "../../images/logo.webp";
import { Header } from "../header/header";
import { DATA_MOVIES } from "../../data/data";
import { moviesTypes, settings } from "../../types";
import { SliderSection } from "../sliderSection/sliderSection";

import s from "./home.module.scss";

export const Home: React.FC = (): React.ReactElement => {
  const [result, setResult] = useState<Array<string>>([]);
  const [movies, setMovies] = useState<Array<string>>([]);
  const [match, setMatch] = useState<string>("");
  const [targetResult, setTargetResult] = useState<string>("");

  useEffect((): void => {
    setMovies(
      DATA_MOVIES.map((element: moviesTypes): string => element.title)
        .filter(
          (value: string, index: number, self: Array<string>): boolean =>
            self.indexOf(value) === index
        )
        .map((element: string): string => element.toLowerCase())
    );
  }, []);

  function onChange({ target }: React.ChangeEvent<HTMLInputElement>): void {
    const value = target.value;

    if (value === "") {
      setResult([]);
    } else {
      setResult(
        movies
          .map(
            (element: string): string =>
              !element.indexOf(value.toLowerCase()) ? element : ""
          )
          .filter((element: string): string | boolean => element !== "")
      );
      setTargetResult(value);
      setMatch(value);
    }
  }

  const length = result.length;
  const settings: settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 7
  };

  return (
    <div className={s.home}>
      <Header onChange={onChange} />
      {length ? (
        <div className={s.container}>
          {DATA_MOVIES.map((element: moviesTypes) =>
            result.map(
              (res: string): ReactElement | boolean =>
                element.title.toLowerCase() === res && (
                  <div className={s.item}>
                    <img src={element.preview} alt={preview} />
                  </div>
                )
            )
          )}
        </div>
      ) : null}
      {length === 0 && match.length > 1 ? (
        <div
          className={s.suppose}
        >{`Sorry we don't have any something like this ${targetResult}`}</div>
      ) : (
        length === 0 && (
          <Fragment>
            <img className={s.preview} src={preview} alt={preview} />
            <img className={s.logo} src={logo} alt={logo} />
            <SliderSection settings={settings} data={DATA_MOVIES} />
            <SliderSection settings={settings} data={DATA_MOVIES} />
          </Fragment>
        )
      )}
    </div>
  );
};
