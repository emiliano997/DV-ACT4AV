import { useEffect, useState } from "react";
import { UserCard } from "../../components/UserCard/UserCard";
import { getUsers } from "../../services/users";

export function Users() {
  const [users, setUsers] = useState([]);
  // useLogin(); // Chequear si un usuario está logueado

  useEffect(() => {
    getUsers().then((users) => {
      console.log(users);
      setUsers(users);
    });
  }, []);

  return (
    <section className="text-center p-5">
      <h2 className="text-2xl font-bold">Users</h2>
      <div className="flex flex-wrap gap-5">
        {users.map((user) => {
          return (
            <UserCard
              key={user.id}
              name={user.name}
              email={user.email}
              role={user.role}
            />
          );
        })}
      </div>
    </section>
  );
}
