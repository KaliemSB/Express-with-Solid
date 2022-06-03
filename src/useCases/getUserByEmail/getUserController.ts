import { Request, Response } from "express";
import { GetUserUseCase } from "./getUserByEmailUseCase";

export class GetUserController {
  constructor(
    private getUserUseCase: GetUserUseCase
  ) {};

  async handle(request: Request, response: Response): Promise<Response> {
    const email: string = request.params.email;

    try {
      const user = await this.getUserUseCase.execute({ email });

      return response.status(201).send(user);
    } catch (error) {
      return response.status(400).send({
        message: error.message || "Unexpected error"
      });
    };
  };
};