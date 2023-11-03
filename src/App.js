import "./index.css";
import { regUser } from "./helpers/reg";
import MessageArea from "./components/MessageArea";
import SendMessage from "./components/SendMessage";

function App() {
	regUser();
	return (
		<div className="container">
			<h1>Anonymous Chat App</h1>
			<MessageArea />

			<SendMessage />
		</div>
	);
}

export default App;
