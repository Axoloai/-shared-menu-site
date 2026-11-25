export default function DishCard({ dish, onAdd }) {
  return (
    <article className="dish-card">
      <div className="dish-emoji" aria-hidden="true">
        {dish.emoji}
      </div>
      <div className="dish-body">
        <div className="dish-top">
          <h3>{dish.name}</h3>
          <span className="price">₹{dish.price}</span>
        </div>
        <p className="muted">{dish.desc}</p>
        <div className="dish-meta">
          <span className={`tag ${dish.veg ? "veg" : "nonveg"}`}>{dish.veg ? "Veg" : "Non-veg"}</span>
          {dish.spicy > 0 && <span className="tag spicy">{"🌶".repeat(dish.spicy)}</span>}
          {onAdd && (
            <button className="btn btn-sm" onClick={() => onAdd(dish)}>
              Add +
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
