import "../../index.css"
import './HomeCategory.css'

export default function HomeCategory() {
    return (
        <section className='category'>
            <div className="container">
                <h1 className='category-common-title'>Популярные категории</h1>
                <div className="category-items">
                    <div className="category-item">
                        <div className="category-item-img">
                            <img src="public/smartphone.jpg" alt="Phone-Image"/>
                        </div>
                        <p className='category-item-text'>Смартфоны</p>
                    </div>
                    <div className="category-item">
                        <div className="category-item-img">
                            <img src="public/laptop.jpg" alt="Laptop-Image"/>
                        </div>
                        <p className='category-item-text'>Ноутбуки</p>
                    </div>
                    <div className="category-item">
                        <div className="category-item-img">
                            <img src="public/tv.jpg" alt="Tv-Image"/>
                        </div>
                        <p className='category-item-text'>Телевизоры</p>
                    </div>
                    <div className="category-item">
                        <div className="category-item-img">
                            <img src="public/watch.jpg" alt="Watch-Image"/>
                        </div>
                        <p className='category-item-text'>Умные часы</p>
                    </div>
                    <div className="category-item">
                        <div className="category-item-img">
                            <img src="public/airphone.jpg" alt="Airphone-Image"/>
                        </div>
                        <p className='category-item-text'>Наушники</p>
                    </div>
                    <div className="category-item">
                        <div className="category-item-img">
                            <img src="public/projector.jpg" alt="Projector-Image"/>
                        </div>
                        <p className='category-item-text'>Проекторы</p>
                    </div>
                </div>
            </div>
        </section>
    )
}