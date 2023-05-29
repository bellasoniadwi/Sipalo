import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase-config";
import { collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore";

const MemberListing = () => {
  const [newName, setNewName] = useState("");
  const [newAlamat, setNewAlamat] = useState("");
  const [newTelepon, setNewTelepon] = useState("");
  const [newUsia, setNewUsia] = useState(0);

  const [member, setMember] = useState([]);
  const memberCollectionRef = collection(db, "member");

  const createMember = async () => {
    await addDoc(memberCollectionRef, {
      name: newName,
      alamat: newAlamat,
      telepon: newTelepon,
      usia: newUsia,
    });
  };

  const deleteMember = async (id) => {
    const membDoc = doc(db, "member", id);
    await deleteDoc(membDoc);
  };

  useEffect(() => {
    const getMember = async () => {
      const data = await getDocs(memberCollectionRef);
      setMember(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getMember();
  }, []);

  return (
    <div className="row">
      <div className="col-12 col-lg-12 col-xxl-12 d-flex">
        {/* <form className="container"> */}
        <div class="col-xs-6 col-md-9">
          <div className="card">
            <div className="container">
              <div className="card-header">
                <h5 className="card-title mb-0">List Member</h5>
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
                    <th>Nama Member</th>
                    <th>Alamat</th>
                    <th>Telepon</th>
                    <th>Usia</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {member.map((memb) => {
                    return (
                      <tr>
                        <td>{memb.name}</td>
                        <td>{memb.alamat}</td>
                        <td>{memb.telepon}</td>
                        <td>{memb.usia}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              deleteMember(memb.id);
                            }}
                          >
                            Delete
                          </button>
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
              <h5 className="card-title mb-0">Create Member</h5>
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
              <label>Alamat</label>
              <input
                className="form-control"
                onChange={(event) => {
                  setNewAlamat(event.target.value);
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
              <label>Usia</label>
              <input
                className="form-control"
                onChange={(event) => {
                  setNewUsia(event.target.value);
                }}
              ></input>
            </div>
            <div className="card-body">
              <div className="text-center mb-3">
                <button className="btn btn-success" onClick={createMember}>
                  Save
                </button>
                <Link to="/member" className="btn btn-danger">
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

export default MemberListing;
