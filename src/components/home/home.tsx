import React, { useState, useEffect } from "react";
import preview from "../../images/preview.jpg";
import { Header } from "../header/header";
import { DATA_MOVIES } from "../../data/data";
import s from "./home.module.scss";
import Slider from "react-slick";

export const Home: React.FC = (): React.ReactElement => {
  const [result, setResult] = useState<Array<string>>([]);
  const [movies, setMovies] = useState<Array<string>>([]);
  const [match, setMatch] = useState<string>("");
  const [targetResult, setTargetResult] = useState("");

  useEffect(() => {
    setMovies(
      DATA_MOVIES.map((element): string => element.title)
        .filter((value, index, self): boolean => self.indexOf(value) === index)
        .map((element): string => element.toLowerCase())
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
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 7
  };

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
      {length === 0 && match.length > 1 ? (
        <div
          className={s.suppose}
        >{`Sorry we don't have any something like this ${targetResult}`}</div>
      ) : (
        length === 0 && (
          <>
            <img src={preview} alt={preview} />
            <div className={s.containerAll}>
              <Slider {...settings}>
                {DATA_MOVIES.map(el => (
                  <div className={s.item}>
                    <img src={el.preview} alt={preview} />
                  </div>
                ))}
              </Slider>
            </div>
          </>
        )
      )}
    </div>
  );
};
