import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase-config";
import { collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore";

const ProductListing = () => {
  const [newName, setNewName] = useState("");
  const [newKategori, setNewKategori] = useState("");
  const [newHarga, setNewHarga] = useState(0);

  const [product, setProduct] = useState([]);
  const productCollectionRef = collection(db, "product");

  const createProduct = async () => {
    await addDoc(productCollectionRef, {
      name: newName,
      kategori: newKategori,
      harga: newHarga,
    });
  };

  const deleteProduct = async(id) => {
    const prodDoc = doc(db, "product", id);
    await deleteDoc(prodDoc);
  }

  useEffect(() => {
    const getProduct = async () => {
      const data = await getDocs(productCollectionRef);
      setProduct(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getProduct();
  }, []);

  return (
    <div className="row">
      <div className="col-12 col-lg-12 col-xxl-12 d-flex">
        {/* <form className="container"> */}
        <div class="col-xs-6 col-md-9">
        <div className="card">
        <div className="container">
          <div className="card-header">
            <h5 className="card-title mb-0">List Product</h5>
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
                <th>Nama Product</th>
                <th>Kategori</th>
                <th>Harga</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {product.map((prod) => {
                return (
                  <tr>
                    <td>{prod.name}</td>
                    <td>{prod.kategori}</td>
                    <td>{prod.harga}</td>
                    <td>
                      <button className="btn btn-danger" onClick={() => {deleteProduct(prod.id)}}>Delete</button>
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
              <h5 className="card-title mb-0">Create Product</h5>
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
              <label>Kategori</label>
              <input
                className="form-control"
                onChange={(event) => {
                  setNewKategori(event.target.value);
                }}
              ></input>
            </div>
            <div className="card-body">
              <label>Harga</label>
              <input
                className="form-control"
                onChange={(event) => {
                  setNewHarga(event.target.value);
                }}
              ></input>
            </div>
            <div className="card-body">
              <div className="text-center mb-3">
                <button className="btn btn-success" onClick={createProduct}>
                  Save
                </button>
                <Link to="/product" className="btn btn-danger">
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

export default ProductListing;
