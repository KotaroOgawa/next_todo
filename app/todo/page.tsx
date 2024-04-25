"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { InputTodo } from "./components/InputTodo";
import { DoneTodos } from "./components/DoneTodos";

const Page = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{ todoText: string }>();
  const [doneTodos, setDoneTodos] = useState<string[]>([]);

  {
    /* react-hook-formを使う前 */
  }
  //   const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
  //     setTodoText(event.target.value);
  //   const onClickAdd = () => {
  //     if (todoText === "") return;
  //     const newTodos = [...incompleteTodos, todoText];
  //     setIncompleteTodos(newTodos);
  //     setTodoText("");
  //   };

  /**
   * 追加ボタン押下時の処理
   */
  const onSubmit = (data: { todoText: string }) => {
    if (data.todoText === "") return;
    const newTodos = [...doneTodos, data.todoText];
    setDoneTodos(newTodos);
    reset(); // フォームのリセット
  };

  /**
   * 削除ボタン押下時の処理
   * */
  const onClickDel = (index: number) => {
    const newTodos = [...doneTodos];
    newTodos.splice(index, 1);
    setDoneTodos(newTodos);
  };

  return (
    <div className="bg-blue-500 min-h-screen">
      <section className="min-h-screen w-1/4 bg-orange-500 mx-auto">
        <div className="p-8">
          <h2 className="font-bold">Todo</h2>
          {/* react-hook-formを使う前 */}
          {/* <div>
        <input type="text" value={todoText} onChange={onChange} />
        <button onClick={() => onClickAdd()}>追加</button>
      </div> */}
          <InputTodo
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
          />
          <DoneTodos todos={doneTodos} onClickDel={onClickDel} />
        </div>
      </section>
    </div>
  );
};

export default Page;
