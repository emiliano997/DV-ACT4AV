import { useEffect, useState } from "react";
import { UserCard } from "../../components/UserCard/UserCard";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { useModal } from "../../context/ModalContext";

export function Users() {
  const { isLoggedIn, user } = useAuth();
  const [selectedUser, setSelectedUser] = useState(null);

  const { openModal } = useModal();

  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [data, setData] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  useEffect(() => {
    if (isLoggedIn) {
      fetch("http://localhost:3000/users")
        .then((res) => res.json())
        .then((users) => {
          setUsers(users);
        });
    }
  }, [isLoggedIn]);

  const handleDelete = async (id) => {
    const isConfirmed = await openModal({
      title: "Borrar Usuario",
      text: "¿Seguro quieres eliminar el usuario?",
    });

    if (isConfirmed) {
      fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((user) => {
          setUsers(users.filter((user) => user.id !== id));
          toast.success("Usuario eliminado");
        })
        .catch((err) => console.log(err));
    }
  };

  const updateData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleEdit = (id) => {
    const user = users.find((user) => user.id === id);
    setSelectedUser(user);

    setData({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role || "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, role } = data;

    console.log(name, email, password, role);

    if (!name || !email || !password || !role) {
      alert("Todos los campos son obligatorios");
    }

    if (selectedUser) {
      fetch(`http://localhost:3000/users/${selectedUser.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          role,
        }),
      })
        .then((res) => res.json())
        .then((user) => {
          setUsers(
            users.map((user) => (user.id === selectedUser.id ? user : user))
          );
          toast.success("Usuario actualizado");
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setData({
            id: "",
            name: "",
            email: "",
            password: "",
            role: "user",
          });
          setSelectedUser(null);
        });
      return;
    }

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        role,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        setUsers([...users, user]);
        toast.success("Usuario creado");
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setData({
          id: "",
          name: "",
          email: "",
          password: "",
          role: "user",
        });
        e.target.reset();
      });
  };

  if (!isLoggedIn) {
    return <h1>No tienes permisos para ver este contenido</h1>;
  }

  return (
    <section className="text-center p-5 flex flex-col gap-5">
      <h2 className="text-2xl font-bold">Users</h2>

      <div className="flex flex-wrap gap-5 justify-center mt-5">
        <input
          className="border border-slate-200 p-2 w-50 rounded-lg"
          type="text"
          placeholder="Search"
          id="search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap gap-5 justify-center mt-5">
        {users
          .filter((user) => {
            return user.name.toLowerCase().includes(search.toLowerCase());
          })
          .map((user) => {
            return (
              <UserCard
                key={user.id}
                id={user.id}
                name={user.name}
                email={user.email}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            );
          })}
      </div>

      {user.role === "admin" && (
        <form
          className="flex flex-wrap justify-center gap-5"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="id" value={data.id} />
          <input
            className="border border-slate-200 p-2 w-50 rounded-lg"
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            onChange={updateData}
            value={data.name}
          />
          <input
            className="border border-slate-200 p-2 w-50 rounded-lg"
            type="text"
            placeholder="Email"
            id="email"
            name="email"
            onChange={updateData}
            value={data.email}
          />
          <input
            className="border border-slate-200 p-2 w-50 rounded-lg"
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            onChange={updateData}
            value={data.password}
          />

          <select name="role" id="role" onChange={updateData} value={data.role}>
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
