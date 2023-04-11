import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const PeminjamanCreate = () => {
  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [product, productchange] = useState("");
  const [total, totalchange] = useState("");
  const [validation, valchange] = useState(false);

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const peminjamandata = { name, product, total };

    fetch("http://localhost:8000/peminjaman", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(peminjamandata),
    })
      .then((res) => {
        alert("Saved successfully.");
        navigate("/peminjaman");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="container d-flex flex-column">
			<div className="row vh-30">
        <div className="col-12 col-lg-12">
        <form className="container" onSubmit={handlesubmit}>
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">Create Peminjaman</h5>
            </div>
            <div className="card-body">
              <label>Name</label>
              <input value={name} onChange={e=>namechange(e.target.value)} className="form-control"></input>
            </div>
            <div className="card-body">
              <label>Barang yang Dipinjam</label>
              <input value={product} onChange={e=>productchange(e.target.value)} className="form-control"></input>
            </div>
            <div className="card-body">
              <label>Total Harga</label>
              <input value={total} onChange={e=>totalchange(e.target.value)} className="form-control"></input>
          </div>
          <div className="card-body">
            <div className="text-center mb-3">
            <button className="btn btn-success" type="submit">Save</button>
            <Link to="/peminjaman" className="btn btn-danger">Back</Link>
            </div>
          </div>
        </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default PeminjamanCreate;
