import { Resolvers } from "../generated/graphql";
import { queryUserByID, userResolver } from "./user";

const resolvers: Resolvers = {
  Query: {
    user: queryUserByID,
  },
  User: userResolver,
};

export default resolvers;
