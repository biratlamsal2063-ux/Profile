import { useEffect } from "react";

export default function Cursor() {
    useEffect(() => {
        const cursor = document.querySelector(".cursor") as HTMLElement;

        document.addEventListener("mousemove", (e) => {
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });
    }, []);

    return <div className="cursor"></div>;
}