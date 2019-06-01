import React, { ReactElement } from "react";
import Slider from "react-slick";
import { moviesTypes, settings } from "../../types";

import s from "./sliderSection.module.scss";

interface PropsType {
  settings: settings;
  data: Array<moviesTypes>;
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
