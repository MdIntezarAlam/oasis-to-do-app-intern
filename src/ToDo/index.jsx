//easy to underStand
import React, { useState } from "react";
const initialValue = {
  u_name: "",
  u_email: "",
  u_phone: "",
};

const ToDo = () => {
  const [inputValue, setInputValue] = useState(initialValue);
  const [formValue, setFormValue] = useState([]);
  const [saveContact, setSaveContact] = useState(false);
  const [editedValue, setEditedValue] = useState("");

  //input change
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputValue(() => {
      return {
        ...inputValue,
        [name]: value,
      };
    });
  };

  //add
  const formSumbithandler = (e) => {
    e.preventDefault();
    if (saveContact) {
      const prevData = formValue;
      Object.assign(prevData[editedValue], inputValue);
      setFormValue([...prevData]);
      setInputValue({
        u_name: "",
        u_email: "",
        u_phone: "",
      });
      setSaveContact(false);
    } else {
      setFormValue([...formValue, inputValue]);
      setInputValue({
        u_name: "",
        u_email: "",
        u_phone: "",
      });
    }
  };
  //edit
  const editHandler = (id) => {
    const tempData = formValue[id];
    setInputValue({
      u_name: tempData.u_name,
      u_email: tempData.u_email,
      u_phone: tempData.u_phone,
    });
    setSaveContact(true);
    setEditedValue(id);
  };

  //delete
  const deleteHandler = (id) => {
    const filterData = formValue.filter((items, index) => index !== id);
    setFormValue(filterData);
  };
  //delete all
  const deleteAll = () => {
    setFormValue([]);
  };

  return (
    <div className="container bg-dark p-5 mt-5">
      <div className="row g-2">
        <div className="col-12 m-auto">
          <div className="card p-5">
            <div className="row pb-5">
              <h1 className="text-center">Student-To-Do-App</h1>
              <div className="col-12 mb-3">
                <label className="form-label">Enter Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="u_name"
                  value={inputValue.u_name}
                  onChange={inputChangeHandler}
                  className=" mt-1 form-control"
                />
              </div>
              <div className="col-12 mb-3">
                <label className="form-label">Enter Email</label>
                <input
                  type="text"
                  name="u_email"
                  value={inputValue.u_email}
                  onChange={inputChangeHandler}
                  placeholder="Enter Email"
                  className=" mt-1 form-control"
                />
              </div>
              <div className="col-12 mb-3">
                <label className="form-label">Enter Phone No.</label>
                <input
                  type="text"
                  name="u_phone"
                  value={inputValue.u_phone}
                  onChange={inputChangeHandler}
                  placeholder="Enter Phone"
                  className=" mt-1 form-control"
                />
              </div>
              <div className="text-center mt-3 m-auto">
                <button className="btn btn-primary" onClick={formSumbithandler}>
                  {saveContact ? "Update" : "Save Contact"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 m-auto">
          <div className="card p-5  mt-5">
            <table className="table-dark table table-hover shadow p-lg-5 align-items-center">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th
                    scope="col"
                    className="d-flex justify-content-center align-items-center"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {formValue.map((item, id) => (
                  <tr key={item.id}>
                    <td>{item.u_name}</td>
                    <td>{item.u_email}</td>
                    <td>{item.u_phone}</td>
                    <td className="d-flex justify-content-center align-items-center">
                      <button
                        className="btn btn-primary p-1 me-1 w-25"
                        onClick={() => editHandler(id)}
                      >
                        Eidt
                      </button>
                      <button
                        className="btn btn-danger p-1 w-25"
                        onClick={() => deleteHandler(id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="m-auto">
              <button className="btn btn-danger " onClick={deleteAll}>
                Clear All
              </button>
            </div>
            <hr className="border-1 border-primary p-1" />
            <div className="card-title h2  py-1">
              Student-To-Do-App
            </div>
            <div className="card.body">
              <span>
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
