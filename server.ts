const listener = Deno.listen({ port: 3000 });
console.log("listering on 0.0.0.0:3000");
for await (const conn of listener) {
  Deno.copy(conn, conn);
}
