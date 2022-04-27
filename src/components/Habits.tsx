import React from "react";
import Habit, { THabit } from "./Habit";
import { HabitAddForm } from "./HabitAddForm";

type HabitsProps = {
  habits: THabit[];
  onIncrement: (habit: THabit) => void;
  onDecrement: (habit: THabit) => void;
  onDelete: (habit: THabit) => void;
  onAdd: (name: string) => void;
};

const Habits: React.FC<HabitsProps> = ({
  habits,
  onIncrement,
  onDecrement,
  onDelete,
  onAdd,
}) => {
  return (
    <>
      <HabitAddForm onAdd={onAdd} />
      <ul>
        {habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={() => onIncrement(habit)}
            onDecrement={() => onDecrement(habit)}
            onDelete={() => onDelete(habit)}
          />
        ))}
      </ul>
    </>
  );
};

export default Habits;
