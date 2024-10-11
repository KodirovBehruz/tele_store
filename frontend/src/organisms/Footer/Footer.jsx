import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-items">
                        <div className="footer-item">
                            <h1 className='footer-item-title'>Режим работы:</h1>
                            <ul>
                                <li>Пн-Пт: с 8:00 до 22:00</li>
                                <li>Сб-Вс: с 9:00 до 19:00</li>
                                <li>Праздники: с 9:00 до 19:00</li>
                            </ul>
                        </div>
                        <div className="footer-item">
                            <h1 className="footer-item-title">КОНТАКТЫ</h1>
                            <ul>
                                <li>+992902569900</li>
                                <li>info@glance.by</li>
                                <li>Instagram</li>
                                <li>Facebook</li>
                            </ul>
                        </div>
                        <div className="footer-item">
                            <h1 className="footer-item-title">ИНФОРМАЦИЯ</h1>
                            <ul>
                                <li>О магазине</li>
                                <li>Контакты</li>
                                <li>Отзывы</li>
                                <li>Гарантии</li>
                            </ul>
                        </div>
                        <div className="footer-item">
                            <h1 className="footer-item-title">КЛИЕНТАМ</h1>
                            <ul>
                                <li>Войти</li>
                                <li>Корзина</li>
                                <li>Политика конфиденциальности</li>
                                <li>Сервисные центры</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-rights">
                        <p>© 2023-2024 Glance. Все права защищены.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
