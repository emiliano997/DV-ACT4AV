export function UserCard({ username, email, role }) {
  return (
    <div
      className={`flex flex-col justify-between p-5 rounded-lg w-[300px] text-white ${
        role === "admin" ? "bg-green-700" : "bg-red-800"
      }`}
    >
      <h3 className="text-2xl font-bold">{username}</h3>
      <p className="text-sm">{email}</p>
      <p className="text-sm">{role}</p>
    </div>
  );
}
