import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Background from "../components/effects/Background";

export default function Home() {
    return (
        <div className="relative">
            <Background />
            <Hero />
            <Projects />
        </div>
    );
}