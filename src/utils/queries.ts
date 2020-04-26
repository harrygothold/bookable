import API, { graphqlOperation } from "@aws-amplify/api";
import { getRoom } from "../graphql/queries";

export const getRoomById = async (id: string) => {
  const { data }: any = await API.graphql(graphqlOperation(getRoom, { id }));
  return data;
};
