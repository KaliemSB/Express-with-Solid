import { Router } from "express";
import { createUserContoller } from "./useCases/createUser";

const router = Router();

router.post('/user', (request, response) => {
  return createUserContoller.handle(request, response);
});

export { router };