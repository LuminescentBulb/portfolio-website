// routes/home.tsx
import type { Route } from "./+types/home";
import HeroSection from "../components/sections/HeroSection";
import WeatherBackground from "~/components/sections/background";
import ProjectsSection from "~/components/sections/ProjectSection";

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
        <WeatherBackground>
            <HeroSection />
            <ProjectsSection />
        </WeatherBackground>
    );
}
