import { UserResolvers, Resolvers, QueryResolvers } from "../generated/graphql";

const userResolver: UserResolvers = {
  id: ({ id }) => id,
  name: ({ name }) => name,
};

const queryUserByID: QueryResolvers["user"] = () => {
  return {
    id: "id",
    name: "name",
  };
};

const resolvers: Resolvers = {
  Query: {
    user: queryUserByID,
  },
  User: userResolver,
};

export default resolvers;
