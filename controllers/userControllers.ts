import { Request, Response, Body } from "https://deno.land/x/oak/mod.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";

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

export const getUser = async (
  { params, response }: { params: { id: string }; response: Response },
) => {
  users.forEach((item) => {
    if (item.id === params.id) {
      response.body = {
        message: "received",
        user: item,
      };
    } else {
      response.status = 404;
      response.body = {
        message: "User not found",
      };
    }
  });
};

export const createUsers = async (
  { request, response }: { request: Request; response: Response },
) => {
  const body = await request.body();

  if (!request.hasBody) {
    response.status = 404;
    response.body = {
      message: "body is required",
    };
  } else {
    const newUser: User = body.value;
    newUser.id = v4.generate();
    users.push(newUser);

    response.body = {
      message: "New user created",
    };
  }
};

export const updateUsers = () => {};
export const deleteUsers = () => {};
