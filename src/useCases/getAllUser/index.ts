import { newJsonRepository } from "../../repositories/implementations/jsonUserRepository";
import { GetAllUserController } from "./getAllUserController";
import { GetAllUserUseCase } from "./getAllUserUseCase";

const jsonUserRepository = newJsonRepository;

const getAllUserUseCase = new GetAllUserUseCase(jsonUserRepository);

const getAllUserController = new GetAllUserController(getAllUserUseCase);

export { getAllUserUseCase, getAllUserController};