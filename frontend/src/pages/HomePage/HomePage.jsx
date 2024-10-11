import "../../../index.css"
import "./HomePage.css"

export default function HomePage() {
    return (
        <section className='home-section'>
            <div className="container">
                <div className="home-info">
                    <div className="home-title">Новая техника — новые возможности! Ваш идеальный ноутбук и телефон ждут
                        вас!
                    </div>
                    <div className="home-text">Добро пожаловать в наш магазин техники, где новейшие ноутбуки и телефоны
                        превращают мечты в реальность! Хотите мощный ноутбук для работы и игр? Или стильный и
                        производительный телефон для повседневных задач и развлечений? У нас есть всё, что вам нужно!
                    </div>
                </div>
                <div className="home-image-container">
                    <img src="/bg-line.png" alt="Line" className='bg-line' />
                </div>
            </div>
        </section>
    )
}