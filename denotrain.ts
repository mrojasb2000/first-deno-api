import { Application, Router } from 'https://deno.land/x/denotrain@v0.5.0/mod.ts';

const app = new Application();
const router = new Router();

router.get('/v2', (ctx) => {
    return {"Hello":"World"}
});

app.use('/api', router)

await app.run()