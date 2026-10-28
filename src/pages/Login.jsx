
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

function Login() {
  const { setUser } = useApp();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    let registeredUser = null;

    try {
      registeredUser = JSON.parse(
        localStorage.getItem("registeredUser")
      );
    } catch {
      registeredUser = null;
    }

    if (
      !registeredUser ||
      !registeredUser.email ||
      registeredUser.email.toLowerCase() !==
        email.trim().toLowerCase()
    ) {
      setError(
        "No demo account found for this email. Please sign up first."
      );
      return;
    }

    setUser({
      name: registeredUser.name,
      email: registeredUser.email
    });

    navigate("/");
  }

  return (
    <section className="auth-wrapper container py-4 py-md-5">
      <div className="auth-card w-100">
        <div className="text-center mb-4">
          <h2>Welcome Back</h2>
          <p className="text-secondary mb-0">
            Login to your demo account.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label
              className="form-label"
              htmlFor="loginEmail"
            >
              Email Address
            </label>

            <input
              id="loginEmail"
              className="form-control"
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setError("");
              }}
              placeholder="Enter your email"
              autoComplete="email"
              maxLength={254}
              required
            />
          </div>

          {error && (
            <div
              className="alert alert-danger py-2"
              role="alert"
            >
              {error}
            </div>
          )}

          <button
            className="btn btn-success w-100 py-2"
            type="submit"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4 mb-0">
          Don't have an account?{" "}
          <Link to="/signup">Sign up</Link>
        </p>

        <p className="small text-secondary text-center mt-3 mb-0">
          Demo only: this form does not provide secure authentication.
        </p>
      </div>
    </section>
  );
}

export default Login;
