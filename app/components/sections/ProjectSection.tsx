import { ExternalLink, ArrowRight, Database, BarChart3, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SiGithub } from "@icons-pack/react-simple-icons";

export default function ProjectsSection() {
    const [visibleProjects, setVisibleProjects] = useState([]);
    const projectRefs = useRef([]);

    const projects = [
        {
            id: 1,
            title: "EU Intra-Migration Dashboard",
            description: "Interactive visualization of European migration flows (2004-2023) with time-series animation, country drill-downs, and rankings. Built with React, TypeScript, and deck.gl to explore demographic and economic shifts.",
            image: "https://cdn.portfolio.stellux.org/portfolio/projects/EU.png",
            type: "image",
            tags: ["React", "Deck.gl", "MapLibre", "TypeScript", "Python", "Pandas"],
            status: "Completed/In Development",
            liveUrl: "https://eu-dashboard.stellux.org",
            githubUrl: "https://github.com/LuminescentBulb/intra-eu-migration",
            featured: true,
            gradient: "from-blue-500/10 to-purple-600/10",
            icon: Globe,
            direction: "left",
        },
        {
            id: 2,
            title: "Circadian",
            description: "iOS sleep tracking app with gamified features like streaks and leaderboards. Combines Swift frontend with Go backend, integrating Apple HealthKit and Calendar APIs for AI-assisted sleep schedule suggestions.",
            image: "https://cdn.portfolio.stellux.org/portfolio/projects/circadiantest.png",
            type: "image",
            tags: ["Swift", "Go", "PostgreSQL", "Docker", "HealthKit"],
            status: "In Development",
            gradient: "from-purple-500/10 to-indigo-600/10",
            icon: Database,
            direction: "right",
        },
        {
            id: 3,
            title: "Distributed Search Engine",
            description: "Scalable search engine using Hadoop-style MapReduce with Manager-Worker system. 7-stage pipeline with tf-idf weighting, PageRank integration, and RESTful API for parallel shard queries.",
            image: "https://cdn.portfolio.stellux.org/portfolio/projects/search.png",
            type: "image",
            tags: ["Python", "Hadoop", "Flask", "MapReduce", "REST API"],
            status: "Completed",
            gradient: "from-orange-500/10 to-red-600/10",
            icon: BarChart3,
            direction: "left",
        },
        {
            id: 4,
            title: "Social Media App",
            description: "Full-stack social media app with Flask backend and React frontend. Implemented authentication, CRUD operations, infinite scroll, real-time likes, and commenting features.",
            image: "https://cdn.portfolio.stellux.org/portfolio/projects/social.png",
            type: "image",
            tags: ["Flask", "React", "SQLite", "REST API"],
            status: "Completed",
            gradient: "from-pink-500/10 to-rose-600/10",
            icon: Globe,
            direction: "right",
        },
        {
            id: 5,
            title: "Dishes to Data",
            description: "Statistical analysis of 80,000+ Food.com recipes examining how nutritional content affects ratings. Implemented ETL pipeline and missingness analysis.",
            image: "https://cdn.portfolio.stellux.org/portfolio/projects/data.png",
            type: "image",
            tags: ["Python", "pandas", "scikit-learn", "Data Analysis", "ML"],
            githubUrl: "https://github.com/LuminescentBulb/dishes-to-data",
            status: "Completed",
            gradient: "from-amber-500/10 to-orange-600/10",
            icon: BarChart3,
            direction: "left",
        }
    ];

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        projectRefs.current.forEach((ref, index) => {
            if (!ref) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setVisibleProjects((prev) => {
                                if (!prev.includes(index)) {
                                    return [...prev, index];
                                }
                                return prev;
                            });
                        }
                    });
                },
                {
                    threshold: 0.2,
                    rootMargin: "0px",
                }
            );

            observer.observe(ref);
            observers.push(observer);
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, []);

    // @ts-ignore
    return (
        <section id="projects" className="min-h-screen px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 project-header-animate">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        My Projects!
                    </h2>
                </div>

                <div className="space-y-24">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            ref={(el) => projectRefs.current[index] = el}
                            className={`group relative flex flex-col lg:flex gap-8 items-center transition-all duration-1000 ${project.direction === "left" ? "lg:flex-row" : "lg:flex-row-reverse"
                                } ${visibleProjects.includes(index)
                                    ? "project-visible"
                                    : project.direction === "left"
                                        ? "project-hidden-left"
                                        : "project-hidden-right"
                                }`}
                        >
                            <div className="w-full lg:w-1/2">
                                <div className="relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/50 backdrop-blur-sm shadow-2xl group-hover:shadow-blue-500/10 transition-all duration-500 group-hover:scale-[1.02]">
                                    {project.status && (
                                        <div className="absolute top-4 left-4 z-20">
                                            <span className="px-3 py-1 bg-purple-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                                                {project.status}
                                            </span>
                                        </div>
                                    )}

                                    <div className={`relative bg-gradient-to-br ${project.gradient} min-h-[400px]`}>
                                        {project.type === "iframe" && (
                                            <iframe
                                                src={project.image}
                                                className="w-full h-[400px] border-0"
                                                title={project.title}
                                            />
                                        )}
                                        {project.type === "image" && (
                                            <img
                                                src={project.image}
                                                className="w-full h-[400px] object-cover border-0"
                                                alt={project.title}
                                                title={project.title}
                                            />
                                        )}
                                    </div>

                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2 space-y-6">
                                <div>
                                    <div className="flex items-center space-x-3 mb-3">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <p className="text-slate-300 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-lg text-sm transform transition-all duration-300 hover:scale-110 hover:bg-slate-700/50"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center space-x-2 px-5 py-2.5 bg-amber-50 hover:from-blue-600 hover:to-purple-700 text-black rounded-lg font-medium transition-all shadow-lg hover:shadow-xl group/btn"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            <span>View</span>
                                            <ArrowRight className="w-4 h-4 project-arrow-slide" />
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center space-x-2 px-5 py-2.5 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 text-white rounded-lg font-medium transition-all hover:scale-105"
                                        >
                                            <SiGithub className="w-4 h-4" />
                                            <span>Source</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}