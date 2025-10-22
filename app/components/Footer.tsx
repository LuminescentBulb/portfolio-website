import { useWeather } from './WeatherContext';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    const { weather, isLoading } = useWeather();

    return (
        <footer className="relative z-30 border-t border-slate-800/50 bg-slate-950/30 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    {/* Left - Copyright & Social Links */}
                    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                        <p className="text-slate-400 text-sm">
                            © 2025 Taemin Kim. All rights reserved.
                        </p>
                    </div>

                    {/* Right - Weather Display */}
                    {!isLoading && weather && (
                        <div className="flex items-center space-x-3 text-sm bg-slate-900/50 px-4 py-2 rounded-lg border border-slate-700/50">
                            <span className="text-xl">
                                {weather.condition === 'clear' && '☀️'}
                                {weather.condition === 'clouds' && '☁️'}
                                {(weather.condition === 'rain' || weather.condition === 'drizzle') && '🌧️'}
                                {weather.condition === 'snow' && '❄️'}
                                {weather.condition === 'thunderstorm' && '⛈️'}
                            </span>
                            <div>
                                <div className="text-white font-medium">{weather.temp}°C</div>
                                <div className="text-slate-400 text-xs capitalize">{weather.description}</div>
                            </div>
                            <span className="text-slate-500 text-xs">Portland</span>
                        </div>
                    )}
                </div>
            </div>
        </footer>
    );
}