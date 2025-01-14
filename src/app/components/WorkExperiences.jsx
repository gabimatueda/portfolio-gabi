import React from "react";

const experiences = [
  {
    company: "Workana",
    role: "Desenvolvedora Web",
    period: "2024 - now",
    stack: "React, Next.js, TypeScript CSS",
    logo: "/images/works/workana_logo.jpg",
  },
  {
    company: "GeControl",
    role: "Estagiária Desenvolvedora Flutter",
    period: "ago de 2024 - nov de 2024",
    stack: "Flutter, Dart, Postman API, JIRA",
    logo: "/images/works/gecontrol_logo.jpg",
  },
  {
    company: "Frontend Fusion",
    role: "Desenvolvedora React",
    period: "mai de 2024 - ago de 2024",
    stack: "React, Next.js, TypeScript CSS",
    logo: "/images/works/frontend_fusion_logo.jpg",
  },
];

const WorkExperiences = () => {
  return (
    <section id="work-experiences" className="bg-gradient-to-b from-[#121212] via-[#181818] to-[#121212] mt-20">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Experiência
      </h2>
      <div className="max-w-6xl mx-auto px-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex items-center p-6 rounded-lg mb-6 hover:shadow-xl transition bg-transparent border border-white-300"
          >
            {/* Logo da empresa */}
            <img
              src={exp.logo}
              alt={`${exp.company} logo`}
              className="w-16 h-16 mr-6 rounded-full object-contain"
            />
            {/* Informações da experiência */}
            <div>
              <h3 className="text-xl font-semibold text-white">
                {exp.role} -{" "}
                <span className="text-primary-200">{exp.company}</span>
              </h3>
              <p className="text-sm text-white">{exp.period}</p>
              <p className="text-sm text-primary-200 mt-2">
                <span className="font-semibold text-white">Stack:</span>{" "}
                {exp.stack}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperiences;
