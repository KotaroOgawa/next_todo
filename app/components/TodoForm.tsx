import React, { FC } from "react";
import { UseFormReturn } from "react-hook-form";
import { TodoFormValues } from "../types/todoForm";
import { FormTextInput } from "./FormTextInput";
import { Button } from "./Button";

interface TodoFormProps {
  todoForm: UseFormReturn<TodoFormValues, any, undefined>;
  onSubmit: (data: TodoFormValues) => void;
}

export const TodoForm: FC<TodoFormProps> = ({ todoForm, onSubmit }) => {
  const { register, handleSubmit } = todoForm;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <FormTextInput register={{ ...register("todoText") }} />
      <Button type="submit" color={"bg-blue-500"}>
        追加
      </Button>
    </form>
  );
};
