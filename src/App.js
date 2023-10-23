import { useQuery } from "@apollo/client";
import { GET_ALL_MESSAGES } from "./queries";

function App() {
	const { loading, error, data } = useQuery(GET_ALL_MESSAGES);

	console.log("loading", loading);
	console.log("error", error);
	console.log("data", data);

	return <div>deneme</div>;
}

export default App;
