import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Sphere() {
    const mesh = useRef<THREE.Mesh | null>(null);

    useFrame(({ mouse }) => {
        if (!mesh.current) return;

        mesh.current.rotation.y = mouse.x * 2;
        mesh.current.rotation.x = mouse.y * 2;
    });

    return (
        <mesh ref={mesh}>
            <sphereGeometry args={[2, 64, 64]} />
            <meshStandardMaterial wireframe color="white" />
        </mesh>
    );
}

export default function Scene() {
    return (
        <Canvas className="absolute inset-0 -z-10">
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Sphere />
        </Canvas>
    );
}