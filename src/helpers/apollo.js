import { ApolloClient, InMemoryCache, createHttpLink, split } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";

const httpLink = createHttpLink({
	uri: `https://${process.env.REACT_APP_HASURA_LINK}v1/graphql`,
});

const wsLink = new GraphQLWsLink(
	createClient({
		url: `ws://${process.env.REACT_APP_HASURA_LINK}v1/graphql`,
		connectionParams: {
			headers: {
				"x-hasura-admin-secret": process.env.REACT_APP_X_HASURA_ADMIN_SECRET,
			},
		},
	}),
);

const splitLink = split(
	({ query }) => {
		const definition = getMainDefinition(query);
		return definition.kind === "OperationDefinition" && definition.operation === "subscription";
	},
	wsLink,
	httpLink,
);

export const client = new ApolloClient({
	link: splitLink,
	cache: new InMemoryCache(),
});
