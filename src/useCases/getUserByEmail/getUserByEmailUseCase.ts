import { IUserRepository } from "../../repositories/IUsersRepository";
import { IGetUserDTO } from "./getUserDTO";

export class GetUserUseCase {
  constructor(
    private userRepository: IUserRepository
  ) {};

  async execute(data: IGetUserDTO) {
    const user = await this.userRepository.findByEmail(data.email);

    if (!user) throw new Error("User not found.");

    return user;
  };
};