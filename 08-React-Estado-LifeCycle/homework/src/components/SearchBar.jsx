import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  function onHandleInputChange(event) {
    setInput(event.target.value);
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(input);
        setInput("");
      }}
    >
      <input
        onChange={onHandleInputChange}
        className="input"
        type="text"
        value={input}
        placeholder="Ciudad..."
      />
      <input type="submit" value="Agregar" className="submit" />
    </form>
  );
}
