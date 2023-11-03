import { gql } from "@apollo/client";

export const GET_ALL_MESSAGES = gql`
	subscription getAllMessages {
		messages {
			id
			message
			user_key
		}
	}
`;
