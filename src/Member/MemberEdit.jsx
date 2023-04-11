import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const MemberEdit = () => {
    const { memberid } = useParams();

    //const [memberdata, memberdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/member/" + memberid).then((res) => {
            return res.json();
        }).then((resp) => {
            idchange(resp.id);
            namechange(resp.name);
            alamatchange(resp.alamat);
            teleponchange(resp.telepon);
            usiachange(resp.usia);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const[id,idchange]=useState("");
    const[name,namechange]=useState("");
    const[alamat,alamatchange]=useState("");
    const[telepon,teleponchange]=useState("");
    const[usia,usiachange]=useState("");
    const[validation,valchange]=useState(false);


    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const memberdata={id,name,alamat,telepon,usia};
      

      fetch("http://localhost:8000/member/"+memberid,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(memberdata)
      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/member');
      }).catch((err)=>{
        console.log(err.message)
      })

    }
    return ( 
        <div className="container d-flex flex-column">
			<div className="row vh-30">
        <div className="col-12 col-lg-12">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card">
              <div className="card-header">
                <h5 className="card-title mb-0">Create Member</h5>
              </div>
              <div className="card-body">
                <label>Name</label>
                <input
                  value={name}
                  onChange={(e) => namechange(e.target.value)}
                  className="form-control"
                ></input>
              </div>
              <div className="card-body">
                <label>Alamat</label>
                <input
                  value={alamat}
                  onChange={(e) => alamatchange(e.target.value)}
                  className="form-control"
                ></input>
              </div>
              <div className="card-body">
                <label>Telepon</label>
                <input
                  value={telepon}
                  onChange={(e) => teleponchange(e.target.value)}
                  className="form-control"
                ></input>
              </div>
              <div className="card-body">
                <label>Usia</label>
                <input
                  value={usia}
                  onChange={(e) => usiachange(e.target.value)}
                  className="form-control"
                ></input>
              </div>
              <div className="card-body">
                <div className="text-center mb-3">
                  <button className="btn btn-success" type="submit">
                    Save
                  </button>
                  <Link to="/member" className="btn btn-danger">
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
 
export default MemberEdit;