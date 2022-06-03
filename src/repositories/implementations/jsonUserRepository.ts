import { User } from "../../entities/User";
import { IUserRepository } from "../IUsersRepository";

export class JsonUserRepository implements IUserRepository {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User> {
    return this.users.find(user => user.email === email);
  };

  async save(user: User): Promise<void> {
    this.users.push(user);
  };

  async getAllUser(): Promise<User[]> {
    return this.users;
  };

  async deleteUserByEmail(email: string): Promise<void> {
    const index = this.users.findIndex(user => user.email === email);

    this.users.splice(index, 1);

    return
  }
};

export const newJsonRepository = new JsonUserRepository()