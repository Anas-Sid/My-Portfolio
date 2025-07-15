// import React, { useEffect, useState } from 'react';
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// import Navbar from '../components/Navbar';
// import HeroSection from '../components/HeroSection';
// import IntroBanner from '../components/IntroBanner';
// import AboutMe from '../components/AboutMe';
// import Skills from '../components/Skills';
// import Portfolio from '../components/Portfolio';
// import Contact from '../components/Contact';
// import Footer from '../components/Footer';
// import ExperienceTimeline from "../components/ExperienceTimeline";



// function FullPortfolio() {
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const hasVisited = sessionStorage.getItem('hasVisitedPortfolio');

//     if (!hasVisited) {
//       setLoading(true);
//       sessionStorage.setItem('hasVisitedPortfolio', 'true');

//       const timer = setTimeout(() => {
//         setLoading(false);
//       }, 3000);

//       return () => clearTimeout(timer);
//     }
//   }, []);

//   if (loading) {
//     return (
//       <div className="w-full h-screen flex items-center justify-center bg-black">
//         <DotLottieReact
//           src="https://lottie.host/81f9ae3c-f9e4-4bf1-a793-a3e533721d6a/I0akilqaWf.lottie"
//           loop
//           autoplay
//           style={{ width: 300, height: 300 }}
//         />
//       </div>
//     );
//   }
//   return (
//     <>
//       <Navbar />
//       <HeroSection />
//       <IntroBanner />
//       <AboutMe />
//       <ExperienceTimeline />
//       <Skills />
//       <Portfolio />
//       <Contact />
//       <Footer />
      
//     </>
//   )
// }

// export default FullPortfolio