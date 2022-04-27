import React from "react";
import Habit, { THabit } from "./Habit";

type HabitsProps = {
  habits: THabit[];
  setHabits: (habits: THabit[]) => void;
};

const Habits: React.FC<HabitsProps> = ({ habits, setHabits }) => {
  const handleIncrement = (habit: THabit) => {
    const tmpHabits = [...habits];
    const index = tmpHabits.indexOf(habit);
    tmpHabits[index].count++;
    setHabits(tmpHabits);
  };

  const handleDecrement = (habit: THabit) => {
    const tmpHabits = [...habits];
    const index = tmpHabits.indexOf(habit);
    const count = tmpHabits[index].count - 1;
    tmpHabits[index].count = count > 0 ? count : 0;
    setHabits(tmpHabits);
  };

  const handleDelete = (habit: THabit) => {
    const tmpHabits = habits.filter((item) => item.id !== habit.id);
    setHabits(tmpHabits);
  };

  return (
    <ul>
      {habits.map((habit) => (
        <Habit
          key={habit.id}
          habit={habit}
          onIncrement={() => handleIncrement(habit)}
          onDecrement={() => handleDecrement(habit)}
          onDelete={() => handleDelete(habit)}
        />
      ))}
    </ul>
  );
};

export default Habits;
