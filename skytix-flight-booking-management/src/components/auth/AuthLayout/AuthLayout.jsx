import AuthBrand from "../AuthBrand/AuthBrand";

import "./AuthLayout.scss";

export default function AuthLayout({ children }) {
  return (
    <main className="auth-layout">

      <section className="auth-left">

        <AuthBrand />

        <div className="auth-hero-content">

          <span className="auth-hero-label">
            Flight Management
          </span>

          <h1>
            Manage every journey
            <br />
            with <span>Skytix.</span>
          </h1>

          <p>
            Manage flights, bookings, schedules and
            passengers from one simple dashboard.
          </p>

        </div>

        <div className="auth-left-footer">
          © 2026 Skytix. All Rights Reserved.
        </div>

      </section>

      <section className="auth-right">

        <div className="auth-form-container">
          {children}
        </div>

      </section>

    </main>
  );
}