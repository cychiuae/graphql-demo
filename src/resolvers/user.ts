import { UserResolvers, QueryResolvers } from "../generated/graphql";
import { DataSourceCompany } from "../model/user";

export const userResolver: UserResolvers = {
  id: ({ id }) => id,
  name: ({ name }) => name,
  company: (user, _args, context) =>
    context.userDatasource.queryCompanyByID(user.companyID) as Promise<
      DataSourceCompany
    >,
};

export const queryUserByID: QueryResolvers["user"] = (_root, args, context) => {
  return context.userDatasource.queryUserByID(args.id);
};
