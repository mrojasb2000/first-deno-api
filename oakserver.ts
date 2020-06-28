import { Application, Route, Router } from 'https://deno.land/x/oak/mod.ts';
import router from './routes/index.ts';

const PORT = 3000
const app: Application = new Application();

app.use(router.routes());

console.log("Server running on port", PORT);

await app.listen({port:PORT});