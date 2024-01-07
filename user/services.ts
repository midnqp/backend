import crypto from "node:crypto";

type GetOneUser = {
    id: string
    name: string
    language: string
}

class UserService {
  static async getOne(options: { id: string }): Promise<GetOneUser> {
    const userList = await Promise.resolve([
      {
        id: "938eb65e-c041-452f-b0e8-ee0fe4b4dc55",
        name: "midnqp",
        language: "c",
      },
    ]);
    return userList[0];
  }
}

export default UserService;
