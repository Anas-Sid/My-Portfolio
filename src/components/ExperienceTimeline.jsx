import React from "react";

const experiences = [
  {
    company: "DadaGroups",
    role: "MERN Stack Developer",
    time: "Jan 2023 – Present",
    description: "Built full-stack apps with React, Node.js, and MongoDB. Led UI/UX design for invoice tools and dashboards.",
  },
  {
    company: "IIFA Tech",
    role: "Frontend Intern",
    time: "Jul 2022 – Dec 2022",
    description: "Created responsive user interfaces using React and Tailwind. Collaborated with developers and learned Git workflow.",
  },
  {
    company: "Freelance Projects",
    role: "Full Stack Developer",
    time: "2021 – 2022",
    description: "Delivered websites and dashboards for clients. Built end-to-end features with clean UI and database integration.",
  },
];

const ExperienceTimeline = () => {
  return (
    <div className="relative px-4 sm:px-10 py-16 bg-[#1a1a1a] -mt-12">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">My Experience</h2>

      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-[625px] border-l-4 border-white z-0" />

      <div className="relative z-10 flex flex-col gap-16">
        {experiences.map((exp, index) => {
          const isRight = index % 2 === 0

          return (
            <div
              key={index}
              className={`flex items-center justify-center w-full relative`}
            >
              {/* Left Side */}
              {isRight ? (
                <>
                  <div className="w-[50%] flex justify-end pr-6">
                    <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md relative w-full max-w-xl transform transition-transform duration-300 hover:scale-105">
                      <div className="absolute right-[-16px] top-1/2 transform -translate-y-1/2 w-8 h-1 bg-white" />
                      <h3 className="text-xl font-semibold text-black">{exp.company}</h3>
                      <p className="text-sm font-medium text-gray-800">{exp.role}</p>
                      <p className="text-sm text-gray-500 italic">{exp.time}</p>
                      <p className="text-sm mt-2 text-gray-700">{exp.description}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="w-6 h-6 bg-white rounded-full z-10" />
                  <div className="w-[50%] hidden md:block" />
                </>
              ) : (
                <>
                  <div className="w-[50%] hidden md:block" />
                  <div className="w-6 h-6 bg-white rounded-full z-10" />
                  <div className="w-[50%] flex justify-start pl-6">
                    <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md relative w-full max-w-xl transform transition-transform duration-300 hover:scale-105">
                      <div className="absolute left-[-16px] top-1/2 transform -translate-y-1/2 w-8 h-1 bg-white" />
                      <h3 className="text-xl font-semibold text-">{exp.company}</h3>
                      <p className="text-sm font-medium text-gray-800">{exp.role}</p>
                      <p className="text-sm text-gray-500 italic">{exp.time}</p>
                      <p className="text-sm mt-2 text-gray-700">{exp.description}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
