import { useState, useEffect } from 'react';

// Weather types
type WeatherCondition = 'clear' | 'clouds' | 'rain' | 'drizzle' | 'snow' | 'thunderstorm';

interface WeatherData {
    condition: WeatherCondition;
    temp: number;
    description: string;
}

export default function WeatherBackground({ children }: { children: React.ReactNode }) {
    const [weather, setWeather] = useState<WeatherData | null>(null);

    // Fetch Portland weather
    useEffect(() => {
        async function fetchWeather() {
            try {
                const response = await fetch('https://weather-boy.bprhzccdfw.workers.dev/');
                const data = await response.json();

                const condition = data.weather[0].main.toLowerCase() as WeatherCondition;
                setWeather({
                    condition,
                    temp: Math.round(data.main.temp),
                    description: data.weather[0].description,
                });
            } catch (error) {
                console.error('Failed to fetch weather:', error);
                // Demo mode
                setWeather({ condition: 'rain', temp: 55, description: 'light rain' });
            }
        }

        fetchWeather();
        const interval = setInterval(fetchWeather, 30 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950/20 to-purple-950/20">
            {/* Rain video overlay (rain & drizzle) */}
            {(weather?.condition === 'rain' || weather?.condition === 'drizzle') && (
                <div className="fixed inset-0 pointer-events-none z-10">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover"
                        style={{
                            opacity: 0.4,
                            mixBlendMode: 'screen',
                            filter: 'brightness(0.7) contrast(1.2)',
                        }}
                        onLoadedData={(e) => {
                            const video = e.currentTarget;
                            video.play().catch(err => console.log('Video play error:', err));
                        }}
                    >
                        <source
                            src="https://cdn.portfolio.stellux.org/portfolio/background/rain.mp4"
                            type="video/mp4"
                        />
                    </video>

                    {/* Dark overlay to maintain readability */}
                    <div className="absolute inset-0 bg-slate-950/30" />
                </div>
            )}

            {/* Cloudy video overlay */}
            {weather?.condition === 'clouds' && (
                <div className="fixed inset-0 pointer-events-none z-10">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover"
                        style={{
                            opacity: 0.3,
                            mixBlendMode: 'overlay',
                            filter: 'brightness(0.8) contrast(1.0)',
                        }}
                        onLoadedData={(e) => {
                            const video = e.currentTarget;
                            video.play().catch(err => console.log('Video play error:', err));
                        }}
                    >
                        <source
                            src="https://cdn.portfolio.stellux.org/portfolio/background/cloud.mp4"
                            type="video/mp4"
                        />
                    </video>

                    {/* Subtle overlay for clouds */}
                    <div className="absolute inset-0 bg-slate-950/20" />
                </div>
            )}

            {/* Snow video overlay */}
            {weather?.condition === 'snow' && (
                <div className="fixed inset-0 pointer-events-none z-10">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover"
                        style={{
                            opacity: 0.5,
                            mixBlendMode: 'screen',
                            filter: 'brightness(0.9) contrast(1.1)',
                        }}
                        onLoadedData={(e) => {
                            const video = e.currentTarget;
                            video.play().catch(err => console.log('Video play error:', err));
                        }}
                    >
                        <source
                            src="https://cdn.portfolio.stellux.org/portfolio/background/snow.mp4"
                            type="video/mp4"
                        />
                    </video>

                    {/* Dark overlay to maintain readability */}
                    <div className="absolute inset-0 bg-slate-950/20" />
                </div>
            )}

            {/* Thunderstorm: Rain video + Lightning flashes */}
            {weather?.condition === 'thunderstorm' && (
                <div className="fixed inset-0 pointer-events-none z-10">
                    {/* Rain video */}
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover"
                        style={{
                            opacity: 0.5,
                            mixBlendMode: 'screen',
                            filter: 'brightness(0.6) contrast(1.3)',
                        }}
                        onLoadedData={(e) => {
                            const video = e.currentTarget;
                            video.play().catch(err => console.log('Video play error:', err));
                        }}
                    >
                        <source
                            src="https://cdn.pixabay.com/video/2023/06/22/168313-838656609_large.mp4"
                            type="video/mp4"
                        />
                    </video>

                    {/* Lightning flash effect */}
                    <div className="absolute inset-0 bg-white opacity-0 animate-lightning" />

                    {/* Extra dark overlay for storm */}
                    <div className="absolute inset-0 bg-slate-950/50" />
                </div>
            )}

            {/* Weather badge */}
            {weather && (
                <div className="fixed top-4 right-4 bg-slate-900/80 backdrop-blur-md rounded-lg px-4 py-2 border border-slate-700/50 z-50 shadow-xl">
                    <div className="flex items-center space-x-3">
                        <div className="text-2xl">
                            {weather.condition === 'clear' && '☀️'}
                            {weather.condition === 'clouds' && '☁️'}
                            {(weather.condition === 'rain' || weather.condition === 'drizzle') && '🌧️'}
                            {weather.condition === 'snow' && '❄️'}
                            {weather.condition === 'thunderstorm' && '⛈️'}
                        </div>
                        <div>
                            <div className="text-white font-semibold">{weather.temp}°C</div>
                            <div className="text-xs text-slate-400 capitalize">{weather.description}</div>
                        </div>
                        <div className="text-xs text-slate-500">Portland</div>
                    </div>
                </div>
            )}

            {/* Content - ensure it's above the video */}
            <div className="relative z-20">
                {children}
            </div>
        </div>
    );
}