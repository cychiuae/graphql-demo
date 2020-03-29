import { DataSourceUser, DataSourceCompany } from "../model/user";

const UserDatabase: DataSourceUser[] = [
  {
    id: "kenchan",
    name: "Ken Chan",
    profilePicAssetName: "kenchan.png",
    companyID: "oursky",
  },
  {
    id: "maysis",
    name: "May Yeung",
    profilePicAssetName: "maymay.png",
    companyID: "oursky",
  },
  {
    id: "rickmak",
    name: "Rick Mak",
    profilePicAssetName: "rick.png",
    companyID: "oursky",
  },
  {
    id: "steven",
    name: "Steven Chan",
    profilePicAssetName: "steven.png",
    companyID: "oursky",
  },
  {
    id: "yinbb",
    name: "YinYin Chiu",
    profilePicAssetName: "yinyin.png",
    companyID: "oursky",
  },
];

const CompanyDatabase: DataSourceCompany[] = [
  {
    id: "oursky",
    name: "Oursky",
  },
];

export class UserDataSource {
  async queryUserByID(id: string): Promise<DataSourceUser | null> {
    console.log(`Query user by id: ${id}`);
    const user = UserDatabase.find((u) => u.id === id);
    return user ?? null;
  }

  async queryUsersByIDs(ids: string[]): Promise<(DataSourceUser | null)[]> {
    console.log(`Query users by ids: ${ids}`);
    return Promise.all(ids.map((id) => this.queryUserByID(id)));
  }

  async queryCompanyByID(id: string): Promise<DataSourceCompany | null> {
    console.log(`Query company by id: ${id}`);
    const company = CompanyDatabase.find((c) => c.id === id);
    return company ?? null;
  }

  async queryCompanyUsers(companyID: string): Promise<DataSourceUser[]> {
    console.log(`Query company users by id: ${companyID}`);
    return UserDatabase.filter((u) => u.companyID === companyID);
  }
}
