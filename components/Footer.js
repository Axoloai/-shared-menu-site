export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <p className="logo">🔥 Ember &amp; Spice</p>
          <p className="muted">Fire-cooked comfort food, made fresh every day.</p>
        </div>
        <div>
          <h4>Hours</h4>
          <p className="muted">Mon–Fri · 12pm – 11pm</p>
          <p className="muted">Sat–Sun · 11am – 12am</p>
        </div>
        <div>
          <h4>Visit</h4>
          <p className="muted">42 Market Street, Sector 17</p>
          <p className="muted">+91 98765 43210</p>
          <p className="muted">
            <a href="https://www.axolo.ai/login/client" style={{ color: "inherit" }}>Team Portal</a>
          </p>
        </div>
      </div>
      <p className="container copyright">
        © {new Date().getFullYear()} Ember &amp; Spice. All rights reserved.
      </p>
    </footer>
  );
}
