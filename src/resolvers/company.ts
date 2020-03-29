import { CompanyResolvers, QueryResolvers } from "../generated/graphql";

export const companyResolvers: CompanyResolvers = {
  id: (company) => company.id,
  name: (company) => company.name,
  employees: (company, _args, context) =>
    context.userDatasource.queryCompanyUsers(company.id),
};

export const queryCompanyByID: QueryResolvers["company"] = (
  _root,
  args,
  context
) => {
  return context.userDatasource.queryCompanyByID(args.id);
};
