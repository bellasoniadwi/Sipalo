import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const PeminjamanListing = () => {
  const [peminjamandata, peminjamandatachange] = useState(null);
  const navigate = useNavigate();

  const LoadDetail = (id) => {
    navigate("/peminjaman/detail/" + id);
  };
  const LoadEdit = (id) => {
    navigate("/peminjaman/edit/" + id);
  };
  const Removefunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:8000/peminjaman/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    fetch("http://localhost:8000/peminjaman")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        peminjamandatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="row">
      <div className="col-12 col-lg-12 col-xxl-12 d-flex">
        <div className="card flex-fill">
          <div className="card-header">
            <h5 className="card-title mb-0">List Peminjaman</h5>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <Link to="/peminjaman/create" className="btn btn-success">
                +
              </Link>
            </div>
          </div>
          <table className="table table-hover my-0">
            <thead>
              <tr>
              <th>ID Peminjaman</th>
                <th>Nama Peminjam</th>
                <th>Barang yang Dipinjam</th>
                <th>Total Harga</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {peminjamandata &&
                peminjamandata.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.product}</td>
                    <td>Rp. {item.total}</td>
                    <td>
                      <a
                        onClick={() => {
                          LoadEdit(item.id);
                        }}
                        className="btn btn-warning"
                      >
                        Edit
                      </a>
                      <a
                        onClick={() => {
                          Removefunction(item.id);
                        }}
                        className="btn btn-danger"
                      >
                        Remove
                      </a>
                      <a
                        onClick={() => {
                          LoadDetail(item.id);
                        }}
                        className="btn btn-primary"
                      >
                        Details
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PeminjamanListing;
