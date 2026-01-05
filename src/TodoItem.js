import "./TodoItem.css";
import { FaCheck } from "@react-icons/all-files/fa/FaCheck";
import { IoClose } from "@react-icons/all-files/io5/IoClose";

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={onComplete}
      >
        <FaCheck />
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span className="Icon Icon-delete" onClick={onDelete}>
        <IoClose />
      </span>
    </li>
  );
}

export { TodoItem };
