import { Request, Response } from "express";
import { GetAllUserUseCase } from "./getAllUserUseCase";

export class GetAllUserController {
  constructor(
    private getAllUserUseCase: GetAllUserUseCase
  ) {};

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const user = await this.getAllUserUseCase.execute();

      return response.status(200).send(user);
    } catch (error) {
      return response.status(400).send({
        message: error.message || "Unexpected error"
      });
    };
  };
};