import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductCreate = () => {
  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [kategori, kategorichange] = useState("");
  const [harga, hargachange] = useState("");
  const [validation, valchange] = useState(false);

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const productdata = { name, kategori, harga };

    fetch("http://localhost:8000/product", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(productdata),
    })
      .then((res) => {
        alert("Saved successfully.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div class="container d-flex flex-column">
			<div class="row vh-30">
        <div class="col-12 col-lg-12">
        <form className="container" onSubmit={handlesubmit}>
          <div class="card">
            <div class="card-header">
              <h5 class="card-title mb-0">Create Product</h5>
            </div>
            <div class="card-body">
              <label>Name</label>
              <input value={name} onChange={e=>namechange(e.target.value)} className="form-control"></input>
            </div>
            <div class="card-body">
              <label>Kategori</label>
              <input value={kategori} onChange={e=>kategorichange(e.target.value)} className="form-control"></input>
            </div>
            <div class="card-body">
              <label>Harga</label>
              <input value={harga} onChange={e=>hargachange(e.target.value)} className="form-control"></input>
          </div>
          <div class="card-body">
            <div class="text-center mb-3">
            <button className="btn btn-success" type="submit">Save</button>
            <Link to="/product" className="btn btn-danger">Back</Link>
            </div>
          </div>
        </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ProductCreate;
