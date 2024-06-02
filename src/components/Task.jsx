import { useId } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function Task(props) {
  const taskId = useId();

  return (
    <>
      <li className="task-item flex items-center text-left">
        <input
          type="checkbox"
          name={taskId}
          id={taskId}
          className="mr-10 w-4 h-4 ring-1 ring-green-500 border-green-400 rounded-md accent-green-500 focus:ring-2"
        />
        <label htmlFor={taskId} className="mr-10">
          {props.text}
        </label>
        <button className="ml-auto py-3 px-4 ring-1 ring-red-300 text-red-300 rounded-md hover:bg-red-900 focus:ring-4">
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </li>
    </>
  );
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default Task;
