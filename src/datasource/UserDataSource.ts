import { DataSourceUser } from "../model/user";
import { sleep } from "../utils";

const UserDatabase: DataSourceUser[] = [
  {
    id: "kenchan",
    name: "Ken Chan",
    profilePicAssetName: "kenchan.png",
  },
  {
    id: "maysis",
    name: "May Yeung",
    profilePicAssetName: "maymay.png",
  },
  {
    id: "rickmak",
    name: "Rick Mak",
    profilePicAssetName: "rick.png",
  },
  {
    id: "steven",
    name: "Steven Chan",
    profilePicAssetName: "steven.png",
  },
  {
    id: "yinbb",
    name: "YinYin Chiu",
    profilePicAssetName: "yinyin.png",
  },
];

export class UserDataSource {
  async queryUserByID(id: string): Promise<DataSourceUser | null> {
    console.log(`Query user by id: ${id}`);
    const user = UserDatabase.find((u) => u.id === id);
    await sleep(2000);
    return user ?? null;
  }

  async queryUsersByIDs(ids: string[]): Promise<(DataSourceUser | null)[]> {
    console.log(`Query users by ids: ${ids}`);
    return Promise.all(ids.map((id) => this.queryUserByID(id)));
  }
}
