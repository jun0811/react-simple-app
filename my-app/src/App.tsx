import React, { ChangeEvent, useState } from "react";
import "./App.css";

import { Input, List } from "./components/index";

export type InputEventType = ChangeEvent<HTMLInputElement>;
export type ItemType = {
  id: string;
  title: string;
  checked: boolean;
};

const newID = () => {
  return Math.random().toString(36).substr(2, 16);
};

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [todoList, setTodoList] = useState<ItemType[]>([]);

  const handleChangeInput = (e: InputEventType) => {
    setInputValue(e.target.value);
  };

  const handleAddTodoList = () => {
    if (inputValue) {
      setTodoList((prev) => {
        return [
          ...prev,
          {
            id: newID(),
            title: inputValue,
            checked: false,
          },
        ];
      });
      setInputValue("");
    }
  };

  const handleItemClick = (id: string) => {
    setTodoList((prev) => {
      const newItemList = prev.map((item) => {
        if (item.id === id) {
          return { ...item, checked: !item.checked };
        }
        return item;
      });
      return newItemList;
    });
  };

  const handleItemDelete = (id: string) => {
    setTodoList((itemList) => {
      const newItemList = itemList.filter((item) => {
        return item.id !== id;
      });
      return newItemList;
    });
  };

  return (
    <div className="App">
      <Input
        inputValue={inputValue}
        handleChangeInput={handleChangeInput}
        handleAddTodoList={handleAddTodoList}
      />
      <br />
      <List
        itemList={todoList}
        handleItemClick={handleItemClick}
        handleItemDelete={handleItemDelete}
      />
    </div>
  );
}

export default App;
