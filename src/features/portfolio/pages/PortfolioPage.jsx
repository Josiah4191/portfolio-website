import Hero from "../components/hero/Hero.jsx";
import Projects from "../components/projects/Projects.jsx";
import About from "../components/about/About.jsx";
import Stack from "../components/stack/Stack.jsx";
import SectionDivider from "../../../shared/components/SectionDivider.jsx";

export default function PortfolioPage() {
    return (
        <>
            <Hero/>
            <SectionDivider />
            <Projects/>
            <SectionDivider />
            <About/>
            <SectionDivider />
            <Stack/>
        </>
    );
}