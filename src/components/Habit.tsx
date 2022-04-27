import React from "react";

export type THabit = {
  id?: number;
  name: string;
  count: number;
};

export type HabitPropType = {
  habit: THabit;
  onIncrement: (habit: THabit) => void;
  onDecrement: () => void;
  onDelete: () => void;
};

const Habit = (props: HabitPropType) => {
  const { habit, onIncrement, onDecrement, onDelete } = props;
  const { name, count } = habit;

  return (
    <li className="habit">
      <span className="habit-name">{name}</span>
      <span className="habit-count">{count}</span>
      <button
        className="habit-button habit-increase"
        onClick={() => onIncrement(habit)}
      >
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
