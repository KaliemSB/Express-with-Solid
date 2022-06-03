import { newJsonRepository } from "../../repositories/implementations/jsonUserRepository";
import { UpdateUserByEmailController } from "./updateUserByEmailController";
import { UpdateUserByEmailUseCase } from "./updateUserByEmailUseCase";

const jsonUserRepository = newJsonRepository;

const updateUserByEmailUseCase = new UpdateUserByEmailUseCase(jsonUserRepository);

const updateUserByEmailController = new UpdateUserByEmailController(updateUserByEmailUseCase, jsonUserRepository);

export { updateUserByEmailUseCase, updateUserByEmailController};