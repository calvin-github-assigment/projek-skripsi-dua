import React from "react";
import { NavLink } from "react-router-dom";
import CartBtn from "./buttons/CartBtn";
// import Login from "./buttons/Login";
// import Signup from "./buttons/Signup";

const Header = ({ props }) => {
  const { _setUser} = props;

  return (
    <>
      <nav className="navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid py-2">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  <button onClick={()=>_setUser(null)} type="button" class="btn btn-danger" >
                    Keluar
                  </button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  <button type="button" class="btn btn-outline-primary" >
                    Rumah
                  </button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  <button type="button" class="btn btn-outline-primary">
                    Barang
                  </button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  <button type="button" class="btn btn-outline-primary">
                   Tentang Tokoh
                  </button>
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  <button type="button" class="btn btn-outline-primary">
                    Kontak Kami
                  </button>
                </NavLink>
              </li> */}
              {/* <a type="button" class="btn btn-outline-primary" href="https://docs.google.com/spreadsheets/d/1UbXgDsp-f6v2Fwkea4b7ImjbkPo8gFIJ276oTe8XNFg/edit?pli=1#gid=0">
                Database
              </a> */}
            </ul>
            <h1 className="navbar-brand mx-auto fw-bold">
              TOKO KEMBANG DEISY
            </h1>
            {/* <Login /> */}
            {/* <Signup /> */}
            <CartBtn />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
