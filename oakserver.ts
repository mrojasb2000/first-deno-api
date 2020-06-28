import { Application, Route, Router } from 'https://deno.land/x/oak/mod.ts';
const PORT = 3000
const app: Application = new Application();
const router = new Router();

router.get('/', ({response}) =>{
    response.body = "Hello World!";
});

app.use(router.routes());

console.log("Server running on port", PORT);

await app.listen({port:PORT});