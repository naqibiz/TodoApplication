import React from "react";
let count = 0;
const Todo = ({ data, onClick, handleRemove }) => {
  const onClickfunction = () => {
    count += 1;
    setTimeout(() => {
      if (count === 1) {
        onClick(data.userId);
      } else if (count === 2) {
        handleRemove(data.title);
      }
      count = 0;
    }, 300);
  };
  return (
    <div>
      <div>
        <ul
          key={data.key}
          onClick={onClickfunction}
          style={{ listStyle: "none", padding: 0 }}
          className="todo_content"
        >
          <li
            className="content_data"
            style={{ cursor: "pointer", alignContent: "flex-start" }}
            value={data.title}
          >
            {data.title}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Todo;
