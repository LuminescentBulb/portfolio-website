import { useState } from 'react';
import { useWeather } from './WeatherContext';

export default function Footer() {
    const { weather, isLoading } = useWeather();
    const [imgError, setImgError] = useState(false);

    return (
        <footer className="relative z-30 border-t border-slate-800/50 bg-slate-950/30 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    {/* Left - Copyright & Social Links */}
                    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                        <p className="text-slate-400 text-sm">
                            © 2026 Taemin Kim. All rights reserved.
                        </p>
                    </div>

                    {/* Right - Weather Display */}
                    {!isLoading && weather && (
                        <div className="flex items-center space-x-3 text-sm bg-slate-900/50 px-4 py-2 rounded-lg border border-slate-700/50">
                                {weather.iconUrl && !imgError ? (
                                    <img
                                        src={weather.iconUrl}
                                        alt={weather.description}
                                        className="w-8 h-8"
                                        onError={() => setImgError(true)}
                                    />
                                ) : (
                                    <span className="text-xl" aria-hidden>
                                        {getFallbackEmoji(weather.condition)}
                                    </span>
                                )}

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

    function getFallbackEmoji(condition?: string) {
        switch (condition) {
            case 'clear':
                return '☀️';
            case 'clouds':
                return '☁️';
            case 'rain':
            case 'drizzle':
                return '🌧️';
            case 'snow':
                return '❄️';
            case 'thunderstorm':
                return '⛈️';
            case 'mist':
            case 'fog':
            case 'haze':
                return '🌫️';
            case 'smoke':
                return '💨';
            case 'sand':
            case 'dust':
            case 'ash':
                return '🌪️';
            case 'squall':
                return '🌬️';
            case 'tornado':
                return '🌪️';
            default:
                return '❔';
        }
    }