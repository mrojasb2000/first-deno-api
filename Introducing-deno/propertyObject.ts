import { hasOwnProperty } from "https://deno.land/std/_util/has_own_property.ts";

let myObj = {
  hello: "World!",
};

console.log(myObj.hello);

console.log(hasOwnProperty(myObj, "hello"));
