import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const usersData = [
	{
		id: 1,
		name: "Harkamal",
	},
	{
		id: 2,
		name: "Vaishali",
	},
];

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
	const [users, setUsers] = useState(usersData);

	const addUser = (name) => {
		setUsers((prev) => [
			...prev,
			{
				id: uuidv4(),
				name: name,
			},
		]);
	};

	return <UserContext.Provider value={{ users, addUser }}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);

export default UserContextProvider;
