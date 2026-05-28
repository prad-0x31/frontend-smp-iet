import { Link } from "react-router-dom";
import PurchaseButton from './PurchaseButton'
import RatingWidget from './RatingWidget'

export default function ItemCard ({item}) {
    return (
    <div className="item-card">
        <div className="RatingWidget">
                <RatingWidget />
        </div>

        <Link to={`/item/${item.id}`}>
            <div className="item-card-image">
                <img src={item.image} alt={item.name} />
                <span className="item-card-label">{item.category}</span>
            </div>
        </Link>
            <div className="item-card-body">
                <Link to={`/item/${item.id}`} className="item-name">
                    {item.name}
                </Link>
                <p className="item-desc line-clamp-2">{item.description}</p>
            </div>

            <div className="item-card-footer">
                <div>
                   <span className="item-price">₹{item.price}</span>
                   <span className="item-meta">Free Delivery</span>
                </div>
                <div className="item-card-actions">
                    <PurchaseButton item={item} /> 
                </div>
            </div>            
    </div>
    );
}