import React, { useState, useEffect } from "react";

import style from "./tagSelector.module.css";

const testOptions = [
  { value: "kiscica", id: 0 },
  { value: "kiskutya", id: 1 },
  { value: "butor", id: 2 },
  { value: "kispapagaj", id: 3 },
  { value: "asztal", id: 4 },
];

export const TagSelect = () => {
  const [isOpen, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [options, setOptions] = useState(testOptions);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      setOpen(false);
    });
  });

  function handleInputChange(value) {
    setSearch(value);
  }

  function handleOnClickInput() {
    setOpen(!isOpen);
  }

  function removeOption(option) {
    const optionId = option.getAttribute("data-optionid");
    const newOptions = options.filter(
      (option) => option.id !== parseInt(optionId, 10)
    );
    setOptions(newOptions);
  }

  return (
    <div className={style["wrapper"]}>
      <label>
        Tag:
        <input
          className={style["input"]}
          value={search}
          onChange={(e) => handleInputChange(e.target.value)}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            handleOnClickInput(e);
          }}
        />
      </label>
      {isOpen && (
        <ul className={style["options-wrapper"]}>
          {options
            .filter((option) => option.value.indexOf(search) >= 0)
            .map((option) => (
              <li key={option.id}>
                <span
                  className={style["option"]}
                  onClick={() => handleInputChange(option.value)}
                >
                  {option.value}
                </span>
                <span
                  data-optionid={option.id}
                  className={style["remove"]}
                  onClick={(e) => removeOption(e.target)}
                >
                  törlés
                </span>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};
