import { nanoid } from "nanoid";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  guests_add,
  guests_complete,
  guests_delete,
  guests_edit,
} from "./guestsReducer";
import "./App.css";

export default function App() {
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState('');
  const guests = useSelector((state) => state.guestsState.guests);
  const dispatchGuests = useDispatch();
  console.log(guests);
  const handleAdd = () => {
    if (!edit) {
      dispatchGuests(guests_add({ id: nanoid(), text: input, check: false }));
      setInput("");
    } else {
      dispatchGuests(guests_edit({ id: edit.id, text: input }));
      setEdit('');
      setInput('');
    }
  };
  const handleEdit = (guest) => {
      setEdit(guest);
      setInput(guest.text);
  };
  return (
    <div className="App">
      <h1>Guests-Lists</h1>
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type="text"
      />
      <button onClick={handleAdd}>Add</button>
      <div>
        {guests.map((guest) => (
          <div key={guest.id}>
            <span className={guest.check ? "line" : ""}>{guest.text}</span>
            <button
              onClick={() => dispatchGuests(guests_complete({ id: guest.id }))}
            >
              Check
            </button>
            <button
              onClick={() => dispatchGuests(guests_delete({ id: guest.id }))}
            >
              Delete
            </button>
            <button onClick={() => handleEdit(guest)}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
}
