// routes/home.tsx
import type { Route } from "./+types/home";
import HeroSection from "../components/sections/HeroSection";
import WeatherBackground from "~/components/sections/background";
import ProjectsSection from "~/components/sections/ProjectSection";
import TransparentNavbar from "~/components/navbar";
import ExperienceSection from "~/components/sections/ExperienceSection";
import MapSection from "~/components/sections/MapSection";
import {WeatherProvider} from "~/components/WeatherContext";
import Footer from "~/components/Footer";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Taemin Kim - Data Science Portfolio" },
        {
            name: "description",
            content: "Data Science student at University of Michigan. Specializing in data visualization, simulation modeling, and applied analytics."
        },
        {
            name: "keywords",
            content: "data science, data visualization, simulation modeling, policy research, University of Michigan, React, Python"
        },
    ];
}

export default function Home() {
    return (
        <WeatherProvider>
            <WeatherBackground>
                <TransparentNavbar />
                <HeroSection />
                <ProjectsSection />
                <ExperienceSection />
                <MapSection />
            </WeatherBackground>
            <Footer />
        </WeatherProvider>
    );
}
