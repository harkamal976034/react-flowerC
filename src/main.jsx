import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UserContextProvider from "./contexts/user.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<UserContextProvider>
		<App />
	</UserContextProvider>
);
