import { useEffect } from 'react';

export const LoggingMiddleware = ({ children }) => {
  useEffect(() => {
    const startTime = Date.now();
    
    const logPageView = () => {
      console.log(`Page viewed at: ${new Date().toISOString()}`);
      // Potential analytics integration
    };

    logPageView();

    return () => {
      const duration = Date.now() - startTime;
      console.log(`Page viewed for ${duration}ms`);
    };
  }, []);

  return children;
};