import React, { Fragment } from "react";
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

    const pizzas = pizzaData;
    return (
        <main className="menu">
            <h2>Our menu</h2>

            {pizzas.length > 0 ? (
                <Fragment>
                    <p>
                        Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.
                    </p>
                    <ul className="pizzas">
                        {pizzas.map(pizza => <Pizza pizzaObj={pizza} key={pizza.name} />)}
                    </ul>
                </Fragment>
            ) : (<p>We are still working on our menu. Please come back later 😘</p>)}
            {/* <div className="pizzas">
                {pizzas}
            </div> */}
        </main>
    );
}
function Pizza({pizzaObj,...props}) {
    return (
        <li className={`pizza ${pizzaObj.soldOut?"sold-out":""}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.soldOut ? "Sold out" : pizzaObj.price}</span>
            </div>
        </li>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    let isOpen = hour >= openHour && hour <= closeHour;
    // if (hour >= openHour && hour <= closeHour)
    //     openMsg = "We're currently open";
    // else
    //     openMsg = "Sorry we're closed";

    return (
        <footer className="footer">
            {isOpen ?  <Order closeHour={closeHour}/>:
               ( <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00.</p>
            )}
        </footer>
    );
    // return React.createElement('footer',null,"We're currently open!");
}

function Order({closeHour,...props}) {
    return (
        <div className="order">
            <p>We're open untill {closeHour}:00. Come visit us or order online.</p>
            <button className="btn">Order</button>
        </div>
    );
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
