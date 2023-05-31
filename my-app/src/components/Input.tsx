import React, { KeyboardEvent, KeyboardEventHandler } from "react";
import { InputEventType } from "../App";

interface InputProps {
  handleChangeInput: (e: InputEventType) => void;
  handleAddTodoList: () => void;
  inputValue: string;
}

const Input = ({
  handleChangeInput,
  handleAddTodoList,
  inputValue,
}: InputProps) => {
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTodoList();
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChangeInput}
        value={inputValue}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleAddTodoList}>submit</button>
    </div>
  );
};

export default Input;
