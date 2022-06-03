import { Router } from "express";
import { createUserContoller } from "./useCases/createUser";
import { deleteUserController } from "./useCases/deleteUserByEmail";
import { getAllUserController } from "./useCases/getAllUser";
import { getUserController } from "./useCases/getUserByEmail";
import { updateUserByEmailController } from "./useCases/updateUserByEmail";

const router = Router();

router.post('/user', (request, response) => {
  return createUserContoller.handle(request, response);
});

router.get('/user', (request, response) => {
  return getAllUserController.handle(request, response);
});

router.get('/user/:email', (request, response) => {
  return getUserController.handle(request, response);
})

router.delete('/user/:email', (request, response) => {
  return deleteUserController.handle(request, response);
})

router.put('/user/:email', (request, response) => {
  return updateUserByEmailController.handle(request, response);
})

export { router };