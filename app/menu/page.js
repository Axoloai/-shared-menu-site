"use client";

import { useMemo, useState } from "react";
import DishCard from "@/components/DishCard";
import { categories, dishes } from "@/data/menu";

export default function MenuPage() {
  const [active, setActive] = useState("All");
  const [vegOnly, setVegOnly] = useState(false);
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState({});

  const shown = useMemo(
    () =>
      dishes.filter(
        (d) =>
          (active === "All" || d.category === active) &&
          (!vegOnly || d.veg) &&
          d.name.toLowerCase().includes(query.toLowerCase())
      ),
    [active, vegOnly, query]
  );

  const add = (dish) => setCart((c) => ({ ...c, [dish.id]: (c[dish.id] || 0) + 1 }));
  const remove = (id) =>
    setCart((c) => {
      const next = { ...c };
      if (next[id] > 1) next[id] -= 1;
      else delete next[id];
      return next;
    });

  const items = Object.entries(cart).map(([id, qty]) => ({
    ...dishes.find((d) => d.id === Number(id)),
    qty,
  }));
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  const placeOrder = () => {
    alert("Order placed! (demo)");
    setCart({});
  };

  return (
    <section className="section">
      <div className="container">
        <h1>Our Menu</h1>
        <p className="lead">Pick your favourites and build your order.</p>

        <div className="filters">
          <div className="chips">
            {categories.map((c) => (
              <button
                key={c}
                className={`chip ${active === c ? "active" : ""}`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="filter-right">
            <input
              className="input"
              placeholder="Search dishes…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <label className="toggle">
              <input
                type="checkbox"
                checked={vegOnly}
                onChange={(e) => setVegOnly(e.target.checked)}
              />{" "}
              Veg only
            </label>
          </div>
        </div>

        <div className="menu-layout">
          <div className="grid">
            {shown.length ? (
              shown.map((d) => <DishCard key={d.id} dish={d} onAdd={add} />)
            ) : (
              <p className="muted">No dishes match your filters.</p>
            )}
          </div>

          <aside className="cart">
            <h3>Your order</h3>
            {items.length === 0 ? (
              <p className="muted">Nothing here yet — add a dish.</p>
            ) : (
              <>
                <ul>
                  {items.map((i) => (
                    <li key={i.id}>
                      <span>{i.name}</span>
                      <span className="qty">
                        <button onClick={() => remove(i.id)} aria-label="Remove one">
                          −
                        </button>
                        {i.qty}
                        <button onClick={() => add(i)} aria-label="Add one">
                          +
                        </button>
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="cart-total">
                  <span>Total</span>
                  <strong>₹{total}</strong>
                </div>
                <button className="btn btn-block" onClick={placeOrder}>
                  Place order
                </button>
              </>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
