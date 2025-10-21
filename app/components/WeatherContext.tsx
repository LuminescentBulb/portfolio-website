import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type WeatherCondition = 'clear' | 'clouds' | 'rain' | 'drizzle' | 'snow' | 'thunderstorm';

interface WeatherData {
    condition: WeatherCondition;
    temp: number;
    description: string;
}

interface WeatherContextType {
    weather: WeatherData | null;
    isLoading: boolean;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

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

                const condition = data.weather[0].main.toLowerCase() as WeatherCondition;
                setWeather({
                    condition,
                    temp: Math.round(data.main.temp),
                    description: data.weather[0].description,
                });
            } catch (error) {
                console.error('Failed to fetch weather:', error);
                // Fallback
                setWeather({ condition: 'clear', temp: 55, description: 'clear sky' });
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

// Custom hook to use weather data
export function useWeather() {
    const context = useContext(WeatherContext);
    if (context === undefined) {
        throw new Error('useWeather must be used within a WeatherProvider');
    }
    return context;
}