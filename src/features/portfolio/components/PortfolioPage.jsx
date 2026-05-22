import Hero from "./hero/Hero.jsx";
import Projects from "./projects/Projects.jsx";
import About from "./about/About.jsx";
import Stack from "./stack/Stack.jsx";
import Contact from "./contact/Contact.jsx";

export default function PortfolioPage() {
    return (
        <>
            <Hero/>
            <hr className="divider"/>
            <Projects/>
            <hr className="divider"/>
            <About/>
            <hr className="divider"/>
            <Stack/>
        </>
    );
}