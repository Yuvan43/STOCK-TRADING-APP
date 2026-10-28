
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer mt-auto">
      <div className="container py-4">
        <div className="row g-3">
          <div className="col-md-6">
            <h4 className="brand-logo">groww<span>.</span></h4>
            <p className="text-secondary mb-0">
              A frontend demonstration of a stock investing dashboard.
            </p>
          </div>

          <div className="col-md-6 text-md-end">
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/companies" className="footer-link">Stocks</Link>
            <Link to="/portfolio" className="footer-link">Portfolio</Link>
            <Link to="/news" className="footer-link">News</Link>
          </div>
        </div>

        <hr />

        <p className="small text-secondary mb-0">
          Demo project only. Prices are illustrative, not live market data
          or investment advice.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
