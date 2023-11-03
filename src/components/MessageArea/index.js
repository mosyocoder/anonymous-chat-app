import { useSubscription } from "@apollo/client";
import React, { useEffect, useRef } from "react";

import { GET_ALL_MESSAGES } from "../../queries";
import Loading from "../Loading";

function MessageArea() {
	const messageAreaRef = useRef();

	useEffect(() => {
		messageAreaRef.current?.scrollTo({
			top: messageAreaRef.current.scrollHeight,
		});
	});

	const { data, loading, error } = useSubscription(GET_ALL_MESSAGES);

	if (loading) return <Loading />;
	if (error) return <div>Error: {error.message}</div>;

	return (
		<div className="messageArea" ref={messageAreaRef}>
			{data.messages.map((message) => (
				<div key={message.id} className={`messages ${message.user_key === localStorage.getItem("anonymous_chat_app") ? "right" : ""}`}>
					{console.log(message)}
					<p className="message">{message.message}</p>
				</div>
			))}
		</div>
	);
}

export default MessageArea;
