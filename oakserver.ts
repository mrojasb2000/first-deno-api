import { Application } from "https://deno.land/x/oak@v6.0.1/mod.ts";
import router from "./routes/index.ts";

const PORT = 3000;
const app: Application = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log("Server running on port", PORT);

await app.listen({ port: PORT });
