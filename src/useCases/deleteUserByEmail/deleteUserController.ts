import { Request, Response } from "express";
import { DeleteUserByEmailUseCase } from "./deleteUserByEmailUseCase";

export class DeleteUserController {
  constructor(
    private deleteUserByEmailUseCase: DeleteUserByEmailUseCase
  ) {};

  async handle(request: Request, response: Response): Promise<Response> {
    const email: string = request.params.email;

    try {
      const user = await this.deleteUserByEmailUseCase.execute({ email });

      return response.status(200).send(user);
    } catch (error) {
      return response.status(400).send({
        message: error.message || "Unexpected error"
      });
    };
  };
};