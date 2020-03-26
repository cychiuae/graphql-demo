import DataLoader from "dataloader";
import { UserDataSource } from "../datasource/UserDataSource";
import { DataSourceUser } from "../model/user";

export class UserDataLoader {
  private userDataSource: UserDataSource;
  private userDataLoader: DataLoader<string, DataSourceUser | null>;

  constructor(userDataSource: UserDataSource) {
    this.userDataSource = userDataSource;
    this.userDataLoader = new DataLoader((keys) =>
      this.userDataSource.queryUsersByIDs([...keys])
    );
  }

  async loadUserByID(userID: string): Promise<DataSourceUser | null> {
    return this.userDataLoader.load(userID);
  }
}
