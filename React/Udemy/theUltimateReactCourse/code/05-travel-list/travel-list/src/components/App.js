import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 3, packed: true },
];

function App() {
  const [items, setItems] = useState(initialItems);

  function handleClearAll() {

    const confirmed = window.confirm('Are you sure you want to delete all items?');

    if (confirmed) setItems(i => i = []);
  }

  function handleAddItems(item) {
    setItems(i => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems(items => items.filter(i => i.id !== id));
  }
  function handleCheckedItem(id) {
    setItems(items => items.map(
      (i) => {

        if (i.id === id) {
          // console.log("reset packed");
          // i.packed = !checkedState;   //Do not want to change the value, create a new obj.
          return { ...i, packed: !i.packed };
        }
        // console.log(i);
        return i;
      }));
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onChckedItem={handleCheckedItem} onClearAll={handleClearAll} />
      <Stats items={items} />
    </div>
  );
}

export default App;