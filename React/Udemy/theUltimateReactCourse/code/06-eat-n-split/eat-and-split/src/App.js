import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];


function Button({ onClick, children }) {
  return <button className="button" onClick={onClick}>{children}</button>
}


export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friendsArr, setFriendsArr] = useState(initialFriends);

  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend(s => s = !s);
    setSelectedFriend(null);
  }

  function handdleAddFriend(friend) {
    setFriendsArr(f => [...f, friend]);
    setShowAddFriend(false);

  }

  function handleSelection(friend) {
    if (selectedFriend?.id === friend.id)
      setSelectedFriend(null);
    else
      setSelectedFriend(friend);
    setShowAddFriend(false);
  }

  function handleSplitBill(value){
    setFriendsArr(friendsArr=>friendsArr.map(friend => friend.id === selectedFriend.id ? {...friend, balance:friend.balance  + value}:friend));
    setSelectedFriend(null);    
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friendsArr} selectedFriend={selectedFriend} onSelection={handleSelection} />
        {showAddFriend && <FormAddFriend onAddFriend={handdleAddFriend} />}
        <Button onClick={handleShowAddFriend}>{showAddFriend ? `Close` : `Add friend`}</Button>
      </div>

      {selectedFriend && <FormSplitBill key={selectedFriend.id} selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />}
    </div>
  );
}


function FriendsList({ friends, selectedFriend, onSelection }) {
  return <ul>
    {friends.map(friend => <Friend friend={friend} key={friend.id} selectedFriend={selectedFriend} onSelection={onSelection} />)}
  </ul>;
}

function Friend({ friend, selectedFriend, onSelection }) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? 'selected' : ""}>
      <img src={friend.image} alt={friend.name}></img>
      <h3>{friend.name}</h3>
      {friend.balance < 0 && <p className="red">You owe {friend.name} ${Math.abs(friend.balance)} </p>}
      {friend.balance > 0 && <p className="green">{friend.name} owe you ${Math.abs(friend.balance)} </p>}
      {friend.balance === 0 && <p>You and your friend are even</p>}
      <Button onClick={e => onSelection(friend)}>{isSelected ? `Close` : `Select`}</Button>
    </li>
  );
}

function FormAddFriend({ onAddFriend }) {

  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?u=${id}`,
      balance: 0
    }
    onAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return <form className="form-add-friend" onSubmit={handleSubmit}>
    <label>🫂Friend name</label>
    <input type="text" value={name} onChange={e => setName(e.target.value)} />

    <label>📸Image URL</label>
    <input type="text" value={image} onChange={e => setImage(e.target.value)} />

    <Button>Add</Button>
  </form>
}

function FormSplitBill({ selectedFriend , onSplitBill}) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const friendBill = bill ? bill - paidByUser : "";

  function handleSubmit(e){
    e.preventDefault();
    if(!bill || !paidByUser) return;

    onSplitBill(whoIsPaying === 'user' ? friendBill : -paidByUser);
  }

  return <form className="form-split-bill" onSubmit={handleSubmit}>
    <h2>Split a bill with {selectedFriend.name}</h2>
    <label>💰 Bill value</label>
    <input type="number" value={bill} onChange={e => setBill(Number(e.target.value))} />

    <label>🕴️ Your expense</label>
    <input type="number" value={paidByUser} onChange={e => setPaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value))} />

    <label>🧑‍🤝‍🧑 {selectedFriend.name}'s expense</label>
    <input type="number" disabled value={friendBill} />

    <label>🤑 Who is paying the bill</label>
    <select value={whoIsPaying} onChange={e => setWhoIsPaying(e.target.value)}>
      <option value="user">You</option>
      <option value="friend">{selectedFriend.name}</option>
    </select>

    <Button>Split bill</Button>
  </form>
}