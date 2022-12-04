import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { config } from "./config";
import { useNavigate } from "react-router-dom";
import "./App.css";

// import "react-toastify/dist/ReactToastify.css";
// function Addexpense() {
//   let navigate = useNavigate();

//   let formik = useFormik({
//     initialValues: {
//       title: "",
//       description: "",
//       dateandtime: "",
//       catagory: "",
//       divisions: "",
//       amount: "",
//     },
//     validate: (values) => {
//       let errors = {};
//       if (!values.title) {
//         errors.title = "please enter the product title";
//       }
//       if (!values.description) {
//         errors.description = "please enter the description";
//       }
//       if (!values.dateandtime) {
//         errors.dateandtime = "please enter the date and time ";
//       }
//       if (!values.catagory) {
//         errors.catagory = "please enter the catagory";
//       }
//       if (!values.divisions) {
//         errors.divisions = "please enter the divisions";
//       }
//       if (!values.amount) {
//         errors.amount = "please enter the amount";
//       }
//       return errors;
//     },
//     onSubmit: async (values) => {
//       try {
//         await axios.post(`${config.api}/portal/addexpense`, values, {
//           headers: {
//             authorization: `${localStorage.getItem("react_app_token")}`

//           },

//         });
//         alert("Added Successfully")
//         navigate("/portal/expenselist");
//       } catch (error) {
//         console.log(error);
//       }
//     },
//   });
//   return (
//     <>

//       <div className="container">
//         <form onSubmit={formik.handleSubmit} autoComplete="off">
//           <div className="row">
//             <h1>Record New Expense</h1>
//             <div className="col-lg-10">
//               <label>Title:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="title"
//                 onChange={formik.handleChange}
//                 value={formik.values.title}
//               ></input>
//             </div>
//             {formik.errors.title ? <span>{formik.errors.title}</span> : null}
//             <div className="col-lg-10">
//               <label>Description:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="description"
//                 onChange={formik.handleChange}
//                 value={formik.values.description}
//               ></input>
//             </div>
//             {formik.errors.description ? (
//               <span>{formik.errors.description}</span>
//             ) : null}

//             <div className="col-lg-10">
//               <label>Date and Time:</label>
//               <input
//                 type="datetime-local"
//                 className="form-control"
//                 name="dateandtime"
//                 onChange={formik.handleChange}
//                 value={formik.values.dateandtime}
//               ></input>
//             </div>
//             {formik.errors.dateandtime ? (
//               <span>{formik.errors.dateandtime}</span>
//             ) : null}
//             <div className="col-lg-10">
//               <label>Catagory:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="catagory"
//                 onChange={formik.handleChange}
//                 value={formik.values.catagory}
//               ></input>
//             </div>
//             {formik.errors.catagory ? (
//               <span>{formik.errors.catagory}</span>
//             ) : null}
//             <div className="col-lg-10">
//               <label>Divisions:</label>
//               <select
//                 className="form-control"
//                 name="divisions"
//                 onChange={formik.handleChange}
//                 value={formik.values.divisions}
//               >
//                 <option value="Nah">select any one division</option>
//                 <option value="Office">Office</option>
//                 <option value="Personal">Personal</option>
//               </select>
//             </div>
//             {formik.errors.divisions ? (
//               <span>{formik.errors.divisions}</span>
//             ) : null}
//             <div className="col-lg-10">
//               <label>Amount:</label>
//               <input
//                 type="number"
//                 className="form-control"
//                 name="amount"
//                 onChange={formik.handleChange}
//                 value={formik.values.amount}
//               ></input>
//             </div>
//             {formik.errors.amount ? <span>{formik.errors.amount}</span> : null}
//             <div className="col-lg-10">
//               <input
//                 type="submit"
//                 value="submit"
//                 className="btn btn-primary mt-2"
//                 disabled={!formik.isValid}

//               ></input>
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Addexpense;

