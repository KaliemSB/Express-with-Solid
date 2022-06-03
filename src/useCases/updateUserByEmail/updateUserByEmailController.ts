import { Request, Response } from "express";
import { IUserRepository } from "../../repositories/IUsersRepository";
import { UpdateUserByEmailUseCase } from "./updateUserByEmailUseCase";

export class UpdateUserByEmailController {
  constructor(
    private updateUserByEmailUseCase: UpdateUserByEmailUseCase,
    private userRepository: IUserRepository
  ) {};

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const emailParam: string = request.params.email;

      const userAlreadyExists = await this.userRepository.findByEmail(emailParam);

      if (!userAlreadyExists) throw new Error("User not found.")

      const { email, name, password } = request.body;
      const data = {
        email,
        name,
        password
      }

      const user = await this.updateUserByEmailUseCase.execute(emailParam, data);

      return response.status(200).send(user);
    } catch (error) {
      return response.status(400).send({
        message: error.message || "Unexpected error"
      });
    };
  };
};