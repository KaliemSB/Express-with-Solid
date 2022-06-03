import { IUserRepository } from "../../repositories/IUsersRepository";
import { IUpdateUserDTO } from "./updateUserDTO";

export class UpdateUserByEmailUseCase {
  constructor(
    private userRepository: IUserRepository
  ) {}

  async execute(params: string, data: IUpdateUserDTO) {
    const user = this.userRepository.updateUserByEmail(params, data);

    return user;
  }
}