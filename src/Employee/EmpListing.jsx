import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase-config";
import { collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore";

const EmpListing = () => {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newTelepon, setNewTelepon] = useState("");
  const [newJabatan, setNewJabatan] = useState("");

  const [employee, setEmployee] = useState([]);
  const employeeCollectionRef = collection(db, "employee");

  const createEmployee = async () => {
    await addDoc(employeeCollectionRef, {
      name: newName,
      email: newEmail,
      telepon: newTelepon,
      jabatan: newJabatan,
    });
  };

  const deleteEmployee = async(id) => {
    const empDoc = doc(db, "employee", id);
    await deleteDoc(empDoc);
  }

  useEffect(() => {
    const getEmployee = async () => {
      const data = await getDocs(employeeCollectionRef);
      setEmployee(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getEmployee();
  }, []);

  return (
    <div className="row">
      <div className="col-12 col-lg-12 col-xxl-12 d-flex">
        {/* <form className="container"> */}
        <div class="col-xs-6 col-md-9">
        <div className="card">
        <div className="container">
          <div className="card-header">
            <h5 className="card-title mb-0">List Employee</h5>
          </div>
          <div className="card-body">
            <div className="mb-3">
              {/* <Link to="/employee/create" className="btn btn-success">
                +
              </Link> */}
            </div>
          </div>
          <table className="table table-hover my-0">
            <thead>
              <tr>
                <th>Nama Karyawan</th>
                <th>Email</th>
                <th>Telepon</th>
                <th>Jabatan</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employee.map((emp) => {
                return (
                  <tr>
                    <td>{emp.name}</td>
                    <td>{emp.email}</td>
                    <td>{emp.telepon}</td>
                    <td>{emp.jabatan}</td>
                    <td>
                      <button className="btn btn-danger" onClick={() => {deleteEmployee(emp.id)}}>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        </div>
        </div>
        {/* </form> */}
        <div class="col-xs-6 col-md-3">
        <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">Create Employee</h5>
            </div>
            <div className="card-body">
              <label>Name</label>
              <input
                className="form-control"
                onChange={(event) => {
                  setNewName(event.target.value);
                }}
              ></input>
            </div>
            <div className="card-body">
              <label>Email</label>
              <input
                className="form-control"
                onChange={(event) => {
                  setNewEmail(event.target.value);
                }}
              ></input>
            </div>
            <div className="card-body">
              <label>Telepon</label>
              <input
                className="form-control"
                onChange={(event) => {
                  setNewTelepon(event.target.value);
                }}
              ></input>
            </div>
            <div className="card-body">
              <label>Jabatan</label>
              <input
                className="form-control"
                onChange={(event) => {
                  setNewJabatan(event.target.value);
                }}
              ></input>
            </div>
            <div className="card-body">
              <div className="text-center mb-3">
                <button className="btn btn-success" onClick={createEmployee}>
                  Save
                </button>
                <Link to="/employee" className="btn btn-danger">
                  Back
                </Link>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default EmpListing;
