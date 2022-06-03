import { newJsonRepository } from "../../repositories/implementations/jsonUserRepository";
import { DeleteUserByEmailUseCase } from "./deleteUserByEmailUseCase";
import { DeleteUserController } from "./deleteUserController";

const jsonUserRepository = newJsonRepository;

const deleteUserByEmailUseCase = new DeleteUserByEmailUseCase(jsonUserRepository);

const deleteUserController = new DeleteUserController(deleteUserByEmailUseCase);

export { deleteUserByEmailUseCase, deleteUserController};