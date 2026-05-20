const NAV_ITEMS = [
  { label: "Shop" },
  { label: "Collections" },
  { label: "About" },
  { label: "Contact" },
];

function Headbar() {
  return (
    <header className="header">
      <div className="header-brand">
        <span className="brand-mark">MS</span>
        <div>
          <span className="brand-name">MiniShop</span>
          <span className="brand-tagline">
            Curated essentials, better shopping
          </span>
        </div>
      </div>

      <nav className="header-nav">
        {NAV_ITEMS.map((item) => (
          <span key={item.label} className="nav-link">
            {item.label}
          </span>
        ))}
      </nav>

      <div className="header-actions">
        <button type="button" className="btn btn-sm btn-ghost" disabled>
          Sign In
        </button>
      </div>
    </header>
  );
}

export default Headbar;
