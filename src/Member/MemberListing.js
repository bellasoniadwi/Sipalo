import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const MemberListing = () => {
    const [memberdata, memberdatachange] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/member/detail/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/member/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:8000/member/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }




    useEffect(() => {
        fetch("http://localhost:8000/member").then((res) => {
            return res.json();
        }).then((resp) => {
            memberdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="row">
      <div className="col-12 col-lg-12 col-xxl-12 d-flex">
        <div className="card flex-fill">
          <div className="card-header">
            <h5 className="card-title mb-0">List Member</h5>
          </div>
          <div class="card-body">
            <div class="mb-3">
              <Link to="/member/create" className="btn btn-success">
                +
              </Link>
            </div>
          </div>
          <table className="table table-hover my-0">
            <thead>
              <tr>
              <th>ID Member</th>
                <th>Nama Member</th>
                <th className="d-none d-xl-table-cell">Alamat</th>
                <th className="d-none d-xl-table-cell">Telepon</th>
                <th className="d-none d-xl-table-cell">Usia</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {memberdata &&
                memberdata.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.alamat}</td>
                    <td>{item.telepon}</td>
                    <td>{item.usia}</td>
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
}

export default MemberListing;