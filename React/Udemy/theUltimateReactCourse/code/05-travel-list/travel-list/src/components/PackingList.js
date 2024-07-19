import { useState } from "react";
import { Item } from "./Item";

export default function PackingList({ items, onDeleteItem, onChckedItem, onClearAll }) {
  const [sortType, setSortType] = useState("input");

  let sortedItems;

  if (sortType === "input")
    sortedItems = items;
  if (sortType === "description")
    sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description)
    );
  if (sortType === "packed")
    sortedItems = items.slice().sort((a, b) => b.packed - a.packed);

  return (
    <div className="list">
      <ul>
        {sortedItems.map(item => <Item item={item} key={item.id} onChckedItem={onChckedItem} onDeleteItem={onDeleteItem} />)}
      </ul>
      <div>
        <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearAll}>Clear</button>
      </div>
    </div>
  );
}
