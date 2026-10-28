
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

function Signup() {
  const { setUser } = useApp();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();

    if (!cleanName || !cleanEmail) {
      setError("Please enter your name and email.");
      return;
    }

    const registeredUser = {
      name: cleanName,
      email: cleanEmail
    };

    try {
      localStorage.setItem(
        "registeredUser",
        JSON.stringify(registeredUser)
      );

      setUser(registeredUser);
      navigate("/");
    } catch {
      setError(
        "Unable to save your demo profile. Please check your browser storage."
      );
    }
  }

  return (
    <section className="auth-wrapper container py-4 py-md-5">
      <div className="auth-card w-100">
        <div className="text-center mb-4">
          <h2>Create Account</h2>
          <p className="text-secondary mb-0">
            Join the stock market learning demo.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label
              className="form-label"
              htmlFor="signupName"
            >
              Full Name
            </label>

            <input
              id="signupName"
              className="form-control"
              type="text"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
                setError("");
              }}
              placeholder="Enter your full name"
              autoComplete="name"
              maxLength={80}
              required
            />
          </div>

          <div className="mb-3">
            <label
              className="form-label"
              htmlFor="signupEmail"
            >
              Email Address
            </label>

            <input
              id="signupEmail"
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
            Create Account
          </button>
        </form>

        <p className="text-center mt-4 mb-0">
          Already registered?{" "}
          <Link to="/login">Login</Link>
        </p>

        <p className="small text-secondary text-center mt-3 mb-0">
          Demo only: your name and email are stored in this browser.
          This does not create a secure account.
        </p>
      </div>
    </section>
  );
}

export default Signup;
