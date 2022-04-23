import React, { useState } from "react";
import Habit, { HabitPropType, THabit } from "./Habit";

const tempHabitArray = [
  { id: 1, name: "Sleeping", count: 0 },
  { id: 2, name: "Writing", count: 0 },
  { id: 3, name: "Hello", count: 0 },
];

const Habits = () => {
  const [habits, setHabits] = useState<HabitPropType[]>(tempHabitArray);

  const handleIncrement = (habit: THabit) => {
    setHabits([...habits]);
  };

  const handleDecrement = (habit: THabit) => {};

  const handleDelete = (habit: THabit) => {};

  return (
    <ul>
      {habits.map((habit) => (
        <Habit
          key={habit.id}
          name={habit.name}
          count={habit.count}
          onIncrement={() => handleIncrement(habit)}
          onDecrement={() => handleDecrement(habit)}
          onDelete={() => handleDelete(habit)}
        />
      ))}
    </ul>
  );
};

export default Habits;
