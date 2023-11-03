import { nanoid } from "nanoid";

export const regUser = () => {
	const local = localStorage.getItem("anonymous_chat_app");

	if (!local) {
		const id = nanoid();
		localStorage.setItem("anonymous_chat_app", id);
	}
};
