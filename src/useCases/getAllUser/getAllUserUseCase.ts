import { IUserRepository } from "../../repositories/IUsersRepository";

export class GetAllUserUseCase {
  constructor(
    private userRepository: IUserRepository
  ) {};

  async execute() {
    const user = await this.userRepository.getAllUser();

    return user;
  };
};