import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Scene from "./components/three/Scene";
import Cursor from "./components/ui/Cursor";

export default function App() {
  return (
    <div>
      <Cursor />
      <Scene />
      <Hero />
      <Projects />
    </div>
  );
}