import React, { useState } from "react";

export default function ARUarray() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    const newItem = { id: items.length, value: Math.random(10) * 100 };
    setItems([...items, newItem]);
    console.log(newItem);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
    console.log(items);
  };

  const updateItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, value: Math.random() * 100 } : item
      )
    );
    console.log(items);
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.value.toFixed(2)}
            <button onClick={() => updateItem(item.id)}>Update</button>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
