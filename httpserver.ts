import * as expressive from "https://raw.githubusercontent.com/NMathar/deno-express/master/mod.ts";
(async () => {
    const port = 3000;
    const app = new expressive.App();

    app.get('/api/todos', async (req, res) => {
        await res.json([{todoName: 'Ponerme la mascarilla'}]);
    });
    const server = await app.listen(port);
    console.log('app ready to listen connections on port ' + server.port);
})();