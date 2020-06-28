import { serve } from "http://deno.land/std/http/server.ts"
const s = serve({ port:3000 });
console.log("Connectiong Server");
for await (const req of s){
    req.respond({body: "Hello Deno!"})
}