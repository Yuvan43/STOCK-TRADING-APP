
import { useState } from "react";
import { Link } from "react-router-dom";
import StockTable from "../components/StockTable";

const stocks = [
  { name: "Reliance Industries", symbol: "RELIANCE", price: 1450, change: 1.25 },
  { name: "Tata Consultancy Services", symbol: "TCS", price: 3200, change: 0.85 },
  { name: "Infosys", symbol: "INFY", price: 1500, change: -0.45 },
  { name: "HDFC Bank", symbol: "HDFCBANK", price: 1700, change: 1.1 },
  { name: "ITC Limited", symbol: "ITC", price: 450, change: -0.25 },
  { name: "Wipro", symbol: "WIPRO", price: 300, change: 0.65 }
];

function Home() {
  const [search, setSearch] = useState("");

  const filteredStocks = stocks.filter((stock) =>
    `${stock.name} ${stock.symbol}`
      .toLowerCase()
      .includes(search.trim().toLowerCase())
  );

  const positiveStocks = stocks.filter(
    (stock) => stock.change > 0
  ).length;

  return (
    <>
      <section className="hero-section">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-7">
              <span className="hero-tag">
                YOUR MONEY, YOUR FUTURE
              </span>

              <h1 className="hero-title mt-3">
                Invest in your <span>future.</span>
              </h1>

              <p className="hero-description">
                Discover stocks, build your watchlist and explore
                your investment journey with a simple dashboard.
              </p>

              <div className="d-flex flex-wrap gap-3 mt-4">
                <Link to="/companies" className="btn btn-success btn-lg">
                  Explore Stocks →
                </Link>

                <Link
                  to="/portfolio"
                  className="btn btn-outline-success btn-lg"
                >
                  My Portfolio
                </Link>
              </div>

              <div className="d-flex flex-wrap gap-4 mt-4">
                <div>
                  <h5 className="mb-1">6+</h5>
                  <small className="text-secondary">
                    Sample companies
                  </small>
                </div>

                <div>
                  <h5 className="mb-1">100%</h5>
                  <small className="text-secondary">
                    Browser-based demo
                  </small>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-5">
              <div className="market-card">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <p className="text-secondary mb-2">
                      MARKET OVERVIEW
                    </p>
                    <h5 className="mb-1">NIFTY 50</h5>
                  </div>

                  <span className="badge text-bg-success">
                    Sample
                  </span>
                </div>

                <h2 className="display-5 fw-bold mt-3">
                  24,850.50
                </h2>

                <p className="positive mb-4">
                  <span aria-hidden="true">↗</span> +1.24% today
                </p>

                <div className="market-graph">
                  <svg
                    viewBox="0 0 400 100"
                    preserveAspectRatio="none"
                    role="img"
                    aria-label="Illustrative rising market chart"
                  >
                    <defs>
                      <linearGradient
                        id="marketFill"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#16a34a"
                          stopOpacity="0.2"
                        />
                        <stop
                          offset="100%"
                          stopColor="#16a34a"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>

                    <polygon
                      points="0,80 40,65 75,75 110,42 145,56 185,25 225,40 265,15 300,32 340,10 400,18 400,100 0,100"
                      fill="url(#marketFill)"
                    />

                    <polyline
                      points="0,80 40,65 75,75 110,42 145,56 185,25 225,40 265,15 300,32 340,10 400,18"
                      fill="none"
                      stroke="#16a34a"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <small className="text-secondary">
                  Illustrative figures only — not live market data.
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-4 py-md-5">
        <div className="row g-3 mb-5">
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="stat-card h-100">
              <p>Market Watch</p>
              <h4>6 Companies</h4>
              <span>Explore sample stocks</span>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-4">
            <div className="stat-card h-100">
              <p>Market Snapshot</p>
              <h4>
                {positiveStocks} <span className="positive">Gainers</span>
              </h4>
              <span>Based on illustrative changes</span>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="stat-card h-100">
              <p>Start Investing</p>
              <h4>Build a Watchlist</h4>
              <span>Save stocks in your browser</span>
              <Link
                to="/companies"
                className="small text-success fw-semibold mt-2 d-inline-block"
              >
                View companies →
              </Link>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
          <div>
            <span className="hero-tag">MARKET DISCOVERY</span>
            <h2 className="section-title mt-2 mb-1">
              Popular Stocks
            </h2>
            <p className="text-secondary mb-0">
              Search and explore your favourite companies.
            </p>
          </div>

          <div className="search-wrapper">
            <input
              className="form-control search-input"
              type="search"
              placeholder="⌕  Search company or symbol"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Search stocks by company name or symbol"
            />

            {search && (
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary mt-2"
                onClick={() => setSearch("")}
              >
                Clear search
              </button>
            )}
          </div>
        </div>

        <div className="content-card overflow-hidden">
          {filteredStocks.length > 0 ? (
            <StockTable stocks={filteredStocks} />
          ) : (
            <div className="text-center p-5">
              <h5>No stocks found</h5>
              <p className="text-secondary mb-3">
                Try another company name or stock symbol.
              </p>
              <button
                className="btn btn-outline-success"
                onClick={() => setSearch("")}
              >
                Show all stocks
              </button>
            </div>
          )}
        </div>

        <p className="text-secondary small mt-3">
          Note: This is a frontend demonstration. Prices and market
          changes are sample values, not real-time financial data.
        </p>
      </section>
    </>
  );
}

export default Home;
