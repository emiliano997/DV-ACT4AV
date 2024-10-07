import { useEffect, useState } from "react";
import { UserCard } from "../../components/UserCard/UserCard";
import { getUsers } from "../../services/users";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";

export function Users() {
  const [users, setUsers] = useState([]);

  // Form Data
  const [formData, setFormData] = useState({
    id: "",
    username: "",
    email: "",
    password: "",
    role: "user",
  });

  const { isLoggedIn, user } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      getUsers().then((users) => {
        console.log(users);
        setUsers(users);
      });
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return <div>No estás logueado</div>;
  }

  // Form Functions
  const updateFormData = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      id: users[users.length - 1].id + 1,
      username: formData.username,
      email: formData.email,
      password: formData.password,
      role: formData.role,
    };

    const userExists = users.find(
      (u) => user.username === u.username || user.email === u.email
    );

    if (userExists) {
      toast.warn("El usuario ya existe");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        toast.error("Error al crear el usuario");
        return;
      }

      toast.success("Usuario creado exitosamente");

      getUsers().then((users) => {
        setUsers(users);
      });

      setFormData({
        id: "",
        username: "",
        email: "",
        password: "",
        role: "user",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="text-center p-5 flex flex-col gap-5">
      <h2 className="text-2xl font-bold">Users</h2>
      <div className="flex flex-wrap gap-5 justify-center items-center">
        {users.map((user) => {
          return (
            <UserCard
              key={user.id}
              username={user.username}
              email={user.email}
              role={user.role}
            />
          );
        })}
      </div>

      {user.role === "admin" && (
        <form
          className="mt-5 flex flex-wrap justify-center gap-5"
          onSubmit={handleSubmit}
        >
          <input
            className="border border-slate-200 p-2 w-50 rounded-lg"
            type="text"
            placeholder="Username"
            id="username"
            name="username"
            value={formData.username}
            onChange={updateFormData}
          />
          <input
            className="border border-slate-200 p-2 w-50 rounded-lg"
            type="text"
            placeholder="Email"
            id="email"
            name="email"
            value={formData.email}
            onChange={updateFormData}
          />
          <input
            className="border border-slate-200 p-2 w-50 rounded-lg"
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            value={formData.password}
            onChange={updateFormData}
          />

          <select
            name="role"
            id="role"
            value={formData.role}
            onChange={updateFormData}
          >
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Create User
          </button>
        </form>
      )}
    </section>
  );
}
