import "./TodoCounter.css";

function TodoCount({ total, completed }) {
  return (
    <h1 className="titulo">
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>
  );
}

export { TodoCount };
