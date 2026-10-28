
import { Link } from "react-router-dom";

function StockTable({ stocks }) {
  return (
    <div className="table-responsive">
      <table className="table table-hover align-middle stock-table mb-0">
        <thead>
          <tr>
            <th scope="col">Company</th>
            <th scope="col">Symbol</th>
            <th scope="col">Price</th>
            <th scope="col">Change</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          {stocks.map((stock) => {
            const isPositive = stock.change >= 0;

            return (
              <tr key={stock.symbol}>
                <td className="fw-semibold">
                  {stock.name}
                </td>

                <td className="text-secondary">
                  {stock.symbol}
                </td>

                <td className="text-nowrap fw-semibold">
                  ₹{stock.price.toLocaleString("en-IN")}
                </td>

                <td>
                  <span
                    className={
                      isPositive
                        ? "stock-change positive-bg"
                        : "stock-change negative-bg"
                    }
                  >
                    {stock.change > 0 ? "+" : ""}
                    {stock.change}%
                  </span>
                </td>

                <td>
                  <Link
                    to="/companies"
                    className="btn btn-sm btn-outline-success"
                  >
                    View
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default StockTable;
