import { useState, useEffect } from "react";

export default function TransparentNavbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    const sections = [
        { id: "hero", label: "Home" },
        { id: "projects", label: "Projects" },
        { id: "experience", label: "Experience" },
        { id: "about", label: "About" },
    ];

    return (
        <nav className="absolute top-0 left-0 right-0 z-40 bg-transparent">
            <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-12 py-8">
                <div className="flex items-center justify-between">
                    {/* Left side - Navigation Links */}
                    <div className="flex items-center space-x-8">
                        {/* Logo/Name */}
                        <button
                            onClick={() => scrollToSection("hero")}
                            className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
                        >
                            TK
                        </button>

                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center space-x-6">
                            {sections.slice(1).map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className="text-lg text-slate-300 hover:text-white transition-colors relative group"
                                >
                                    {section.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}