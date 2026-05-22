import './Contact.css';
import ContactCard from "./ContactCard.jsx";
import {SOCIAL_LINKS} from "../../data/Social-data.js";

export default function Contact() {
    return (
        <section id="contact" className="section">
            <div className="grid page-margin">
                <h1 className="h1 contact-title">contact</h1>
                <p className="contact-description">If you’d like to get in touch, the best way to reach me is by phone or email. You can also view the source code for many of my projects on GitHub.</p>
                <div className="contact-card-list">
                    {SOCIAL_LINKS.map((item) => <ContactCard key={item.id} {...item}/>)}
                </div>
            </div>
        </section>
    );
}