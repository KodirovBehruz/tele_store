import React from 'react';
import "./BasketSection.css"
import "../../atoms/Button/Button.css"
import { useBasket } from '../../../hooks/useBasket.js';
import { useActions } from '../../../hooks/useActions.js';
import { FaTrash } from 'react-icons/fa';

export default function BasketSection() {
    const { basket } = useBasket();
    const { removeItem } = useActions();

    const summa = basket.reduce((sum, item) => {
        const itemPrice = item.discount
            ? item.price - (item.price * item.discount) / 100
            : item.price;
        return sum + itemPrice;
    }, 0)

    return (
        <section className='basket-section'>
            {basket.length === 0 ? (
                <>
                    <h1>Корзина пуста</h1>
                    <div className='basket-items'></div>
                    <img src='../../../../public/dont-have-icon.png' alt='Dont have icon' />
                </>
            ) : (
                <div className='basket-items'>
                    {basket.map((item) => (
                        <div key={item.id} className='basket-item'>
                            <img src={item.image} alt={item.text} />
                            <div className='basket-item-text'>{item.text}
                        </div>
                            {item.discount && (
                                <div className="basket-item-price">{item.price - (item.price * item.discount) / 100} $</div>
                            )}
                            {!item.discount && <div className="basket-item-price">{item.price} $</div>}
                            <FaTrash className='basket-delete-icon' onClick={() => removeItem(item.id)} />
                        </div>
                    ))}
                    <p className='basket-item-summa'>Сумма: {summa.toFixed(2)}$</p>
                </div>

            )}
        </section>
    );
}
