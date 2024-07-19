export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🍵</em>
      </footer>
    );

  const numOfItems = items.length;
  // const packedItems = items.reduce((acc, cur) => {
  //   if (cur.packed)
  //     return acc + 1;
  //   return acc;
  // }, 0);
  const packedItems = items.filter(item => item.packed).length;

  return <footer className="stats">
    <em>
      {packedItems === numOfItems && "You got everything! Ready to go ✈️"}
      {packedItems !== numOfItems && `💼 You have ${numOfItems} items on your list, and you already packed ${packedItems}  (${(packedItems / numOfItems).toFixed(2) * 100} %)`}
    </em>
  </footer>;
}
