import { useState } from "react";
import "./App.css";
import { useUserContext } from "./contexts/user";

function App() {
	const { users, addUser } = useUserContext();
	const [name, setName] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		addUser(name);
		setName("");
	};

	return (
		<>
      <p className="title">Users List</p>
      
			<form onSubmit={handleSubmit}>
				<input value={name} onChange={(e) => setName(e.target.value)} />
				<button type="submit"> Create </button>
			</form>

			<ul>
				{users.map((item, index) => (
					<li key={index}>
						<p>{item.name}</p>
					</li>
				))}
			</ul>
		</>
	);
}

export default App;
