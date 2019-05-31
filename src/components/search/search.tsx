import React, { useState, useCallback } from "react";
import magnifier from "../../images/magnifier.svg";
import classNames from "classnames";
import s from "./search.module.scss";

interface PropsType {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export const Search = ({ onChange }: PropsType): React.ReactElement => {
  const [visible, setVisible] = useState<boolean>(false);

  const onClick = useCallback((): void => {
    setVisible(!visible);
  }, [visible]);

  return (
    <div className={s.search}>
      <button
        data-testid="button"
        className={s.magnifierButton}
        onClick={onClick}
      >
        <div className={s.magnifier}>
          <img src={magnifier} alt="magnifier" />
        </div>
      </button>
      <div
        data-testid="animate"
        className={classNames(s.animate, { [s.visible]: visible })}
      >
        <input
          data-testid="input"
          className={s.input}
          type="text"
          onChange={e => onChange(e)}
          placeholder="Title, people, genres"
        />
      </div>
    </div>
  );
};
