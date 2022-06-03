import { IUserRepository } from "../../repositories/IUsersRepository";
import { IDeleteUserDTIO } from "./deleteUserDTO";

export class DeleteUserByEmailUseCase {
  constructor(
    private userRepository: IUserRepository
  ) {};

  async execute(data: IDeleteUserDTIO) {
    const user = await this.userRepository.deleteUserByEmail(data.email);

    return user;
  };
};