import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const MemberDetail = () => {
    const { memberid } = useParams();

    const [memberdata, memberdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/member/" + memberid).then((res) => {
            return res.json();
        }).then((resp) => {
            memberdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
      <div className="d-table-cell align-middle">
        <div className="text-center mt-4">
          <h1 className="h2">Detail Member</h1>
          <p className="lead"></p>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="m-sm-4">
              <form>
                {memberdata && (
                  <div>
                    <div className="mb-3">
                  <label className="form-label">Nama : {memberdata.name}</label>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Email : {memberdata.email}
                  </label>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Telepon : {memberdata.telepon}
                  </label>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Jabatan : {memberdata.jabatan}
                  </label>
                </div>
                <div className="text-center mt-3">
                  <a href="/member" className="btn btn-lg btn-primary">
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

export default MemberDetail;