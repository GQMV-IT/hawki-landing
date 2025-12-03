import { useState, useEffect, useCallback, useRef } from 'react';

interface UseInactivityTimerOptions {
  timeout: number; // in milliseconds
  onInactive?: () => void;
  enabled?: boolean;
}

interface UseInactivityTimerResult {
  isInactive: boolean;
  resetTimer: () => void;
}

/**
 * Hook to detect user inactivity after a specified timeout
 * Tracks: mousemove, click, keydown, scroll, touchstart
 */
export const useInactivityTimer = ({
  timeout,
  onInactive,
  enabled = true,
}: UseInactivityTimerOptions): UseInactivityTimerResult => {
  const [isInactive, setIsInactive] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = useCallback(() => {
    // Clear existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Reset inactive state
    setIsInactive(false);

    // Only set new timer if enabled
    if (enabled) {
      timerRef.current = setTimeout(() => {
        setIsInactive(true);
        onInactive?.();
      }, timeout);
    }
  }, [timeout, onInactive, enabled]);

  useEffect(() => {
    if (!enabled) {
      // Clear timer and reset state if disabled
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      setIsInactive(false);
      return;
    }

    // Activity events to track
    const events = ['mousemove', 'mousedown', 'keydown', 'scroll', 'touchstart', 'click'];

    // Handler to reset timer on activity
    const handleActivity = () => {
      resetTimer();
    };

    // Add event listeners
    events.forEach((event) => {
      window.addEventListener(event, handleActivity, { passive: true });
    });

    // Start initial timer
    resetTimer();

    // Cleanup
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      events.forEach((event) => {
        window.removeEventListener(event, handleActivity);
      });
    };
  }, [enabled, resetTimer]);

  return { isInactive, resetTimer };
};

