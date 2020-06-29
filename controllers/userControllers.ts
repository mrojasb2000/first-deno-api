import { Request, Response, Body } from "https://deno.land/x/oak/mod.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";

interface User {
  id: string;
  name: string;
}

let users: User[] = [{
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
  const userFound = users.find((user) => user.id === params.id);

  if (userFound) {
    response.status = 200;
    response.body = {
      message: "received",
      user: userFound,
    };
  } else {
    response.status = 404;
    response.body = {
      message: "User not found",
    };
  }
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

export const deleteUsers = (
  { params, response }: { params: { id: string }; response: Response },
) => {
    console.log(params.id);
    const userFound = users.find((user) => user.id === params.id);

    if(userFound){
        users = users.filter((user) => user.id !== params.id);
        response.status = 200;
        response.body = {
            message: 'User removed'
        }
    } else {
        response.status = 404;
        response.body = {
            message: 'User not found'
        }
    }
};
