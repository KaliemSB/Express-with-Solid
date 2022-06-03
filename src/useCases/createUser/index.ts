import { JsonUserRepository } from "../../repositories/implementations/jsonUserRepository";
import { CreateUserController } from "./createUserController";
import { CreateUserUseCase } from "./createUserUseCase";

const jsonUserRepository = new JsonUserRepository();

const createUserUseCase = new CreateUserUseCase(jsonUserRepository);

const createUserContoller = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserContoller};