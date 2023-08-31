import React, { useState } from "react";

import { Link } from "react-router-dom";
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

export const RegistrationForm1 = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showError, setshowError] = useState("");

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
    } catch (error) {
      const message = error.response.data.message;
      setIsError(true);
      setshowError(message);
      console.error(error.response.data);
    }

    setSubmitting(false);
  };

  return (
    <div className="grid grid-cols-1  h-screen w-full">
      <div className="bg-gray-500 flex flex-col justify-center">
        {/* <h2>Registration Form</h2> */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8">
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
