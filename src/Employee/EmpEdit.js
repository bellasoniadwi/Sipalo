import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EmpEdit = () => {
    const { empid } = useParams();

    //const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/employee/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            idchange(resp.id);
            namechange(resp.name);
            emailchange(resp.email);
            teleponchange(resp.telepon);
            jabatanchange(resp.jabatan);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const[id,idchange]=useState("");
    const[name,namechange]=useState("");
    const[email,emailchange]=useState("");
    const[telepon,teleponchange]=useState("");
    const[jabatan,jabatanchange]=useState("");
    const[active,activechange]=useState(true);
    const[validation,valchange]=useState(false);


    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const empdata={id,name,email,telepon,jabatan};
      

      fetch("http://localhost:8000/employee/"+empid,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/');
      }).catch((err)=>{
        console.log(err.message)
      })

    }
    return ( 
        <div class="container d-flex flex-column">
			<div class="row vh-30">
        <div class="col-12 col-lg-12">
          <form className="container" onSubmit={handlesubmit}>
            <div class="card">
              <div class="card-header">
                <h5 class="card-title mb-0">Create Employee</h5>
              </div>
              <div class="card-body">
                <label>Name</label>
                <input
                  value={name}
                  onChange={(e) => namechange(e.target.value)}
                  className="form-control"
                ></input>
              </div>
              <div class="card-body">
                <label>Email</label>
                <input
                  value={email}
                  onChange={(e) => emailchange(e.target.value)}
                  className="form-control"
                ></input>
              </div>
              <div class="card-body">
                <label>Telepon</label>
                <input
                  value={telepon}
                  onChange={(e) => teleponchange(e.target.value)}
                  className="form-control"
                ></input>
              </div>
              <div class="card-body">
                <label>Jabatan</label>
                <input
                  value={jabatan}
                  onChange={(e) => jabatanchange(e.target.value)}
                  className="form-control"
                ></input>
              </div>
              <div class="card-body">
                <div class="text-center mb-3">
                  <button className="btn btn-success" type="submit">
                    Save
                  </button>
                  <Link to="/employee" className="btn btn-danger">
                    Back
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
}
 
export default EmpEdit;