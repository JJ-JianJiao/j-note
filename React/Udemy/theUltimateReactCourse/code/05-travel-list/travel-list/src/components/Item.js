export function Item({ item, onDeleteItem, onChckedItem }) {
  return (
    <li>
      <input type="checkbox" value={item.packed} checked={item.packed} onChange={() => onChckedItem(item.id)}></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
