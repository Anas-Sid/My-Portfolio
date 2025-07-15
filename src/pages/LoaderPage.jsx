import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LoaderPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisitedPortfolio');

    if (!hasVisited) {
      // First time: Show loader and wait full 5s
      sessionStorage.setItem('hasVisitedPortfolio', 'true');

      const timer = setTimeout(() => {
        navigate('/portfolio', { replace: true });
      }, 3000); // ⏱ Full 5 seconds

      return () => clearTimeout(timer);
    } else {
      // If already visited: Do NOT redirect immediately
      // Instead, show loader UI for full 5s to guarantee animation time
      const timer = setTimeout(() => {
        navigate('/portfolio', { replace: true });
      }, 3000); // Wait even if visited before

      return () => clearTimeout(timer);
    }
  }, [navigate]);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <DotLottieReact
        src="https://lottie.host/81f9ae3c-f9e4-4bf1-a793-a3e533721d6a/I0akilqaWf.lottie"
        loop
        autoplay
        style={{ width: 300, height: 300 }}
      />
    </div>
  );
};

export default LoaderPage;
