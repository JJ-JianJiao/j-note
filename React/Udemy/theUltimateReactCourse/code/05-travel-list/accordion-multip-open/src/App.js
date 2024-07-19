import "./styles.css";
import { useState } from "react";

const faqs = [
  {
    title: "1Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "2How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "3Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  const [openNum, setOpenNum] = useState(-1);
  function handleOpenNum(num) {
    if (num === openNum) setOpenNum(-1);
    else setOpenNum((o) => (o = num));
  }
  return (
    <div className="accordion">
      {faqs.map((item, index, _) => (
        <AccoridonItem
          title={item.title}
          index={index}
          key={item.title}
          openNum={openNum}
          onClick={handleOpenNum}
        >
          <p>{item.text}</p>
        </AccoridonItem>
      ))}
      <AccoridonItem
        title={"test children props"}
        index={99}
        key={"test children props"}
        openNum={openNum}
        onClick={handleOpenNum}
      >
        <ul>
          <li>pturi velit laborum, perspiciatis nemo</li>
          <li>r recusandae dignissimos fuga volupt</li>
          <li>orem ipsum dolor sit amet consect</li>
          <li>ipisicing elit. Accusantium, quaer</li>
        </ul>
      </AccoridonItem>
    </div>
  );
}

function AccoridonItem({ title, index, openNum, onClick, children }) {
  const isOpen = openNum === index;
  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => onClick(index)}
    >
      <p className="number">{index < 9 ? "0" + (index + 1) : index + 1}</p>
      <h1 className="title text">{title}</h1>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
