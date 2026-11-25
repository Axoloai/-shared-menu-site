export const metadata = { title: "About — Ember & Spice" };

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container narrow">
        <h1>Our story</h1>
        <p className="lead">
          Ember &amp; Spice started in 2019 as a six-table kitchen with one tandoor and a big dream:
          honest food, cooked over real fire.
        </p>
        <p>
          Today our team of 20 cooks still follows the same rules. We buy from local farmers, grind
          our own spices, and never microwave anything. Our menu changes with the seasons, but our
          favourites — the 12-hour dal and the butter chicken — are here to stay.
        </p>
        <div className="stats">
          <div>
            <strong>6+</strong>
            <span className="muted">years cooking</span>
          </div>
          <div>
            <strong>40k</strong>
            <span className="muted">happy guests</span>
          </div>
          <div>
            <strong>4.8★</strong>
            <span className="muted">average rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}
