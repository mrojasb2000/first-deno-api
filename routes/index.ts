import { Router } from "https://deno.land/x/oak/mod.ts";
import * as userController from "../controllers/userControllers.ts";

const router = new Router();

router.get("/", ({ response }) => {
  response.body = "Welcome ro any API";
});

router.get("/users", userController.getUsers);
router.post("/users", userController.createUsers);

export default router;
