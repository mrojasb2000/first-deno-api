import { Router } from "https://deno.land/x/oak@v6.0.1/mod.ts";
import * as userController from "../controllers/userControllers.ts";

const router = new Router();

router.get("/", ({ response }) => {
  response.body = "Welcome ro any API";
});

router.get("/users", userController.getUsers);
router.get("/users/:id", userController.getUser);
router.post("/users", userController.createUsers);
router.delete("/users/:id", userController.deleteUsers);
router.put("/users/:id", userController.updateUsers);

export default router;
