
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Companies from "./pages/Companies";
import Portfolio from "./pages/Portfolio";
import News from "./pages/News";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/news" element={<News />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="*"
            element={
              <main className="container py-5 text-center">
                <h2>Page not found</h2>
                <p className="text-secondary">
                  The page you are looking for does not exist.
                </p>
                <a href="/" className="btn btn-success">
                  Back to Home
                </a>
              </main>
            }
          />
        </Routes>

        <footer className="app-footer">
          <div className="container py-4 text-center">
            <p className="mb-1 fw-semibold">
              StockWise
            </p>
            <small>
              A stock market learning and portfolio demo.
              Sample data only; not financial advice.
            </small>
          </div>
        </footer>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
