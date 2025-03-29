import { useFormik } from "formik";
import React from "react";
import { object, string } from "yup";
import Custominput from "./Custominput";
import { toast } from "react-toastify";

// schemea for Todo card creation
let TodoSchema = object({
  title: string().required("title is required"),
  description: string().required("description is required"),
});
const Todoform = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: TodoSchema,
    onSubmit: async (values) => {
      try {
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    },
  });
  return (
    <div className="d-flex w-100 justify-content-center align-items-center py-2">
      <form className="d-flex flex-column gap-1 p-2 rounded">
        <Custominput
          classname="shadow"
          name="title"
          type="text"
          placeholder="Title"
          value={formik.values.title}
          onChange={formik.handleChange("title")}
          onBlur={formik.handleBlur("title")}
        />
        <div className="error">
          {formik.touched.title && formik.errors.title}
        </div>

        <Custominput
          classname="shadow"
          name="description"
          type="text"
          placeholder="Description"
          value={formik.values.description}
          onChange={formik.handleChange("description")}
          onBlur={formik.handleBlur("description")}
        />
        <div className="error">
          {formik.touched.description && formik.errors.description}
        </div>

        <div className="d-flex gap-3">
          <button
            type="submit"
            className="btn btn-outline-primary  fw-bold shadow"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Todoform;
