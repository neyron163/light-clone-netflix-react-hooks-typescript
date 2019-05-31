import React from "react";
import s from "./sliderSection.module.scss";
import Slider from "react-slick";
import { moviesTypes } from "../../types";

interface PropsType {
  settings: {
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
  };
  data: any;
}

export const SliderSection = ({
  settings,
  data
}: PropsType): React.ReactElement => (
  <div className={s.containerAll}>
    <Slider {...settings}>
      {data.map((element: moviesTypes) => (
        <div className={s.item}>
          <img src={element.preview} alt={element.preview} />
        </div>
      ))}
    </Slider>
  </div>
);
