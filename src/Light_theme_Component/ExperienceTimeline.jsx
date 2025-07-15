import React from "react";

const experiences = [
  {
    company: "IIFA Tech",
    role: "MERN Stack Intern",
    time: "April 2025 – Present",
    description: "Built full-stack apps with React, Node.js, and MongoDB. Led UI/UX design for invoice tools and dashboards.",
  },
  {
    company: "BM Global",
    role: "Frontend Intern",
    time: "Jan 2025 – March 2025",
    description: "Created responsive user interfaces using React and Tailwind. Collaborated with developers and learned Git workflow.",
  },
  {
    company: "Freelance",
    role: "Frontend Developer",
    time: "2023 – Dec 2024",
    description: "Delivered websites frontend for clients. Built end-to-end features with clean and responsive UI.",
  },
];

const ExperienceTimeline = () => {
  return (
    <div className="relative px-4 sm:px-10 py-16 bg-gray-300 -mt-12">
      <h2 className="text-3xl font-bold text-center  text-black -mt-10 md:mt-0 mb-[80px] md:mb-12">My Experience</h2>

      {/* Vertical Line */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-[625px] border-l-4 border-black z-0" />

      <div className="relative z-10 flex flex-col gap-16">
        {experiences.map((exp, index) => {
          const isRight = index % 2 === 0;

          return (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center w-full relative"
            >
              {/* Mobile View */}
              <div className="md:hidden w-full bg-gray-100 border border-gray-200 p-4 rounded-lg shadow-md -mt-9">
                <h3 className="text-lg font-semibold text-black">{exp.company}</h3>
                <p className="text-sm font-medium text-gray-800">{exp.role}</p>
                <p className="text-sm text-gray-500 italic">{exp.time}</p>
              </div>

              {/* Desktop View */}
              {isRight ? (
                <div className="hidden md:flex items-center w-full justify-center">
                  <div className="w-[50%] flex justify-end pr-6">
                    <div className="bg-gray-100 border border-gray-200 p-6 rounded-lg shadow-md relative w-full max-w-xl transform transition-transform duration-300 hover:scale-105">
                      <div className="absolute right-[-16px] top-1/2 transform -translate-y-1/2 w-8 h-1 bg-black" />
                      <h3 className="text-xl font-semibold text-black">{exp.company}</h3>
                      <p className="text-sm font-medium text-gray-800">{exp.role}</p>
                      <p className="text-sm text-gray-500 italic">{exp.time}</p>
                      <p className="text-sm mt-2 text-gray-700">{exp.description}</p>
                    </div>
                  </div>
                  <div className="w-6 h-6 bg-black rounded-full z-10" />
                  <div className="w-[50%]" />
                </div>
              ) : (
                <div className="hidden md:flex items-center w-full justify-center">
                  <div className="w-[50%]" />
                  <div className="w-6 h-6 bg-black rounded-full z-10" />
                  <div className="w-[50%] flex justify-start pl-6">
                    <div className="bg-gray-100 border border-gray-200 p-6 rounded-lg shadow-md relative w-full max-w-xl transform transition-transform duration-300 hover:scale-105">
                      <div className="absolute left-[-16px] top-1/2 transform -translate-y-1/2 w-8 h-1 bg-black" />
                      <h3 className="text-xl font-semibold text-black">{exp.company}</h3>
                      <p className="text-sm font-medium text-gray-800">{exp.role}</p>
                      <p className="text-sm text-gray-500 italic">{exp.time}</p>
                      <p className="text-sm mt-2 text-gray-700">{exp.description}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
