import CatalogProducts from "./CatalogProducts.jsx";
import "./CatalogPage.css"
import axios from "axios";
import {useEffect, useState} from "react";

export default function CatalogPage() {
    const [catalogProducts, setCatalogProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:4444/api/products');
                const products = response.data;
                setCatalogProducts(products);
            } catch (error) {
                console.error("Ошибка при получении товаров:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <section className='catalog'>
            <div className="container">
                <div className="catalog-common-title">Каталог</div>
                <div className="catalog-items">
                    {catalogProducts.map(product =>
                        <CatalogProducts key={product.id} {...product} product={product} />
                    )}
                </div>
            </div>
        </section>
    )
}