import { useEffect, useState } from "react";
import axios from "axios";
import DiscountProducts from "./DiscountProducts.jsx";
import "./HomeDiscount.css";

export default function HomeDiscount() {
    const [discountProducts, setDiscountProducts] = useState([]);

    useEffect(() => {
        // Функция для получения данных с backend
        const fetchDiscountProducts = async () => {
            try {
                const response = await axios.get('http://localhost:4444/api/products', {withCredentials: true});
                // Фильтруем товары с наличием скидки
                const productsWithDiscount = response.data.filter(product => product.discount);
                setDiscountProducts(productsWithDiscount);
            } catch (error) {
                console.error("Ошибка при получении товаров:", error);
            }
        };

        fetchDiscountProducts();
    }, []);

    return (
      <section className='discount-section'>
          <div className="container">
              <div className="discount-common-title">Хиты продаж</div>
              <div className="discount-items">
                  {discountProducts.map(product =>
                    <DiscountProducts key={product.id} {...product} product={product} />
                  )}
              </div>
          </div>
      </section>
    );
}
