import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type WeatherCondition =
    | 'clear'
    | 'clouds'
    | 'rain'
    | 'drizzle'
    | 'snow'
    | 'thunderstorm'
    | 'mist'
    | 'fog'
    | 'haze'
    | 'smoke'
    | 'sand'
    | 'dust'
    | 'ash'
    | 'squall'
    | 'tornado';

interface WeatherData {
    condition: WeatherCondition;
    temp: number;
    description: string;
    // OpenWeather icon code like "10d" (use with iconUrl)
    iconCode: string;
    // Full URL to icon image (2x)
    iconUrl: string;
}

interface WeatherContextType {
    weather: WeatherData | null;
    isLoading: boolean;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

function getConditionFromMainOrId(main?: string, id?: number): WeatherCondition {
    if (main) {
        const m = main.toLowerCase();
        if (m.includes('clear')) return 'clear';
        if (m.includes('cloud')) return 'clouds';
        if (m.includes('rain')) return 'rain';
        if (m.includes('drizzle')) return 'drizzle';
        if (m.includes('snow')) return 'snow';
        if (m.includes('thunder')) return 'thunderstorm';
        if (m.includes('mist') || m.includes('fog')) return 'mist';
        if (m.includes('haze')) return 'haze';
        if (m.includes('smoke')) return 'smoke';
        if (m.includes('sand') || m.includes('dust')) return 'sand';
        if (m.includes('ash')) return 'ash';
        if (m.includes('squall')) return 'squall';
        if (m.includes('tornado')) return 'tornado';
    }

    if (typeof id === 'number') {
        if (id >= 200 && id < 300) return 'thunderstorm';
        if (id >= 300 && id < 400) return 'drizzle';
        if (id >= 500 && id < 600) return 'rain';
        if (id >= 600 && id < 700) return 'snow';
        if (id >= 700 && id < 800) return 'mist';
        if (id === 800) return 'clear';
        if (id > 800 && id < 900) return 'clouds';
    }

    return 'clear';
}

function getIconCode(rawIcon?: string, id?: number): string {
    if (rawIcon) return rawIcon;

    if (typeof id === 'number') {
        if (id >= 200 && id < 300) return '11d';
        if (id >= 300 && id < 400) return '09d';
        if (id >= 500 && id < 505) return '10d';
        if (id === 511) return '13d';
        if (id >= 520 && id < 600) return '09d';
        if (id >= 600 && id < 700) return '13d';
        if (id >= 700 && id < 800) return '50d';
        if (id === 800) return '01d';
        if (id === 801) return '02d';
        if (id === 802) return '03d';
        if (id === 803 || id === 804) return '04d';
    }

    return '01d';
}

const FALLBACK_WEATHER: WeatherData = {
    condition: 'clear',
    temp: 55,
    description: 'clear sky',
    iconCode: '01d',
    iconUrl: 'https://openweathermap.org/img/wn/01d@2x.png',
};

export function WeatherProvider({ children }: { children: ReactNode }) {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchWeather() {
            try {
                const response = await fetch('https://weather-boy.bprhzccdfw.workers.dev/');

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                const primary = data.weather?.[0] ?? null;
                const id: number | undefined = primary ? Number(primary.id) : undefined;
                const iconCode = getIconCode(primary?.icon, id);

                setWeather({
                    condition: getConditionFromMainOrId(primary?.main, id),
                    temp: Math.round(data.main.temp),
                    description: primary?.description ?? 'Unknown',
                    iconCode,
                    iconUrl: `https://openweathermap.org/img/wn/${iconCode}@2x.png`,
                });
            } catch (error) {
                console.error('Failed to fetch weather:', error);
                setWeather(FALLBACK_WEATHER);
            } finally {
                setIsLoading(false);
            }
        }

        fetchWeather();
        const interval = setInterval(fetchWeather, 30 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <WeatherContext.Provider value={{ weather, isLoading }}>
            {children}
        </WeatherContext.Provider>
    );
}

export function useWeather() {
    const context = useContext(WeatherContext);
    if (context === undefined) {
        throw new Error('useWeather must be used within a WeatherProvider');
    }
    return context;
}
