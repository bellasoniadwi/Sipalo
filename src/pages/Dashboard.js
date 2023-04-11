import React from "react";

function Dashboard() {
  return (
    <>
      <h1 className="h3 mb-3">Selamat Datang !</h1>

      <div className="row">
        <div className="col-12 col-md-12">
          <div className="card">
            <img
              className="card-img-top"
              src="adminkit/img/photos/background.jpg"
              alt="Unsplash"
            />
            <div className="card-body">
              <h5 className="card-text">
                Bolang Gunung salah satu persewaan perlengkapan outdoor dan
                camping yang lengkap di Malang yang berdiri sejak tahun 2022.
                Dengan harga yang sangat murah, barang kami memiliki kualitas
                yang sangat bagus dan terawat sesuai standarisasi untuk
                persewaan, itu semua demi kenyamanan dan keamanan anda. Jadi
                bagi anda yang menghabiskan waktu liburan anda untuk eksplor alam
                dan bagi anda yang bingung ingin menyewa perlengkapan camping,
                kami adalah solusi tepat untuk anda, dengan harga yang
                terjangkau dan mengutamakan keselamatan.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
