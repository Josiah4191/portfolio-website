import Hero from "../components/hero/Hero.jsx";
import Projects from "../components/projects/Projects.jsx";
import About from "../components/about/About.jsx";
import Stack from "../components/stack/Stack.jsx";

export default function PortfolioPage() {
    return (
        <>
            <Hero/>
            <hr className="section-divider" aria-hidden="true"/>
            <Projects/>
            <hr className="section-divider" aria-hidden="true"/>
            <About/>
            <hr className="section-divider" aria-hidden="true"/>
            <Stack/>
        </>
    );
}