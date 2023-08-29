import React, { useContext, useState } from "react";

import { Link, Navigate } from "react-router-dom";
// import axios from "../../node_modules/axios/dist";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import UserContext from "../utils/userContext";
import LoggedInfo from "../utils/loggedinfo";

export const LoginForm = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showError, setshowError] = useState("");
  const [redirect, setredirect] = useState(false);

  const { user, setUser } = useContext(UserContext);
  const { setisloggedin } = useContext(LoggedInfo);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    // Perform your registration logic here

    try {
      // console.log(formData);
      setSubmitting(true);
      const res = await axios.post(
        "http://localhost:3000/api/v1/login",
        values
      );

      console.log(res.data);

      const { name, email } = { ...res.data.data };

      console.log(name, email);
      setUser({
        name: name,
        email: email,
      });

      setTimeout(() => {
        console.log(user);
      }, 2000);

      setisloggedin(true);

      console.log("Form data submitted:", values);

      setIsError(false);

      setredirect(true);
    } catch (error) {
      const message = error.response.data.message;
      setIsError(true);
      setshowError(message);
      console.error(error.response.data);
    }

    setSubmitting(false);
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className="grid grid-cols-1  h-screen w-full">
      <div className="bg-gray-500 flex flex-col justify-center">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8">
              <h2 className="text-4xl text-white font-bold text-center">
                LOG IN
              </h2>

              <div className="flex flex-col text-gray-400 py-2">
                <label>Email</label>
                <Field
                  type="email"
                  name="email"
                  // placeholder="email"
                  className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:outline-none"
                  // onChange={setIsError(false)}
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div className="flex flex-col text-gray-400 py-2">
                <label>Password</label>
                <Field
                  type="password"
                  name="password"
                  // placeholder="Password"
                  className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:outline-none"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                // onClick={submit}
                className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
              >
                {isSubmitting ? "Logging..." : "LOGIN"}
              </button>
              {isError ? (
                <div className="flex flex-col text-gray-400 py-2">
                  <input
                    className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:outline-none"
                    type="error"
                    name="error"
                    value={showError}
                    readOnly
                  />
                </div>
              ) : (
                <></>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
