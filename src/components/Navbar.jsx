
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useApp } from "../context/AppContext";

function Navbar() {
  const { user, logout } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
      <div className="container">
        <Link
          to="/"
          className="navbar-brand fw-bold text-success fs-4"
          onClick={closeMenu}
        >
          StockWise
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
          <div className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `nav-link ${isActive ? "active fw-semibold text-success" : ""}`
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>

            <NavLink
              to="/companies"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active fw-semibold text-success" : ""}`
              }
              onClick={closeMenu}
            >
              Stocks
            </NavLink>

            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active fw-semibold text-success" : ""}`
              }
              onClick={closeMenu}
            >
              Portfolio
            </NavLink>

            <NavLink
              to="/news"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active fw-semibold text-success" : ""}`
              }
              onClick={closeMenu}
            >
              News
            </NavLink>

            {user ? (
              <>
                <span className="nav-link text-secondary">
                  Hi, {user.name || user.email}
                </span>

                <button
                  type="button"
                  className="btn btn-outline-danger btn-sm ms-lg-2"
                  onClick={() => {
                    logout();
                    closeMenu();
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Login
                </NavLink>

                <Link
                  to="/signup"
                  className="btn btn-success btn-sm ms-lg-2"
                  onClick={closeMenu}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
