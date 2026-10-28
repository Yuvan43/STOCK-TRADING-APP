
import { useApp } from "../context/AppContext";

const stocks = [
  { name: "Reliance Industries", symbol: "RELIANCE", price: 1450 },
  { name: "Tata Consultancy Services", symbol: "TCS", price: 3200 },
  { name: "Infosys", symbol: "INFY", price: 1500 },
  { name: "HDFC Bank", symbol: "HDFCBANK", price: 1700 },
  { name: "ITC Limited", symbol: "ITC", price: 450 },
  { name: "Wipro", symbol: "WIPRO", price: 300 }
];

function Companies() {
  const { watchlist, setWatchlist } = useApp();

  const toggleWatchlist = (symbol) => {
    setWatchlist((previous) =>
      previous.includes(symbol)
        ? previous.filter((item) => item !== symbol)
        : [...previous, symbol]
    );
  };

  return (
    <div className="container py-4 py-md-5">
      <div className="mb-4">
        <h2 className="fw-bold">Explore Stocks</h2>
        <p className="text-muted mb-0">
          Explore companies and manage your watchlist.
        </p>
      </div>

      <div className="row g-3 g-md-4">
        {stocks.map((stock) => (
          <div
            className="col-12 col-md-6 col-lg-4"
            key={stock.symbol}
          >
            <div className="card h-100 shadow-sm border-0 rounded-3 p-3 p-md-4">
              <div className="d-flex justify-content-between align-items-start gap-2">
                <div>
                  <h5 className="fw-bold mb-2">{stock.name}</h5>
                  <span className="badge bg-light text-secondary">
                    {stock.symbol}
                  </span>
                </div>

                <span className="text-success fw-semibold">
                  NSE
                </span>
              </div>

              <div className="mt-4">
                <p className="text-muted mb-1">Sample Stock Price</p>
                <h4 className="fw-bold mb-0">
                  ₹{stock.price.toLocaleString("en-IN")}
                </h4>
              </div>

              <button
                type="button"
                className={`btn mt-4 w-100 ${
                  watchlist.includes(stock.symbol)
                    ? "btn-success"
                    : "btn-outline-success"
                }`}
                onClick={() => toggleWatchlist(stock.symbol)}
              >
                {watchlist.includes(stock.symbol)
                  ? "Remove from Watchlist"
                  : "Add to Watchlist"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Companies;
