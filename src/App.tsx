import React, { useState, useEffect } from "react";
import "./app.css";
import { THabit } from "./components/Habit";
import Habits from "./components/Habits";
import { Input } from "./components/Input";
import { NavBar } from "./components/NavBar";

const tempHabitArray = [
  { id: 1, name: "Sleeping", count: 0 },
  { id: 2, name: "Writing", count: 0 },
  { id: 3, name: "Hello", count: 0 },
];

function App() {
  const [habits, setHabits] = useState<THabit[]>(tempHabitArray);
  const [habitCount, setHabitCount] = useState(0);

  useEffect(() => {
    const existHabit = habits.filter((item) => item.count > 0);
    setHabitCount(existHabit.length);
  }, [habits]);

  const addHabit = (name: string) => {
    let newId: number;
    if (habits.length > 0) {
      newId = (habits[habits.length - 1].id as number) + 1;
    } else {
      newId = 1;
    }
    const newHabit = { id: newId, name, count: 0 };
    setHabits([...habits, newHabit]);
  };

  const resetHabit = () => {
    const tmpHabits = habits.map((item) => {
      return { ...item, count: 0 };
    });
    setHabits(tmpHabits);
  };

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
    <div>
      <NavBar habitCount={habitCount} />
      <Input addHabit={addHabit} />
      <Habits
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
      />
      <button onClick={resetHabit}>Reset All</button>
    </div>
  );
}

export default App;
