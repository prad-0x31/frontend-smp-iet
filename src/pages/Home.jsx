import { Link } from "react-router-dom";
import items from "../data/items";
import ItemCard from "../components/ItemCard";



function Home() {
  return (
    <main className="page home-page">
      <section className="home-hero">
        <div>
          <p className="hero-eyebrow">Curated marketplace</p>
          <h1 className="hero-title">
            Discover premium products that feel made for you.
          </h1>
          <p className="hero-copy">
            Shop everyday favorites across home, tech, fitness, and lifestyle.
            Every item is selected for quality, value, and real usefulness.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-ghost">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="item-grid">
        {items.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </section>
    </main>
  );
}

export default Home;
