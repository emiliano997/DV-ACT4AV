import { environment } from "../utils/environment";

export async function getUsers() {
  const res = await fetch(`${environment.apiUrl}/users`);
  const users = await res.json(res);

  return users;
}
