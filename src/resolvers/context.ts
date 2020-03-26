import { UserDataSource } from "../datasource/UserDataSource";
import { UserDataLoader } from "../dataloader/UserDataLoader";
import { ChatDataSource } from "../datasource/ChatDataSource";

export interface Context {
  chatDatasource: ChatDataSource;
  userDatasource: UserDataSource;
  userDataLoader: UserDataLoader;
}
