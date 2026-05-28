import { Link } from "react-router-dom";
import items from "../data/items";
import ItemCard from "../components/ItemCard";
import { useState } from "react";



function Home() {

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [priceRangeLabel, setPriceRangeLabel] = useState('0-Infinity')

  function getPriceRange (label) {
    if (label === '0-Infinity') return [0, 100];
    if (label === '0-20') return [0, 20];
    if (label === '20-40') return [20, 40];
    if (label === '40-Infinity') return [40, 100];
  }

  const [minPrice, maxPrice] = getPriceRange(priceRangeLabel);

  const searchFilter = items.filter( item => {
    const matchesSearch = item.category.toLowerCase().includes(searchQuery.toLowerCase()) || item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || selectedCategory === item.category;
    const matchesPrices = (item.price >= minPrice) && (item.price <= maxPrice);

    return (matchesSearch && matchesCategory && matchesPrices);
  });
  const categories =['All Categories', ...new Set(items.map(item => item.category)) ];

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


{/* SEARCHBAR AND FILTERS*/}
    <div>
      <div className="snf">
        <div className="search">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>  
          <div className="filters">
            <select
              className="category-filter"
              value={selectedCategory}
              onChange={(e)=> setSelectedCategory(e.target.value)}
            > 
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>

            <select
              className="price-filter"
              value={priceRangeLabel}
              onChange={e => setPriceRangeLabel(e.target.value)}
            >
              <option value='0-Infinity'>All Prices</option>
              <option value='0-20'>Under ₹20</option>
              <option value='20-40'>₹20 - ₹40</option>
              <option value='40-Infinity'>Over ₹40</option>
            </select>
          </div>
      </div>
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
