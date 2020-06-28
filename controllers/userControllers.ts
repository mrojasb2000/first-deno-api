import { Request, Response, Body } from "https://deno.land/x/oak/mod.ts";
import { v4 } from 'https://deno.land/std/uuid/mod.ts';

interface User {
  id: string;
  name: string;
}

const users: User[] = [{
  id: "1",
  name: "Ryan Ray",
}];

export const getUsers = ({ response }: { response: Response }) => {
  response.body = {
    message: "successful query",
    users: users,
  };
};
export const getUser = () => {};


export const createUsers = async (
  { request, response }: { request: Request; response: Response },
) => {
  const body = await request.body();

  const newUser: User = body.value;
  newUser.id = v4.generate();

  users.push(newUser);

  //console.log(body);
  /* users.push({
      name: body.value.name,
      id: body.value.id
  }) */

  response.body = {
      message: 'New user created'
  };
};

export const updateUsers = () => {};
export const deleteUsers = () => {};
