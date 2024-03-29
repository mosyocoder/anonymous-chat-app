import React, { useState } from "react";
import axios from "axios";

function SendMessage() {
	const [message, setMessage] = useState("");


			const sendMessage = async () => {
	const data = {
		message: message,
		user_key: localStorage.getItem("anonymous_chat_app"),
	}
	try {
		await axios.post(
			`https://${process.env.REACT_APP_HASURA_LINK}api/rest/addmessage`,
			{
				data,
			},
			{
				headers: {
					"x-hasura-admin-secret": process.env.REACT_APP_X_HASURA_ADMIN_SECRET,
				},
			}
		);
		setMessage("");
	} catch (err) {
		console.log("Error :", err.message);
	}
};

	return (
		<div className="inputArea">
			<input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter your message" />
		 <button onClick={()=>sendMessage()}>send</button>
		</div>
	);
}

export default SendMessage;
