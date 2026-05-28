import { Link } from "react-router-dom";
import items from "../data/items";
import ItemCard from "../components/ItemCard";
import { useState } from "react";



function Home() {

  const [searchQuery, setSearchQuery] = useState('');

  const searchFilter = items.filter( item => item.category.toLowerCase().includes(searchQuery.toLowerCase()) || item.name.toLocaleLowerCase().includes(searchQuery.toLowerCase()));

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


{/* SEARCHBAR */}
      <div className="search">
        <input
          type="text"
          placeholder="Search products..."
           value={searchQuery}
           onChange={(e) => setSearchQuery(e.target.value)}
        />
        <p className="searchResult"> {searchFilter.length} Products found. </p>
      </div>

{/* ITEM CARDS */}
      <section className="item-grid">
        
        {(searchFilter.length > 0) ? (
          searchFilter.map(item => (
          <ItemCard key={item.id} item={item} />
          ))
        ) : (
          <p className="empty">No products match that search term. Try another keyword.</p>
        )}

      </section>
    </main>
  );
}

export default Home;
