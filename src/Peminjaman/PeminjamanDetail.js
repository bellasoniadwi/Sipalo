import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const PeminjamanDetail = () => {
  const { peminjamanid } = useParams();

  const [peminjamandata, peminjamandatachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/peminjaman/" + peminjamanid)
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
    <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
      <div className="d-table-cell align-middle">
        <div className="text-center mt-4">
          <h1 className="h2">Detail Peminjaman</h1>
          <p className="lead"></p>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="m-sm-4">
              <form>
                {peminjamandata && (
                  <div>
                    <div className="mb-3">
                  <label className="form-label">Nama : {peminjamandata.name}</label>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Barang yang Dipinjam : {peminjamandata.product}
                  </label>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Total Harga : {peminjamandata.total}
                  </label>
                </div>
                <div className="text-center mt-3">
                  <a href="/peminjaman" className="btn btn-lg btn-primary">
                    Back to List
                  </a>
                </div>
                  </div>
                )}
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeminjamanDetail;
