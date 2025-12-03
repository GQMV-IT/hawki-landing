import { useState, useEffect } from 'react';

interface LocationData {
  city: string;
  region: string;
  country: string;
}

interface UseIpLocationResult {
  city: string | null;
  dayOfWeek: string;
  greeting: string | null;
  isLoading: boolean;
  error: string | null;
}

const DAYS_OF_WEEK_PT: Record<number, string> = {
  0: 'domingo',
  1: 'segunda-feira',
  2: 'terça-feira',
  3: 'quarta-feira',
  4: 'quinta-feira',
  5: 'sexta-feira',
  6: 'sábado',
};

/**
 * Hook to get user's location from IP and generate a personalized greeting
 * @returns Location info, day of week, greeting message, loading state, and error
 */
export const useIpLocation = (): UseIpLocationResult => {
  const [city, setCity] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Get current day of week in Portuguese
  const dayOfWeek = DAYS_OF_WEEK_PT[new Date().getDay()];

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch('/api/geolocation');
        
        if (!response.ok) {
          throw new Error('Failed to fetch location');
        }

        const data: LocationData = await response.json();
        
        if (data.city) {
          setCity(data.city);
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to get location';
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLocation();
  }, []);

  // Generate the greeting message
  const greeting = city
    ? `Vejo que você está falando comigo de ${city} nessa ${dayOfWeek}, né?`
    : null;

  return { city, dayOfWeek, greeting, isLoading, error };
};

