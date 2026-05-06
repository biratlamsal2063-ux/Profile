import { profile } from "../../data/profile";
import MagneticButton from "../ui/MagneticButton";

export default function Hero() {
    return (
        <section className="h-screen flex flex-col items-center justify-center text-center">

            <img
                src={profile.profileImage}
                className="w-32 h-32 rounded-full mb-6"
            />

            <h1 className="text-6xl font-bold">{profile.name}</h1>

            <p className="mt-4 text-gray-400">{profile.role}</p>

            <div className="mt-6">
                <MagneticButton>View Work</MagneticButton>
            </div>

        </section>
    );
}