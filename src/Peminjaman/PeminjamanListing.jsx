import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase-config";
import { collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore";

const PeminjamanListing = () => {
  const [newName, setNewName] = useState("");
  const [newProduct, setNewProduct] = useState("");
  const [newTotal, setNewTotal] = useState(0);

  const [peminjaman, setPeminjaman] = useState([]);
  const peminjamanCollectionRef = collection(db, "transaction");

  const createPeminjaman = async () => {
    await addDoc(peminjamanCollectionRef, {
      name: newName,
      product: newProduct,
      total: newTotal,
    });
  };

  const deletePeminjaman = async(id) => {
    const pemDoc = doc(db, "transaction", id);
    await deleteDoc(pemDoc);
  }

  useEffect(() => {
    const getPeminjaman = async () => {
      const data = await getDocs(peminjamanCollectionRef);
      setPeminjaman(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPeminjaman();
  }, []);

  return (
    <div className="row">
      <div className="col-12 col-lg-12 col-xxl-12 d-flex">
        {/* <form className="container"> */}
        <div class="col-xs-6 col-md-9">
        <div className="card">
        <div className="container">
          <div className="card-header">
            <h5 className="card-title mb-0">List Peminjaman</h5>
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
                <th>Nama Peminjam</th>
                <th>Barang yang Dipinjam</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {peminjaman.map((trans) => {
                return (
                  <tr>
                    <td>{trans.name}</td>
                    <td>{trans.product}</td>
                    <td>{trans.total}</td>
                    <td>
                      <button className="btn btn-danger" onClick={() => {deletePeminjaman(trans.id)}}>Delete</button>
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
              <h5 className="card-title mb-0">Create Peminjaman</h5>
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
              <label>Barang yang Dipinjam</label>
              <input
                className="form-control"
                onChange={(event) => {
                  setNewProduct(event.target.value);
                }}
              ></input>
            </div>
            <div className="card-body">
              <label>Harga</label>
              <input
                className="form-control"
                onChange={(event) => {
                  setNewTotal(event.target.value);
                }}
              ></input>
            </div>
            <div className="card-body">
              <div className="text-center mb-3">
                <button className="btn btn-success" onClick={createPeminjaman}>
                  Save
                </button>
                <Link to="/peminjaman" className="btn btn-danger">
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

export default PeminjamanListing;
