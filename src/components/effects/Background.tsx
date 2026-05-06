import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

function Cube() {
    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="white" wireframe />
            </mesh>
        </Float>
    );
}

export default function Background() {
    return (
        <Canvas className="absolute inset-0 -z-10">
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 2]} />
            <Cube />
            <OrbitControls enableZoom={false} />
        </Canvas>
    );
}