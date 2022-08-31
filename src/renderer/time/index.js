import { useState, useEffect } from 'react';

/**
 * Returns the updated time of a given timer.
 *
 * @returns {string} the updated time of the day
 */
function useTimer() {
  const getCurrentTime = () => new Date().toLocaleTimeString();
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
}

/**
 * Returns a React component that returns the current
 * time.
 *
 * @param className a class name can be passed to the
 * timer instance
 * @returns {JSX.Element} a React component that returns
 * the current time.
 */
function Timer({ className = '' }) {
  const time = useTimer();

  return <h2 className={className}>{time}</h2>;
}

export default Timer;
