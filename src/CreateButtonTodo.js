import "./CreateButtonTodo.css";

function CreateTodoButton() {
  return (
    <button
      className="CreateTodoButton"
      onClick={(event) => console.log("Le diste click")}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
