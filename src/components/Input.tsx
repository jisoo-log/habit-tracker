import React, { useState } from "react";

type InputProps = {
  addHabit: (name: string) => void;
};

export const Input: React.FC<InputProps> = ({ addHabit }) => {
  const [habitName, setHabitName] = useState("");

  return (
    <div>
      <input
        placeholder="Habit"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
      />
      <button
        onClick={() => {
          addHabit(habitName);
        }}
      >
        Add
      </button>
    </div>
  );
};
