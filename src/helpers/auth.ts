import { Jwt } from "../store/models/auth";

export function isAuth(): boolean | Jwt {
  const jwt = localStorage.getItem("jwt");

  return jwt ? JSON.parse(jwt) : false;
}
