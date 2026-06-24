import {useLocation} from "react-router-dom";
import {useEffect} from "react";

export default function ScrollToHash() {
    const location = useLocation()

    useEffect(() => {
        const id = location.hash.substring(1);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth"});
        } else {
            window.scrollTo( {top: 0});
        }
    }, [location]);

    return null;
}