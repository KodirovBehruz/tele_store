import React, {useState} from "react";
import Button from "../../atoms/Button/Button.jsx";
import {helpInformations} from "../../data.js";
import "./HelpSection.css"
import { MdClose } from "react-icons/md";

export function HelpSection() {
    const [helpContent, setHelpContent] = useState(null)
    const [helpClose, setHelpClose] = useState(true)
    if (!helpClose) return null;

    function handleHelpContent(type) {
        setHelpContent(type)
    }

    return (
        <section className='help-section'>
            <div>
                <div className="close">
                    <MdClose className='help-close-icon' onClick={() => setHelpClose(false)}></MdClose>
                </div>
                {/*<h1>Часто задаваемые вопросы</h1>*/}
                <div className='help-items'>
                    <Button className='help-button' onClick={() => handleHelpContent('using')}>Как пользоваться
                        мобильным приложением?</Button>
                    <Button className='help-button' onClick={() => handleHelpContent('notInStock')}>Что делать, если
                        товара нет в наличии?</Button>
                    <Button className='help-button' onClick={() => handleHelpContent('ordering')}>Как сделать
                        доставку?</Button>
                </div>
                <div className='help-content'>
                    {helpContent ? <p>{helpInformations[helpContent]}</p> :
                        <img src='../../../../public/dont-have-icon.png' className='help-content-image' alt='Dont have icon'/>}
                </div>
            </div>
        </section>
    )
}