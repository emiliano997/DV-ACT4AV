export function UserCard({ id, name, email, handleDelete, handleEdit }) {
  return (
    <div
      className={`flex flex-col justify-between p-5 rounded-lg w-[300px] text-white bg-slate-500`}
    >
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="text-sm">{email}</p>

      <div className="flex flex-row gap-5 justify-center mt-2">
        <button
          onClick={() => handleEdit(id)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Editar
        </button>
        <button
          onClick={() => handleDelete(id)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
