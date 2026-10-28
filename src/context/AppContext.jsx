
import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

const AppContext = createContext(null);

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

export function AppProvider({ children }) {
  const [user, setUser] = useState(() =>
    readStorage("user", null)
  );

  const [watchlist, setWatchlist] = useState(() =>
    readStorage("watchlist", ["INFY", "TCS"])
  );

  const [portfolio, setPortfolio] = useState(() =>
    readStorage("portfolio", [])
  );

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  useEffect(() => {
    localStorage.setItem("portfolio", JSON.stringify(portfolio));
  }, [portfolio]);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  function logout() {
    setUser(null);
  }

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        watchlist,
        setWatchlist,
        portfolio,
        setPortfolio,
        logout
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useApp must be used inside AppProvider");
  }

  return context;
}
