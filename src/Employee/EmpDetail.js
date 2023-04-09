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
        <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
      <div class="d-table-cell align-middle">
        <div class="text-center mt-4">
          <h1 class="h2">Detail Employee</h1>
          <p class="lead"></p>
        </div>

        <div class="card">
          <div class="card-body">
            <div class="m-sm-4">
              <form>
                {empdata && (
                  <div>
                    <div class="mb-3">
                  <label class="form-label">Nama : {empdata.name}</label>
                </div>
                <div class="mb-3">
                  <label class="form-label">
                    Email : {empdata.email}
                  </label>
                </div>
                <div class="mb-3">
                  <label class="form-label">
                    Telepon : {empdata.telepon}
                  </label>
                </div>
                <div class="mb-3">
                  <label class="form-label">
                    Jabatan : {empdata.jabatan}
                  </label>
                </div>
                <div class="text-center mt-3">
                  <a href="/employee" class="btn btn-lg btn-primary">
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