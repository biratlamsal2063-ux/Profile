import { projects } from "../../data/projects";

export default function Projects() {
    return (
        <section className="section">
            <h2 className="text-4xl mb-10">Projects</h2>

            <div className="grid md:grid-cols-2 gap-10">
                {projects.map((p, i) => (
                    <div key={i} className="glass p-6 group">

                        <img
                            src={p.image}
                            className="rounded-lg mb-4 group-hover:scale-105 transition"
                        />

                        <h3 className="text-2xl">{p.name}</h3>
                        <p className="text-gray-400">{p.description}</p>

                        <a href={p.link} target="_blank">
                            View Project →
                        </a>

                    </div>
                ))}
            </div>
        </section>
    );
}