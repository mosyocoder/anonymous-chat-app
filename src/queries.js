import { gql } from "@apollo/client";

export const GET_ALL_MESSAGES = gql`
	query getAllMessages {
		messages {
			id
			message
			username
		}
	}
`;
