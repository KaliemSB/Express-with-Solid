import { User } from "../entities/User";
import { IUpdateUserDTO } from "../useCases/updateUserByEmail/updateUserDTO";

export interface IUserRepository {
  findByEmail(email: string): Promise<User>;
  save(user: User): Promise<void>;
  getAllUser(): Promise<User[]>;
  deleteUserByEmail(email: string): Promise<void>;
  updateUserByEmail(email: string, data: IUpdateUserDTO): Promise<User>;
};