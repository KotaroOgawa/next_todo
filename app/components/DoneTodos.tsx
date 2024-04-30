import React from "react";

interface Props {
  todos: string[];
  onClickDel: (index: number) => void;
}

export const DoneTodos: React.FC<Props> = (props) => {
  return (
    <ul className="mt-4">
      {props.todos.map((todo, index) => (
        <li key={index} className=" bg-white mt-4 first:mt-0 rounded-md">
          <div className="flex justify-between items-center">
            <p className="p-2 text-sm ">{todo}</p>
            <div className="p-2">
              <button
                className="bg-red-500 text-white  rounded-md px-3 py-1 text-sm"
                onClick={() => props.onClickDel(index)}
              >
                削除
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
