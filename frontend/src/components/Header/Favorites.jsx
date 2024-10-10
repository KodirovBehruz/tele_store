import React, {useState} from 'react';
import './Header.css';
import "../Button/Button.css"
import { useFavorites } from "../../hooks/useFavorites"
import { useActions } from "../../hooks/useActions";
import {FaTrash} from "react-icons/fa";
import { MdClose } from "react-icons/md";


export default function Favorites() {
    const { favorites } = useFavorites();
    const { removeItem } = useActions();
    const [favoritesClose, setFavoritesClose] = useState(true);
    if (!favoritesClose) return null

    return (
        <section className='favorites-section'>
            <div>
                <div className="close">
                    <MdClose className='favorites-close-icon' onClick={() => setFavoritesClose(false)} />
                </div>
                {favorites.length === 0 ? (
                    <>
                        <h1>Список избранных пуст!</h1>
                        <div className='favorites-items'></div>
                        <img src='public/dont-have-icon.png' alt='Dont have icon' />
                    </>
                ) : (
                    <div className='favorites-items'>
                        <h1>Список избранных</h1>
                        {favorites.map((item) => (
                            <div key={item.id} className='favorites-item'>
                                <img src={item.image} alt={item.text}/>
                                <div className='favorites-item-text'>{item.text}</div>
                                {item.discount && (
                                    <div
                                        className="favorites-item-price">{item.price - (item.price * item.discount) / 100} $</div>
                                )}
                                {!item.discount && <div className="favorites-item-price">{item.price} $</div>}
                                <FaTrash className='favorites-delete-icon' onClick={() => removeItem(item.id)}/>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
