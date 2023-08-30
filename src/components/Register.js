import React, { useState } from "react";

import { Link, Navigate } from "react-router-dom";
// import axios from "../../node_modules/axios/dist";

// export default function Register() {
//   const [result, setResult] = useState("");
//   const [showError, setshowError] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//     console.log(formData);
//   };

//   const submit = async () => {
//     try {
//       console.log(formData);
//       const res = await axios.post(
//         "http://localhost:3000/api/v1/signup",
//         formData
//       );

//       console.log(res.data);
//     } catch (error) {
//       console.error(error.response.data);
//     }
//   };
//   return (
//     <div className="grid grid-cols-1  h-screen w-full">
//       <div className="bg-gray-500 flex flex-col justify-center">
//         <form className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8">
//           <h2 className="text-4xl text-white font-bold text-center">SIGN UP</h2>
//           <div className="flex flex-col text-gray-400 py-2">
//             {/* <label>Name</label> */}
//             <input
//               className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:outline-none"
//               type="text"
//               name="name"
//               placeholder="Name"
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="flex flex-col text-gray-400 py-2">
//             {/* <label>email</label> */}
//             <input
//               className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:outline-none"
//               type="email"
//               name="email"
//               placeholder="email"
//               onChange={handleInputChange}
//             />
//           </div>

//           <div className="flex flex-col text-gray-400 py-2">
//             {/* <label>Password</label> */}
//             <input
//               className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:outline-none"
//               type="password"
//               name="password"
//               placeholder="Password"
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="flex flex-col text-gray-400 py-2">
//             {/* <label>ConfirmPassword</label> */}
//             <input
//               className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:outline-none"
//               type="text"
//               name="confirmPassword"
//               placeholder="Confirm Password"
//               onChange={handleInputChange}
//             />
//           </div>

//           {/* <div className="flex justify-between text-gray-400 py-2">
//             <p className="flex items-center">
//               <input className="mr-2" type="checkbox" /> Remember Me
//             </p>
//             <p>Forgot Password</p>
//           </div> */}

//           <button
//             type="button"
//             onClick={submit}
//             className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
//           >
//             SIGN UP
//           </button>

//           {showError ? (
//             <div className="flex flex-col text-gray-400 py-2">
//               <input
//                 className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:outline-none"
//                 type="error"
//                 name="error"
//               />
//             </div>
//           ) : (
//             <></>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// }

// import React from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import loginImg from "../assets/img/login.jpg";

export const RegistrationForm1 = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showError, setshowError] = useState("");
  const [redirect, setredirect] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    // Perform your registration logic here

    try {
      // console.log(formData);
      setSubmitting(true);
      const res = await axios.post(
        "http://localhost:3000/api/v1/signup",
        values
      );

      console.log(res.data);
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
    return <Navigate to="/login" />;
  }

  return (
    <div className="sm:grid-cols-2 grid grid-cols-1 place-items-center w-[70%] h-[82vh] mx-auto my-0">
      <div className="hidden sm:block w-full h-[75vh]">
        <img
          className="h-full object-left object-cover rounded-s-lg"
          src={loginImg}
          alt="contactImg"
        />
      </div>
      <div className="h-[75vh] flex flex-col justify-center w-full rounded-e-lg bg-gray-900">
        {/* <h2>Registration Form</h2> */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="max-w-[400px] w-full mx-auto rounded-lg p-8 px-8">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-20 h-20 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>
              <h2 className="text-4xl text-white font-bold text-center">
                SIGN UP
              </h2>
              <div className="flex flex-col text-gray-400 py-2">
                {/* <label>Username</label> */}
                <Field
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:outline-none"
                />
                <ErrorMessage name="name" component="div" className="error" />
              </div>
              <div className="flex flex-col text-gray-400 py-2">
                {/* <label>Email</label> */}
                <Field
                  type="email"
                  name="email"
                  placeholder="email"
                  className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:outline-none"
                  // onChange={setIsError(false)}
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div className="flex flex-col text-gray-400 py-2">
                {/* <label>Password</label> */}
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:outline-none"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </div>
              <div className="flex flex-col text-gray-400 py-2">
                {/* <label>Password</label> */}
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="confirmPassword"
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
                {isSubmitting ? "Registering..." : "Register"}
              </button>
              {isError ? (
                <div className="flex flex-col text-red-400 py-2">
                  <input
                    className="p-2 rounded-lg bg-gray-700 mt-2 focus:outline-none"
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
