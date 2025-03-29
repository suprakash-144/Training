import React from "react";

import { TiTickOutline } from "react-icons/ti";
import { FaRegTrashAlt } from "react-icons/fa";
const Todocard = ({ data }) => {
  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-end gap-2">
        {data?.completion ? (
          <>
            {" "}
            <div className="badge bg-success">Completed</div>{" "}
          </>
        ) : (
          <>
            <div className="badge bg-warning ">pending</div>{" "}
          </>
        )}
        <TiTickOutline size={"1em"} color="purple" onClick={() => {}} />
        <FaRegTrashAlt size={"1em"} color="red" onClick={() => {}} />
      </div>
      <div className={`${data?.completion ? "opacity-50 " : ""} `}>
        <p className="fs-6 ">{data?.title}</p>
        <p className="overflow-auto">{data?.body}</p>
      </div>
    </div>
  );
};

export default Todocard;
