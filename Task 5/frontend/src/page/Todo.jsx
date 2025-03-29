import React, { useState } from "react";
import Todoform from "../component/Todoform";
import Todocard from "../component/Todocard";

import { DndContext } from "@dnd-kit/core";

const Todo = () => {
  const [todo, settodo] = useState([
    {
      _id: "67dd9d2f6511d1bfb0e7516a",
      title: "Second",
      body: "Testings",
      completion: false,
      by: {
        _id: "67dd9b9d602a99682a60ef5f",
        name: "Suprakash Gorai",
      },
      createdAt: "2025-03-21T17:09:03.240Z",
      updatedAt: "2025-03-21T17:09:03.240Z",
      __v: 0,
    },
    {
      _id: "67dd9d376511d1bfb0e7516d",
      title: "changed",
      body: "updated response",
      completion: true,
      by: {
        _id: "67dd9b9d602a99682a60ef5f",
        name: "Suprakash Gorai",
      },
      createdAt: "2025-03-21T17:09:11.117Z",
      updatedAt: "2025-03-21T18:44:25.245Z",
      __v: 0,
    },
    {
      _id: "67df049dffc6714e49e8e582",
      title: "Third",
      body: "asd",
      completion: false,
      by: {
        _id: "67dd9b9d602a99682a60ef5f",
        name: "Suprakash Gorai",
      },
      createdAt: "2025-03-22T18:42:37.323Z",
      updatedAt: "2025-03-22T18:42:37.323Z",
      __v: 0,
    },
  ]);
  return (
    <div className="container-xl container-fluid">
      <Todoform />

      <div className="d-flex flex-wrap gap-4 mt-4">
        <DndContext>
          {todo.map((item, key) => (
            <Todocard data={item} key={key} />
          ))}
        </DndContext>
      </div>
    </div>
  );
};

export default Todo;
