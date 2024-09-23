// props: Objeto con propiedades
export function Card(props) {
  return (
    <div className="flex flex-col justify-between bg-yellow-200 p-5 rounded-lg w-[300px] ">
      <h3 className="text-2xl font-bold">{props.title}</h3>
      <p className="text-sm">{props.description}</p>

      <span className="bg-blue-800 text-white rounded-lg p-2">
        {props.price}
      </span>
    </div>
  );
}
