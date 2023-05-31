import React from "react";
import { ItemType } from "../App";

interface ListProps {
  itemList: ItemType[];
  handleItemClick: (id: string) => void;
  handleItemDelete: (id: string) => void;
}

const List = ({ itemList, handleItemClick, handleItemDelete }: ListProps) => {
  return (
    <div>
      {itemList.map((item) => {
        return (
          <div className="item">
            <ul
              key={item.id}
              className={item.checked ? "underline" : ""}
              onClick={() => handleItemClick(item.id)}
            >
              {item.title}
            </ul>
            <button onClick={() => handleItemDelete(item.id)}>삭제 </button>
          </div>
        );
      })}
    </div>
  );
};

export default List;
