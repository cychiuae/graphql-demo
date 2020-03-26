import { UserResolvers, QueryResolvers } from "../generated/graphql";

export const userResolver: UserResolvers = {
  id: ({ id }) => id,
  name: ({ name }) => name,
};

export const queryUserByID: QueryResolvers["user"] = (_root, args, context) => {
  return context.userDatasource.queryUserByID(args.id);
};
