import Link from "next/link";
import DishCard from "@/components/DishCard";
import { dishes } from "@/data/menu";

const featured = dishes.filter((d) => [4, 5, 9].includes(d.id));

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <p className="eyebrow">Open today · 12pm – 11pm</p>
            <h1>Fire-cooked food that tastes like home.</h1>
            <p className="lead">
              From the tandoor to the wood-fired oven, every plate at Ember &amp; Spice is cooked
              fresh with seasonal ingredients and a lot of love.
            </p>
            <div className="hero-actions">
              <Link href="/menu" className="btn">
                Explore the menu
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Book a table
              </Link>
            </div>
          </div>
          <div className="hero-plate" aria-hidden="true">
            <span>🍛</span>
            <span>🍕</span>
            <span>🍔</span>
            <span>🍰</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Chef&apos;s favourites</h2>
            <Link href="/menu" className="link">
              See full menu →
            </Link>
          </div>
          <div className="grid">
            {featured.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container features">
          <div>
            <span>🥬</span>
            <h3>Fresh daily</h3>
            <p className="muted">Produce sourced every morning from local farms.</p>
          </div>
          <div>
            <span>🔥</span>
            <h3>Real fire</h3>
            <p className="muted">Tandoor and wood-fired oven, no shortcuts.</p>
          </div>
          <div>
            <span>🛵</span>
            <h3>Fast delivery</h3>
            <p className="muted">Hot at your door in 30 minutes or less.</p>
          </div>
        </div>
      </section>
    </>
  );
}
