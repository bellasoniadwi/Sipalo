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
    <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
      <div class="d-table-cell align-middle">
        <div class="text-center mt-4">
          <h1 class="h2">Detail Product</h1>
          <p class="lead"></p>
        </div>

        <div class="card">
          <div class="card-body">
            <div class="m-sm-4">
              <form>
                {productdata && (
                  <div>
                    <div class="mb-3">
                  <label class="form-label">Nama : {productdata.name}</label>
                </div>
                <div class="mb-3">
                  <label class="form-label">
                    Kategori : {productdata.kategori}
                  </label>
                </div>
                <div class="mb-3">
                  <label class="form-label">
                    Harga : {productdata.harga}
                  </label>
                </div>
                <div class="text-center mt-3">
                  <a href="/product" class="btn btn-lg btn-primary">
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
