import {MdClose} from "react-icons/md";
import {useState} from "react";
import ContactForm from "./ContactForm.jsx";
import "./ContactSection.css"

export default function ContactSection() {
    const [contactClose, setContactClose] = useState(true);
    if (!contactClose) return null
    return (
        <section className='contact-section'>
            <div>
                <div className="close">
                    <MdClose className='contact-close-icon' onClick={() => setContactClose(false)}></MdClose>
                </div>
                <h1 className='contact-section-title'>Обратная связь</h1>
                <ContactForm />
            </div>
        </section>
    )
}