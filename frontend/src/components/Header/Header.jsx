import "./Header.css"
import {useState} from "react";
import Favorites from "./Favorites.jsx";
import Basket from "./Basket.jsx";
import {Link} from "react-router-dom";
import { FaList } from "react-icons/fa";
import Button from "../Button/Button.jsx";
import {HelpSection} from "../HelpSection/HelpSection.jsx";
import ContactSection from "../ContactSection/ContactSection.jsx";


export default function Header() {
    let [favoritesOpen, setFavoritesOpen] = useState(false);
    let [cartOpen, setCartOpen] = useState(false);
    let [helpOpen, setHelpOpen] = useState(false);
    let [contactOpen, setContactOpen] = useState(false);

    return (
        <nav className="header">
            <div className='container'>
                <div className="logo">
                    <h1><Link to="/" className='logo-text'>GLANCE</Link></h1>
                </div>

                <Button className='button menu-button'>
                    <Link to="/catalog" className='nav-link'>
                        <FaList className='catalog-icon'/>
                        <span>Каталог</span>
                    </Link>
                </Button>

                <div className="search-fields">
                    <input type="text" placeholder='Введите название товара'/>
                </div>

                <div className="menu">
                    <ul>
                        <li className="help-icon" onClick={() => setHelpOpen(helpOpen = !helpOpen)}>Помощь</li>
                        {helpOpen && <HelpSection />}

                        <li onClick={() => setContactOpen(contactOpen = !contactOpen) }>Контакты</li>
                        {contactOpen && <ContactSection />}

                        <li className="cart-icon" onClick={() => setCartOpen(cartOpen = !cartOpen)}>Корзина</li>
                        {cartOpen && <Basket/>}

                        <li className="favorites-icon"
                            onClick={() => setFavoritesOpen(favoritesOpen = !favoritesOpen)}>Избранное
                        </li>
                        {favoritesOpen && <Favorites/>}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
