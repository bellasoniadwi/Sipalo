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
    <div>
      <div className="container">
        <div className="card row" style={{ textAlign: "left" }}>
          <div className="card-title">
            <h2>Product Create</h2>
          </div>
          <div className="card-body"></div>

          {productdata && (
            <div>
              <h2>
                The Product name is : <b>{productdata.name}</b> ({productdata.id})
              </h2>
              <h3>Detail product</h3>
              <h5>Kategori is : {productdata.kategori}</h5>
              <h5>Harga is : {productdata.harga}</h5>
              <Link className="btn btn-danger" to="/product">
                Back to Listing
              </Link>
            </div>
          )}
        </div>
      </div>
      {/* </div>
            </div> */}
    </div>
  );
};

export default ProductDetail;
