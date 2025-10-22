import { ChevronDown, Mail, ArrowRight } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { FaLinkedin } from "react-icons/fa";
import { useState, useEffect, useMemo } from "react";
import { MdEmail } from "react-icons/md";

// Korean jamo constants
const HANGUL_START = 0xAC00;
const JONGSEONG_COUNT = 28;
const JUNGSEONG_COUNT = 21;

// Decompose a Korean syllable into its jamos
function decomposeHangul(char: string): string[] {
    const code = char.charCodeAt(0);

    if (code < 0xAC00 || code > 0xD7A3) {
        // Not a Korean syllable, return as-is
        return [char];
    }

    const syllableIndex = code - HANGUL_START;
    const jongseongIndex = syllableIndex % JONGSEONG_COUNT;
    const jungseongIndex = ((syllableIndex - jongseongIndex) / JONGSEONG_COUNT) % JUNGSEONG_COUNT;
    const choseongIndex = ((syllableIndex - jongseongIndex) / JONGSEONG_COUNT - jungseongIndex) / JUNGSEONG_COUNT;

    const choseong = String.fromCharCode(0x1100 + choseongIndex);
    const jungseong = String.fromCharCode(0x1161 + jungseongIndex);
    const jongseong = jongseongIndex > 0 ? String.fromCharCode(0x11A7 + jongseongIndex) : '';

    // Return progressive states
    const states = [choseong];
    states.push(choseong + jungseong);
    if (jongseong) {
        states.push(choseong + jungseong + jongseong);
    }

    return states;
}

function createTypingSequence(text: string): string[] {
    const sequence: string[] = [''];
    let currentText = '';

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const decomposed = decomposeHangul(char);

        for (const state of decomposed) {
            currentText = text.slice(0, i) + state;
            sequence.push(currentText);
        }
    }

    return sequence;
}

function createDeletingSequence(text: string): string[] {
    const sequence: string[] = [];

    for (let i = text.length; i >= 0; i--) {
        sequence.push(text.slice(0, i));
    }

    return sequence;
}

export default function SplitHeroSection() {
    const [heroNameIndex, setHeroNameIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [sequenceIndex, setSequenceIndex] = useState(0);

    const nameList = ["Taemin Kim", "김태민", "金泰旻"];
    const currentName = nameList[heroNameIndex];

    const typingSequence = useMemo(() => createTypingSequence(currentName), [currentName]);
    const deletingSequence = useMemo(() => createDeletingSequence(currentName), [currentName]);

    useEffect(() => {
        if (isPaused) {
            const pauseTimeout = setTimeout(() => {
                setIsPaused(false);
                setIsDeleting(true);
                setSequenceIndex(0); // Reset for deleting sequence
            }, 2000);
            return () => clearTimeout(pauseTimeout);
        }

        const currentSequence = isDeleting ? deletingSequence : typingSequence;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // Typing with construction
                if (sequenceIndex < typingSequence.length - 1) {
                    setSequenceIndex(sequenceIndex + 1);
                    setDisplayedText(typingSequence[sequenceIndex + 1]);
                } else {
                    // Finished typing
                    setIsPaused(true);
                }
            } else {
                // Deleting whole characters
                if (sequenceIndex < deletingSequence.length - 1) {
                    setSequenceIndex(sequenceIndex + 1);
                    setDisplayedText(deletingSequence[sequenceIndex + 1]);
                } else {
                    // Finished deleting, move to next name
                    setIsDeleting(false);
                    setHeroNameIndex((heroNameIndex + 1) % nameList.length);
                    setSequenceIndex(0);
                    setDisplayedText('');
                }
            }
        }, isDeleting ? 150 : 220);

        return () => clearTimeout(timeout);
    }, [sequenceIndex, isDeleting, isPaused, heroNameIndex, typingSequence, deletingSequence]);

    return (
        <section id="hero" className="relative min-h-screen w-full overflow-hidden pb-20 pt-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 min-h-screen">
                    {/* Left Side - About Me */}
                    <div className="flex flex-col justify-center px-8 md:px-12 lg:px-16 py-20 lg:py-0">
                        {/* Text Content */}
                        <div className="space-y-6">
                            <div>
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                                    <span className="text-white">
                                        {displayedText}
                                        <span className="inline-block w-1 h-[1em] bg-white ml-1 animate-pulse align-middle"
                                            style={{ verticalAlign: 'baseline' }}>
                                        </span>
                                    </span>
                                </h1>
                                <p className="text-xl md:text-2xl text-slate-300 mb-2">
                                    Data Science @ University of Michigan
                                </p>
                            </div>

                            <div className="space-y-4 text-slate-300 leading-relaxed max-w-xl">
                                <p>
                                    Hi, I'm a student from Portland, Oregon currently attending the University of Michigan with a strong interest in
                                    building <strong className="text-white">interactive systems</strong> that simulate
                                    society and human behavior! Passionate about exploring the intersection
                                    of sociology and technology.
                                </p>
                                <p>
                                    Feel free to connect me in one of my socials below or send me an email :)
                                </p>
                            </div>

                            {/* Social Links */}
                            <div className="flex items-center space-x-4 pt-6">
                                <a
                                    href="https://github.com/LuminescentBulb"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-all group"
                                    aria-label="GitHub"
                                >
                                    <SiGithub className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/taeminkm/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-all group"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                                </a>
                                <a
                                    href="mailto:taemin@stellux.org"
                                    target="_blank"
                                    className="p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-all group"
                                    aria-label="Email"
                                >
                                    <MdEmail className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - EU Dashboard Embed */}
                    <div className="relative flex items-center justify-center p-8 lg:p-12">
                        {/* Decorative Background */}
                        <div className="absolute inset-x-0 h-[500px] lg:h-[800px] bg-gradient-to-br from-yellow-50/35 to-yellow-900/35 rounded-2xl blur-xl" />
                        {/* Dashboard Container */}
                        <div className="relative w-full min-h-[500px] lg:min-h-[700px] bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl">
                            {/* Header Bar */}
                            <div className="bg-slate-800/80 border-b border-slate-700/50 px-4 py-3 flex items-center space-x-2">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="flex-1 mx-4 px-3 py-1 bg-slate-900/50 rounded text-xs text-slate-400 font-mono">
                                    eu-dashboard.stellux.org
                                </div>
                            </div>

                            {/* Embedded Dashboard */}
                            <div className="absolute inset-0 top-[49px]">
                                <iframe
                                    src="https://eu-dashboard.stellux.org/?embedded=true"
                                    className="w-full h-full border-0"
                                    title="EU Migration Dashboard"
                                    allowFullScreen
                                />
                            </div>

                            {/* Floating Info Badge */}
                            <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md rounded-lg p-4 border border-slate-700/50 shadow-xl">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-white font-semibold mb-1">
                                            EU Intra-Migration Dashboard
                                        </h3>
                                        <p className="text-xs text-slate-400">
                                            Interactive visualization • Real-time data • Policy insights
                                        </p>
                                    </div>
                                    <a
                                        href="https://eu-dashboard.stellux.org"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors flex items-center space-x-2 whitespace-nowrap"
                                    >
                                        <span>Open Full</span>
                                        <ArrowRight className="w-3 h-3" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}