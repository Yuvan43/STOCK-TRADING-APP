
import { useState } from "react";
import { useApp } from "../context/AppContext";

const stockPrices = {
  RELIANCE: 1450,
  TCS: 3200,
  INFY: 1500,
  HDFCBANK: 1700,
  ITC: 450,
  WIPRO: 300
};

const stockNames = {
  RELIANCE: "Reliance Industries",
  TCS: "Tata Consultancy Services",
  INFY: "Infosys",
  HDFCBANK: "HDFC Bank",
  ITC: "ITC Limited",
  WIPRO: "Wipro"
};

function Portfolio() {
  const { portfolio, setPortfolio } = useApp();

  const [symbol, setSymbol] = useState("TCS");
  const [quantity, setQuantity] = useState("1");
  const [error, setError] = useState("");

  const totalValue = portfolio.reduce(
    (total, holding) =>
      total +
      (stockPrices[holding.symbol] || 0) *
        (Number(holding.quantity) || 0),
    0
  );

  const totalQuantity = portfolio.reduce(
    (total, holding) =>
      total + (Number(holding.quantity) || 0),
    0
  );

  const uniqueStocks = new Set(
    portfolio.map((holding) => holding.symbol)
  ).size;

  function addHolding(event) {
    event.preventDefault();
    setError("");

    const cleanSymbol = symbol.trim().toUpperCase();
    const qty = Number(quantity);

    if (!Object.hasOwn(stockPrices, cleanSymbol)) {
      setError("Please select a supported stock.");
      return;
    }

    if (
      !Number.isSafeInteger(qty) ||
      qty < 1 ||
      qty > 1000000
    ) {
      setError(
        "Enter a whole-number quantity between 1 and 1,000,000."
      );
      return;
    }

    setPortfolio((current) => [
      ...current,
      {
        id: `${Date.now()}-${Math.random()}`,
        symbol: cleanSymbol,
        quantity: qty
      }
    ]);

    setQuantity("1");
  }

  function removeHolding(id) {
    setPortfolio((current) =>
      current.filter((holding) => holding.id !== id)
    );
  }

  return (
    <section className="container portfolio-page py-4 py-md-5">
      <div className="portfolio-heading mb-4">
        <span className="portfolio-eyebrow">
          YOUR INVESTMENTS
        </span>

        <h2 className="section-title mt-2 mb-2">
          My Portfolio
        </h2>

        <p className="text-secondary mb-0">
          Track your holdings and estimated investment value.
        </p>
      </div>

      <div className="portfolio-summary my-4">
        <div className="portfolio-summary-top">
          <div>
            <p className="portfolio-label mb-2">
              Estimated Portfolio Value
            </p>

            <h1 className="portfolio-total">
              ₹{totalValue.toLocaleString("en-IN")}
            </h1>
          </div>

          <div className="portfolio-summary-icon">
            ₹
          </div>
        </div>

        <div className="portfolio-summary-bottom">
          <span>My investment overview</span>
          <span>Sample prices</span>
        </div>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-12 col-sm-6 col-lg-4">
          <div className="portfolio-stat-card h-100">
            <span className="portfolio-stat-icon green-icon">
              ₹
            </span>

            <p className="text-secondary mb-1">
              Portfolio Value
            </p>

            <h4>
              ₹{totalValue.toLocaleString("en-IN")}
            </h4>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-4">
          <div className="portfolio-stat-card h-100">
            <span className="portfolio-stat-icon blue-icon">
              ▤
            </span>

            <p className="text-secondary mb-1">
              Total Quantity
            </p>

            <h4>{totalQuantity.toLocaleString("en-IN")}</h4>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-lg-4">
          <div className="portfolio-stat-card h-100">
            <span className="portfolio-stat-icon orange-icon">
              ◈
            </span>

            <p className="text-secondary mb-1">
              Different Stocks
            </p>

            <h4>{uniqueStocks}</h4>
          </div>
        </div>
      </div>

      <div className="content-card portfolio-panel p-3 p-md-4 mb-4">
        <div className="portfolio-panel-heading mb-4">
          <h5 className="mb-1">Add a Holding</h5>

          <p className="text-secondary small mb-0">
            Select a stock and enter the quantity you own.
          </p>
        </div>

        <form onSubmit={addHolding}>
          <div className="row g-3">
            <div className="col-12 col-md-5">
              <label
                className="form-label"
                htmlFor="stockSymbol"
              >
                Stock
              </label>

              <select
                id="stockSymbol"
                className="form-select"
                value={symbol}
                onChange={(event) =>
                  setSymbol(event.target.value)
                }
              >
                {Object.keys(stockPrices).map((item) => (
                  <option key={item} value={item}>
                    {stockNames[item]} ({item})
                  </option>
                ))}
              </select>
            </div>

            <div className="col-12 col-md-4">
              <label
                className="form-label"
                htmlFor="quantity"
              >
                Quantity
              </label>

              <input
                id="quantity"
                className="form-control"
                type="number"
                min="1"
                max="1000000"
                step="1"
                value={quantity}
                onChange={(event) =>
                  setQuantity(event.target.value)
                }
                required
              />
            </div>

            <div className="col-12 col-md-3 d-flex align-items-end">
              <button
                className="btn btn-success portfolio-add-btn w-100"
                type="submit"
              >
                + Add Holding
              </button>
            </div>
          </div>

          {error && (
            <div
              className="alert alert-danger mt-3 mb-0"
              role="alert"
            >
              {error}
            </div>
          )}
        </form>
      </div>

      <div className="content-card portfolio-panel p-3 p-md-4">
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
          <div>
            <h5 className="mb-1">Your Holdings</h5>

            <p className="text-secondary small mb-0">
              {portfolio.length} holding
              {portfolio.length === 1 ? "" : "s"} in your portfolio
            </p>
          </div>

          <span className="portfolio-holdings-badge">
            {uniqueStocks} stocks
          </span>
        </div>

        {portfolio.length === 0 ? (
          <div className="portfolio-empty text-center py-5">
            <div className="portfolio-empty-icon">▤</div>

            <h6 className="mt-3">Your portfolio is empty</h6>

            <p className="text-secondary small mb-0">
              Add your first stock holding using the form above.
            </p>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-hover align-middle portfolio-table mb-0">
              <thead>
                <tr>
                  <th scope="col">Company</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Sample Price</th>
                  <th scope="col">Total Value</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>

              <tbody>
                {portfolio.map((holding) => {
                  const price = stockPrices[holding.symbol] || 0;
                  const qty = Number(holding.quantity) || 0;
                  const value = price * qty;

                  return (
                    <tr key={holding.id}>
                      <td>
                        <div className="portfolio-company">
                          <span className="portfolio-company-icon">
                            {holding.symbol.charAt(0)}
                          </span>

                          <div>
                            <div className="fw-semibold">
                              {stockNames[holding.symbol] ||
                                holding.symbol}
                            </div>

                            <small className="text-secondary">
                              {holding.symbol}
                            </small>
                          </div>
                        </div>
                      </td>

                      <td>{qty.toLocaleString("en-IN")}</td>

                      <td className="text-nowrap">
                        ₹{price.toLocaleString("en-IN")}
                      </td>

                      <td className="text-nowrap portfolio-value">
                        ₹{value.toLocaleString("en-IN")}
                      </td>

                      <td>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => removeHolding(holding.id)}
                          aria-label={`Remove ${holding.symbol} holding`}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        <p className="portfolio-disclaimer mt-3 mb-0">
          Note: All prices are illustrative sample values, not live
          stock market prices. This portfolio is for demonstration
          purposes only.
        </p>
      </div>
    </section>
  );
}

export default Portfolio;
