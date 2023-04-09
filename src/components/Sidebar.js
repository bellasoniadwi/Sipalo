import React from "react";

function Sidebar() {
  return (
    <nav id="sidebar" className="sidebar js-sidebar">
      <div className="sidebar-content js-simplebar">
        <a className="sidebar-brand" href="index.html">
          <span className="align-middle">Bolang</span>
        </a>

        <ul className="sidebar-nav">
          <li className="sidebar-header">Pages</li>

          <li className="sidebar-item active">
            <a className="sidebar-link" href="/">
              <i className="align-middle" data-feather="sliders"></i>{" "}
              <span className="align-middle">Home</span>
            </a>
          </li>

          <li className="sidebar-item">
            <a className="sidebar-link" href="/product">
              <i className="align-middle" data-feather="user"></i>{" "}
              <span className="align-middle">Product</span>
            </a>
          </li>

          <li className="sidebar-item">
            <a className="sidebar-link" href="/employee">
              <i className="align-middle" data-feather="log-in"></i>{" "}
              <span className="align-middle">Employee</span>
            </a>
          </li>

          <li className="sidebar-item">
            <a className="sidebar-link" href="pages-sign-up.html">
              <i className="align-middle" data-feather="user-plus"></i>{" "}
              <span className="align-middle">Member</span>
            </a>
          </li>

          <li className="sidebar-item">
            <a className="sidebar-link" href="pages-blank.html">
              <i className="align-middle" data-feather="book"></i>{" "}
              <span className="align-middle">Peminjaman</span>
            </a>
          </li>

          {/* <li className="sidebar-header">Tools & Components</li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