function Addexpense() {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      description: "",
      dateandtime: "",
      catagory: "",
      divisions: "",
      amount: "",
    },

    validate: (values) => {
      let error = {};
      if (!values.description) {
        error.description = "Please enter your description";
      }
      if (
        values.description &&
        (values.description.length <= 5 || values.description.length > 80)
      ) {
        error.description = "Description must be between 5 to 80 Characters";
      }
      if (!values.dateandtime) {
        error.dateandtime = "Please select your dateandtime";
      }
      if (!values.catagory) {
        error.catagory = "Please enter your catagory";
      }
      if (
        values.catagory &&
        (values.catagory.length <= 5 || values.catagory.length > 30)
      ) {
        error.catagory = "Catagory must be between 5 to 30 Characters";
      }
      if (!values.divisions) {
        error.divisions = "Please select your divisions";
      }
      if (!values.amount) {
        error.amount = "Please select your amount";
      }

      return error;
    },
    onSubmit: async (values) => {
      try {
        await axios.post(`${config.api}/portal/addexpense`, values, {
          headers: {
            authorization: `${localStorage.getItem("react_app_token")}`,
          },
        });
        alert("Added Successfully");
        navigate("/portal/expenselist");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="form-group">
                <label>Description</label>
                <input
                  name="description"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.description}
                  type={"text"}
                  className={`form-control ${
                    formik.touched.description && formik.errors.description
                      ? "error-box"
                      : "null"
                  } ${
                    formik.touched.description && !formik.errors.description
                      ? "success-box"
                      : "null"
                  }`}
                />
                {formik.errors.description ? (
                  <span style={{ color: "red" }}>
                    {formik.errors.description}
                  </span>
                ) : null}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <label>Catagory</label>
                
                <input name="catagory" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.catagory}
                type={"text"}
                 className={`form-control ${
                  formik.touched.catagory && formik.errors.catagory
                    ? "error-box"
                    : "null"
                } ${
                  formik.touched.catagory && !formik.errors.catagory
                    ? "success-box"
                    : "null"
                }`} />
                {formik.errors.catagory ? (
                  <span style={{ color: "red" }}>
                    {formik.errors.catagory}
                  </span>
                ) : null}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label>Divisions</label>
                <select name="divisions" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.divisions}
                className={`form-control ${
                  formik.touched.divisions && formik.errors.divisions
                    ? "error-box"
                    : "null"
                } ${
                  formik.touched.divisions && !formik.errors.divisions
                    ? "success-box"
                    : "null"
                }`}>
                  <option value={""}></option>
                  <option va>Office</option>
                  <option>Personal</option>
                </select>
                {formik.errors.divisions ? (
                  <span style={{ color: "red" }}>
                    {formik.errors.divisions}
                  </span>
                ) : null}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <label>Date</label>
                <input
                  name="dateandtime"
                  type={"datetime-local"}
                  onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dateandtime}
                  className={`form-control ${
                    formik.touched.dateandtime && formik.errors.dateandtime
                      ? "error-box"
                      : "null"
                  } ${
                    formik.touched.dateandtime && !formik.errors.dateandtime
                      ? "success-box"
                      : "null"
                  }`}
                />
                {formik.errors.dateandtime ? (
                  <span style={{ color: "red" }}>
                    {formik.errors.dateandtime}
                  </span>
                ) : null}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label>Amount</label>
                <input name="amount" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.amount}
                type={"number"} className={`form-control ${
                  formik.touched.amount && formik.errors.amount
                    ? "error-box"
                    : "null"
                } ${
                  formik.touched.amount && !formik.errors.amount
                    ? "success-box"
                    : "null"
                }`} />
                {formik.errors.amount ? (
                  <span style={{ color: "red" }}>
                    {formik.errors.amount}
                  </span>
                ) : null}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="form-group">
                <input type={"submit"} className="btn btn-primary" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export default Addexpense;
