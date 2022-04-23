import React from "react";

export type THabit = {
  id?: number;
  name: string;
  count: number;
};

export type HabitPropType = THabit & {
  onIncrement?: () => void;
  onDecrement?: () => void;
  onDelete?: () => void;
};

const Habit = (habit: HabitPropType) => {
  const { name, count, onIncrement, onDecrement, onDelete } = habit;

  return (
    <li className="habit">
      <span className="habit-name">{name}</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={onIncrement}>
        <i className="fa-solid fa-square-plus"></i>
      </button>
      <button className="habit-button habit-decrease" onClick={onDecrement}>
        <i className="fa-solid fa-square-minus"></i>
      </button>
      <button className="habit-button habit-delete" onClick={onDelete}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </li>
  );
};

export default Habit;
