import React, { ReactElement } from "react";
import s from "./sliderSection.module.scss";
import Slider from "react-slick";
import { moviesTypes, settings } from "../../types";

interface PropsType {
  settings: settings;
  data: any;
}

export const SliderSection = ({ settings, data }: PropsType): ReactElement => (
  <div className={s.sliderSection}>
    <Slider {...settings}>
      {data.map(
        (element: moviesTypes): ReactElement => (
          <div className={s.item}>
            <img src={element.preview} alt={element.preview} />
          </div>
        )
      )}
    </Slider>
  </div>
);
