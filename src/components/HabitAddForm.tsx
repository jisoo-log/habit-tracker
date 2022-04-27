import React, { useState } from "react";

type HabitAddFormProps = {
  onAdd: (name: string) => void;
};

export const HabitAddForm: React.FC<HabitAddFormProps> = ({ onAdd }) => {
  const [input, setInput] = useState("");
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (input === "") return;
    onAdd(input);
    setInput("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <input
        type="text"
        className="add-input"
        placeholder="habit"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button className="add-button">Add</button>
    </form>
  );
};
