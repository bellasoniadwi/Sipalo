import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productid } = useParams();

  const [productdata, productdatachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/product/" + productid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        productdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
      <div className="d-table-cell align-middle">
        <div className="text-center mt-4">
          <h1 className="h2">Detail Product</h1>
          <p className="lead"></p>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="m-sm-4">
              <form>
                {productdata && (
                  <div>
                    <div className="mb-3">
                  <label className="form-label">Nama : {productdata.name}</label>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Kategori : {productdata.kategori}
                  </label>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Harga : {productdata.harga}
                  </label>
                </div>
                <div className="text-center mt-3">
                  <a href="/product" className="btn btn-lg btn-primary">
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

export default ProductDetail;
