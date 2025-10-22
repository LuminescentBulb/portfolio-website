import { Briefcase, GraduationCap, Code, Users, Calendar } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ExperienceSection() {
    const [visibleItems, setVisibleItems] = useState([]);
    const itemRefs = useRef([]);

    const experiences = [
        {
            id: 1,
            title: "Lead Developer",
            organization: "Michigan EcoData",
            type: "Leadership",
            date: "Aug 2024 - Present",
            location: "Ann Arbor, MI",
            description: [
                "Co-led 8-person team collaborating with Office of Campus Sustainability, Radial Power, and Students for Clean Energy on education modules for multi-phase solar rollout",
                "Developed and deployed website using Next.js and React with plans to integrate Supabase DB for authentication and data collection",
                "Coordinated technical workshops and compiled tutorial documentation to onboard 15+ new contributors to organization"
            ],
            icon: Users,
            gradient: "from-green-500/10 to-emerald-600/10",
        },
        {
            id: 2,
            title: "iOS Developer",
            organization: "Circadian (Capstone Project)",
            type: "Leadership",
            date: "Aug 2025 - Present",
            location: "Ann Arbor, MI",
            description: [
                "Led development of iOS sleep tracking app in 6-member Agile team, combining Swift frontend and Docker Compose-managed Go backend",
                "Implemented account management, authentication, onboarding flow, and friend-network neighborhoods with gamified features",
                "Integrated Apple HealthKit and Google/Apple Calendar APIs to collect sleep data and generate AI-assisted sleep schedule suggestions via LLMs"
            ],
            icon: Code,
            gradient: "from-purple-500/10 to-indigo-600/10",
        }
    ];

    const courses = [
        {
            category: "Computer Science",
            classes: [
                "Data Structures & Algorithms",
                "Web Systems",
                "Mobile App Design & Development",
                "Computer Organization",
                "Computer Vision",
                "Computer Security"
            ]
        },
        {
            category: "Data Science & ML",
            classes: [
                "Machine Learning",
                "Practical Data Science",
                "Probabilities & Statistics"
            ]
        },
        {
            category: "Mathematics",
            classes: [
                "Multivariable Calculus",
                "Differential Equations",
                "Linear Algebra"
            ]
        }
    ];

    useEffect(() => {
        const observers = [];

        itemRefs.current.forEach((ref, index) => {
            if (!ref) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setVisibleItems((prev) => {
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

    return (
        <section id="experience" className="min-h-screen py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Experience & Education
                    </h2>
                </div>

                {/* Education Card */}
                <div className="mb-4">
                    <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 shadow-xl">
                        <div className="flex items-start space-x-4 mb-6">
                            <div className="p-3 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-xl">
                                <GraduationCap className="w-8 h-8 text-blue-400" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-white mb-2">University of Michigan</h3>
                                <p className="text-lg text-slate-300 mb-1">Bachelor of Science in Data Science</p>
                                <p className="text-sm text-slate-400 mb-2">Minor in Mathematics & Spanish</p>
                                <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                                    <span className="flex items-center space-x-1">
                                        <Calendar className="w-4 h-4" />
                                        <span>Expected May 2027</span>
                                    </span>
                                    <span>•</span>
                                    <span>GPA: 3.76 / 4.00</span>
                                    <span>•</span>
                                    <span>Ann Arbor, MI</span>
                                </div>
                            </div>
                        </div>

                        {/* Coursework */}
                        <div className="space-y-4 mt-6">
                            <h4 className="text-lg font-semibold text-white">Relevant Coursework</h4>
                            <div className="grid md:grid-cols-3 gap-6">
                                {courses.map((category, idx) => (
                                    <div key={idx}>
                                        <h5 className="text-sm font-semibold text-slate-400 mb-3">{category.category}</h5>
                                        <ul className="space-y-2">
                                            {category.classes.map((course, courseIdx) => (
                                                <li key={courseIdx} className="text-sm text-slate-300 flex items-start">
                                                    <span className="text-blue-400 mr-2">•</span>
                                                    <span>{course}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Experience Timeline */}
                <div className="grid md:grid-cols-2 gap-4">
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            ref={(el) => itemRefs.current[index] = el}
                            className={`transition-all duration-1000 ${visibleItems.includes(index)
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-16"
                                }`}
                        >
                            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 shadow-xl transition-all duration-300 h-full">
                                <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
                                    {/* Icon */}
                                    <div className={`p-4 bg-gradient-to-br ${exp.gradient} rounded-xl self-start`}>
                                        <exp.icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                            <div>
                                                <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                                                <p className="text-lg text-blue-400 mb-2">{exp.organization}</p>
                                            </div>
                                            <div className="text-sm text-slate-400">
                                                <div className="flex items-center space-x-2 mb-1">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{exp.date}</span>
                                                </div>
                                                <div className="text-slate-500">{exp.location}</div>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <ul className="space-y-3">
                                            {exp.description.map((item, idx) => (
                                                <li key={idx} className="flex items-start text-slate-300 leading-relaxed">
                                                    <span className="text-blue-400 mr-3 mt-1.5 text-xs">▸</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Skills Summary */}
                <div className="mt-4">
                    <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 shadow-xl">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                            <Briefcase className="w-6 h-6 text-purple-400" />
                            <span>Technical Skills</span>
                        </h3>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div>
                                <h4 className="text-sm font-semibold text-slate-400 mb-3">Languages</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["Python", "JavaScript", "TypeScript", "SQL", "C++", "C#", "C", "Go", "Swift"].map((skill) => (
                                        <span key={skill} className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-lg text-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold text-slate-400 mb-3">Frameworks & Tools</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["React", "Next.js", "Node.js", "Flask", "Docker", "Git", "Prisma", "AWS"].map((skill) => (
                                        <span key={skill} className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-lg text-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold text-slate-400 mb-3">Data Science</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["pandas", "NumPy", "scikit-learn", "PyTorch", "Plotly", "matplotlib"].map((skill) => (
                                        <span key={skill} className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-lg text-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}