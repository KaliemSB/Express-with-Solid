import { newJsonRepository } from "../../repositories/implementations/jsonUserRepository";
import { GetUserUseCase } from "./getUserByEmailUseCase";
import { GetUserController } from "./getUserController";

const jsonUserRepository = newJsonRepository;

const getUserUseCase = new GetUserUseCase(jsonUserRepository);

const getUserController = new GetUserController(getUserUseCase);

export { getUserUseCase, getUserController};