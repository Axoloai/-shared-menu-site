"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="section">
      <div className="container contact">
        <div>
          <h1>Book a table</h1>
          <p className="lead">Reserve your spot or send us a message — we reply within the hour.</p>
          <p className="muted">📍 42 Market Street, Sector 17</p>
          <p className="muted">📞 +91 98765 43210</p>
          <p className="muted">✉️ hello@emberandspice.example</p>
        </div>

        {sent ? (
          <div className="card success">
            <h3>Thank you! 🎉</h3>
            <p className="muted">Your booking request is in. We&apos;ll confirm shortly.</p>
            <button className="btn btn-ghost" onClick={() => setSent(false)}>
              Make another booking
            </button>
          </div>
        ) : (
          <form className="card form" onSubmit={submit}>
            <label>
              Name
              <input className="input" required />
            </label>
            <label>
              Phone
              <input className="input" type="tel" required />
            </label>
            <div className="row">
              <label>
                Date
                <input className="input" type="date" required />
              </label>
              <label>
                Guests
                <input className="input" type="number" min="1" max="20" defaultValue="2" required />
              </label>
            </div>
            <label>
              Notes
              <textarea className="input" rows="3" placeholder="Allergies, occasion…" />
            </label>
            <button className="btn btn-block" type="submit">
              Request booking
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
