import { useState, useEffect } from 'react';
import { extractDDD, getLocationFromDDD, generateLocationMessage, Location } from '@/services/locationService';

interface UseLocationMessageResult {
  location: Location | null;
  message: string;
  isLoading: boolean;
  error: string | null;
}

/**
 * Hook to generate location-specific message based on phone DDD
 * @param phone Phone number with DDD
 * @returns Location info, message, loading state, and error
 */
export const useLocationMessage = (phone: string): UseLocationMessageResult => {
  const [location, setLocation] = useState<Location | null>(null);
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const ddd = extractDDD(phone);
    
    // Reset if no DDD
    if (!ddd) {
      setLocation(null);
      setMessage('');
      setError(null);
      return;
    }

    const locationInfo = getLocationFromDDD(ddd);
    setLocation(locationInfo);

    // Only generate message if we have a valid location
    if (!locationInfo) {
      setMessage('');
      return;
    }

    // Don't regenerate if we already have a message for this DDD
    if (message && location?.ddd === ddd) {
      return;
    }

    // Generate location-specific message
    const generateMessage = async () => {
      setIsLoading(true);
      setError(null);
      setMessage('');

      try {
        await generateLocationMessage(phone, (chunk) => {
          setMessage((prev) => prev + chunk);
        });
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to generate message';
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    generateMessage();
  }, [phone]);

  return { location, message, isLoading, error };
};

