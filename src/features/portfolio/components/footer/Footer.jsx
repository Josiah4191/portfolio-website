import './Footer.css';
import {AtSign} from "lucide-react";

export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="grid page-margin">
                <div className="footer-content">
                    <AtSign className="footer-icon" aria-hidden="true"/>
                    <a className="type-nav-subtitle footer-email" href="mailto:Josiah4191@gmail.com">Josiah4191@gmail.com</a>
                </div>
            </div>
        </footer>
    );
}