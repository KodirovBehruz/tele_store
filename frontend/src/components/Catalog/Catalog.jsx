import {catalogProducts} from "../data.js";
import CatalogProducts from "./CatalogProducts.jsx";
import "./Catalog.css"

export default function Catalog() {
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