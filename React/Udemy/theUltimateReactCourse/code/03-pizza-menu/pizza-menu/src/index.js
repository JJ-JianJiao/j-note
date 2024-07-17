import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function App() {
    return (
        <div className="container">
            <Header />
            <Menu pizzaData={pizzaData} />
            <Footer />
        </div>
    );
}




function Header() {
    // const styles = {color:'red', fontSize:"56px", textTransform:"uppercase"};
    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>
        </header>
    );
}

function Menu() {
    // console.log(props.pizzaData);
    // let pizzas = [];
    // props.pizzaData.forEach((e) => {
    //     pizzas.push(<Pizza name={e.name} ingredients={e.ingredients} photoName={e.photoName}
    //         price={e.price} />);
    // })
    // console.log(pizzas)
    return (
        <main className="menu">
            <h2>Our menu</h2>

            <ul className="pizzas">
                {pizzaData.map(pizza => <Pizza pizzaObj={pizza} key={pizza.name}/>)}
            </ul>

            {/* <div className="pizzas">
                {pizzas}
            </div> */}
        </main>
    );
}
function Pizza(props) {
    return (
        <li className="pizza">
            <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
            <div>
                <h3>{props.pizzaObj.name}</h3>
                <p>{props.pizzaObj.ingredients}</p>
                <span>{props.pizzaObj.price + 3}</span>
            </div>
        </li>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    let openMsg = "";
    if (hour >= openHour && hour <= closeHour)
        openMsg = "We're currently open";
    else
        openMsg = "Sorry we're closed";

    return <footer className="footer">{new Date().toLocaleTimeString()} {openMsg}</footer>
    // return React.createElement('footer',null,"We're currently open!");
}

//React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    //strict mode will render twice in order to find certain bugs and check outdated API during development
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

//Rect before 18
// React.render(<App />);
