import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const EmpDetail = () => {
    const { empid } = useParams();

    const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/employee/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
      <div className="d-table-cell align-middle">
        <div className="text-center mt-4">
          <h1 className="h2">Detail Employee</h1>
          <p className="lead"></p>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="m-sm-4">
              <form>
                {empdata && (
                  <div>
                    <div className="mb-3">
                  <label className="form-label">Nama : {empdata.name}</label>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Email : {empdata.email}
                  </label>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Telepon : {empdata.telepon}
                  </label>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Jabatan : {empdata.jabatan}
                  </label>
                </div>
                <div className="text-center mt-3">
                  <a href="/employee" className="btn btn-lg btn-primary">
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
}

export default EmpDetail;