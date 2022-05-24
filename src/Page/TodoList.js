import React, { useEffect, useRef, useState } from "react";
import ErrorMessage from "../Component/ErrorMessage/ErrorMessage";
import Button from "../Component/Button/Button";
import Todo from "../Component/Todo";
import ToastifyMessage from "../Component/ToastifyMessage";

const TodoList = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [tododata, setTodoData] = useState([]);
  const [userdata, setUserData] = useState([]);
  const toastRef = useRef();

  console.log(tododata.length, "tododata length");

  const handleClick = async () => {
    setLoading(true);
    await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "handleClick");
        setTodoData(data);
        getUserInfo();
      })
      .catch((error) => {
        setLoading(false);
        setTodoData("");
        toastRef.current.handleToast(error.message);
      });
  };
  const getUserInfo = async () => {
    setLoading(true);
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "UserInfo");
        setLoading(false);
        setUserData(data);
      })
      .catch((error) => {
        setLoading(false);
        toastRef.current.handleToast(error.message);
      });
  };

  const handleUserData = (userId) => {
    console.log(userId, "user id");
    console.log(
      userdata.find((val) => val.id == userId),
      "user data find"
    );
    const SelectedUserData = userdata.find((val) => val.id == userId);
    toastRef.current.handleToast(
      `${SelectedUserData.name} ${SelectedUserData.email}`
    );
  };

  const handleRemove = (title) => {
    var index = tododata.findIndex((val) => val.title == title);

    if (index > -1) {
      tododata.splice(index, 1);
      setTodoData([...tododata]);
      toastRef.current.handleToast("Deleted Successfully");
    }
  };

  useEffect(() => {
    console.log(tododata, "tododata useEffect");
    return () => {};
  }, [tododata]);

  return (
    <>
      <div className="todo_main_content_div">
        <div className="todo_all_content_div">
          <div className="todo_header">
            <h3 className="logo">Todo Application</h3>
          </div>
          <div>
            <Button onClick={() => handleClick()} disabled={loading} />
          </div>

          {tododata.length > 0 ? (
            <>
              <div className="total_count">
                <p> {tododata.length} out of 200 </p>
              </div>
              <div className="user_content_list">
                {message && <ErrorMessage msg={message} />}
                {tododata &&
                  tododata.map((val, i) => (
                    <div className="todo_content">
                      <Todo
                        data={val}
                        key={i}
                        onClick={handleUserData}
                        handleRemove={handleRemove}
                      />
                    </div>
                  ))}
              </div>
            </>
          ) : (
            <></>
          )}
          <ToastifyMessage ref={toastRef} />
        </div>
      </div>
    </>
  );
};

export default TodoList;
