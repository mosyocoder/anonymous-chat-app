import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
	uri: "https://anonymous-chat.hasura.app/v1/graphql",
});

const authLink = setContext((_, { headers }) => {
	return {
		headers: {
			...headers,
			"x-hasura-admin-secret": "AQEqCA331W58vMon2mnChfeB6EKom8GEoVYR99TvyxgUrghQCM9nJ2ZmTRiR2j79",
		},
	};
});

export const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});
