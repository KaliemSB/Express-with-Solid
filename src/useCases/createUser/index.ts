import { newJsonRepository } from "../../repositories/implementations/jsonUserRepository";
import { CreateUserController } from "./createUserController";
import { CreateUserUseCase } from "./createUserUseCase";

const jsonUserRepository = newJsonRepository;

const createUserUseCase = new CreateUserUseCase(jsonUserRepository);

const createUserContoller = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserContoller};