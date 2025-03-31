import React, { useEffect, useState } from "react";
import Todoform from "../component/Todoform";
import Todocard from "../component/Todocard";

import { DndContext } from "@dnd-kit/core";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useLocation, useNavigate } from "react-router-dom";
const Todo = () => {
  const [todo, settodo] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPrivate = useAxiosPrivate();

  const getTodo = async () => {
    try {
      const response = await axiosPrivate.get(`/todo/`);
      settodo(response.data);
    } catch (err) {
      console.error(err);
      navigate("/login", { state: { from: location }, replace: true });
    }
  };
  useEffect(() => {
    let ismounted = true;
    ismounted && getTodo();
    return () => {
      ismounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container-xl container-fluid">
      <Todoform getTodo={getTodo} />

      <div className="d-flex flex-wrap gap-4 mt-4">
        <DndContext>
          {todo.map((item, key) => (
            <Todocard data={item} getTodo={getTodo} key={key} />
          ))}
        </DndContext>
      </div>
    </div>
  );
};

export default Todo;
