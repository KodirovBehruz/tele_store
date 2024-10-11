import "./HomeDiscount.css";
import Button from "../Button/Button.jsx";
import { useEffect, useState } from "react";
import { useActions } from "../../hooks/useActions.js";
import { useFavorites } from "../../hooks/useFavorites.js";
import "../Button/Button.css";
import fav_true from "../../assets/favorites-icon-true.png"
import fav_false from "../../assets/favorites_icon_false.png"

export default function DiscountProducts({ image, text, price, discount, inStock, product }) {
    const { toggleBasket, toggleFavorites } = useActions();
    const { favorites } = useFavorites();
    const [addToFavorites, setAddToFavorites] = useState(false);

    useEffect(() => {
        const isFavorite = favorites.some(item => item.id === product.id);
        setAddToFavorites(isFavorite);
    }, [favorites, product.id]);

    const handleFavoritesClick = () => {
        setAddToFavorites(!addToFavorites);
        toggleFavorites(product);
    };

    return (
        <div className="discount-item">
            <div className="discount-item-image">
                <img src={image} alt="DisImage" />
            </div>

            <div className="discount-item-details">
                <div className="discount-item-text">{text}</div>
            </div>

            <div className="discount-item-extra">
                <div className="percent-of-discount">{discount} %</div>
                <div className="discount-item-price"><s>{price} $</s></div>
                <div className="discount-item-price">{price - (price * discount) / 100} $</div>
                <div className="discount-item-instock">{inStock ? 'В наличии' : "нет в наличии"}</div>
                <div className="discount-item-favorites" onClick={handleFavoritesClick}>
                    {addToFavorites
                        ? <img src={fav_true} alt="favImage-true" />
                        : <img src={fav_false} alt="favImage-false" />
                    }
                </div>
            </div>
            <div>
                <Button className="button" onClick={() => toggleBasket(product)}>В корзину</Button>
            </div>
        </div>
    );
}
