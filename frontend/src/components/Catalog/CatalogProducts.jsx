import "./Catalog.css"
import Button from "../Button/Button.jsx";
import "../Button/Button.css"
import {useState} from "react";
import {useActions} from "../../hooks/useActions";
import {useFavorites} from "../../hooks/useFavorites.js";
import {useEffect} from "react";
import fav_true from "../../assets/favorites-icon-true.png"
import fav_false from "../../assets/favorites_icon_false.png"



export default function CatalogProducts({ image, text, price, discount, inStock, product }) {
    const { toggleBasket, toggleFavorites  } = useActions();
    const { favorites } = useFavorites()
    const [addToFavorites, setAddToFavorites] = useState(false);

    useEffect(() => {
        const isFavorite = favorites.some(item => item.id === product.id);
        setAddToFavorites(isFavorite);
    }, [favorites, product.id]);

    const handleFavoritesClick = () => {
        toggleFavorites(product);
        setAddToFavorites(!addToFavorites);
    };

    return (
        <div className="catalog-item">
            <div className="catalog-item-image"><img src={image} alt="DisImage" /></div>
            <div className="catalog-item-details">
                <div className="catalog-item-text">{text}</div>
            </div>
            <div className="catalog-item-extra">
                {discount && (
                    <>
                        <div className="percent-of-discount">{discount} %</div>
                        <div className="catalog-item-price"><s>{price} $</s></div>
                        <div className="catalog-item-price">{price - (price * discount) / 100} $</div>
                    </>
                )}
                {!discount && <div className="catalog-item-price">{price} $</div>}
                <div className="catalog-item-instock">{inStock ? 'В наличии' : "нет в наличии"}</div>

                <div className="catalog-item-favorites" onClick={handleFavoritesClick}>
                    {addToFavorites
                        ? <img src={fav_true} alt="favImage-true"/>
                        : <img src={fav_false} alt="favImage-false"/>
                    }
                </div>
            </div>
            <div>
                <Button className='button' onClick={() => toggleBasket(product)}>В корзину</Button>
            </div>
        </div>
    );
}
