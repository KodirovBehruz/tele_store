import {catalogProducts} from "../data.js";
import DiscountProducts from "./DiscountProducts.jsx";
import "./HomeDiscount.css"

export default function HomeDiscount() {
    const discountProducts = catalogProducts.filter(product => product.discount)
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
    )
}