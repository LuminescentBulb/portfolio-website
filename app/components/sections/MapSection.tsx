import { MapPin, Construction } from "lucide-react";

export default function MapSection() {
    return (
        <section id="map" className="min-h-screen py-20 px-4 flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center">
                {/* Construction Icon */}
                <div className="flex justify-center mb-8">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-600/20 rounded-full blur-3xl" />
                        <div className="relative p-8 bg-slate-900/50 backdrop-blur-sm rounded-full border border-slate-700/50">
                            <Construction className="w-16 h-16 text-yellow-500 animate-pulse" />
                        </div>
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Under Construction
                </h2>

                {/* Description */}
                <div className="flex items-center justify-center space-x-2 text-2xl text-slate-300 mb-8">
                    <MapPin className="w-6 h-6 text-blue-400" />
                    <span>Map of the World Coming Soon!</span>
                    <span className="text-4xl">🗺️</span>
                </div>

                {/* Subtitle */}
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                    An interactive visualization is in the works. Stay tuned!
                </p>
                
            </div>
        </section>
    );
}